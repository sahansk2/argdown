var argdown = require("../../packages/argdown-node/dist/src/index.js").argdown;
var stringifyArgdownData = require("../../packages/argdown-core/dist/src/index.js")
  .stringifyArgdownData;
var container = require("markdown-it-container");
var SyncDotToSvgExportPlugin = require("./SyncDotToSvgExportPlugin");

var SaysWhoPlugin = require("../../packages/argdown-core/dist/src/plugins/SaysWhoPlugin.js")
  .SaysWhoPlugin;
argdown.addPlugin(new SaysWhoPlugin(), "add-proponents");
if (argdown.getPlugin("DotToSvgExportPlugin", "export-svg")) {
  argdown.replacePlugin(
    "DotToSvgExportPlugin",
    new SyncDotToSvgExportPlugin(),
    "export-svg"
  );
}
argdown.defaultProcesses["says-who-map"] = [
  "load-file", // loads Argdown files (request.input)
  "parse-input", // parses them (response.ast)
  "build-model", // builds the data model (response.arguments, response.statements...)
  "build-map", // creates the map (response.map)
  "add-proponents", // our new processor with the SaysWhoPlugin
  "export-dot", // exports the map into dot format
  "export-svg" // exports the dot file into svg format
];

require("../../packages/argdown-prism/index.js");
var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
var UNESCAPE_ALL_RE = new RegExp(
  UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source,
  "gi"
);
function unescapeAll(str) {
  if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
    return str;
  }

  return str.replace(UNESCAPE_ALL_RE, function(match, escaped, entity) {
    if (escaped) {
      return escaped;
    }
    return replaceEntityPattern(match, entity);
  });
}
function removeFrontMatter(str) {
  return str.replace(/[\s]*===+[\s\S]*===+[\s]*/, "");
}
function createContainer(klass, defaultTitle) {
  return [
    container,
    klass,
    {
      render(tokens, idx) {
        const token = tokens[idx];
        const info = token.info
          .trim()
          .slice(klass.length)
          .trim();
        let title = "";
        if (info || defaultTitle) {
          title = `<p class="custom-block-title">${info || defaultTitle}</p>`;
        }
        if (token.nesting === 1) {
          return `<div class="${klass} custom-block">${title}\n`;
        } else {
          return `</div>\n`;
        }
      }
    }
  ];
}
module.exports = md => {
  md.use(...createContainer("buttonlist"));
  md.use(...createContainer("definition"));
  var oldFence = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    var token = tokens[idx];
    var info = token.info ? unescapeAll(token.info).trim() : "";
    var langName = "";
    if (info) {
      langName = info.split(/\s+/g)[0];
    }
    if (langName === "argdown-map") {
      token.info = token.info.replace("argdown-map", "argdown");
    } else if (langName === "argdown-source") {
      token.info = token.info.replace("argdown-source", "argdown");
    } else if (langName === "argdown-cheatsheet") {
      token.info = token.info.replace("argdown-cheatsheet", "argdown");
    }
    if (langName === "argdown" || langName === "argdown-map") {
      var request = {
        input: token.content,
        process: [
          "parse-input",
          "build-model",
          "build-map",
          "transform-closed-groups",
          "colorize",
          "export-dot",
          "export-svg"
        ],
        dotToSvg: { removeProlog: true },
        logExceptions: true,
        throwExceptions: true,
        logLevel: "error"
      };
      var result = argdown.run(request);
      var initialView = "source";
      if (langName === "argdown-map") {
        initialView = "map";
      }
      var mapTitle = "";
      if (result.frontMatter && result.frontMatter.title) {
        mapTitle = result.frontMatter.title;
      }
      if (result.frontMatter && result.frontMatter.runSaysWhoPlugin) {
        result = argdown.run(
          { process: ["add-proponents", "export-dot", "export-svg"] },
          result
        );
      }
      if (result.frontMatter && result.frontMatter.hide) {
        token.content = removeFrontMatter(token.content);
      }
      return `<ArgdownSnippet initial-view="${initialView}" title="${mapTitle}"><template slot="map">${
        result.svg
      }</template><template slot="source">${oldFence(
        tokens,
        idx,
        options,
        env,
        slf
      )}</template></ArgdownSnippet>`;
    } else if (langName === "argdown-cheatsheet") {
      var request = {
        input: token.content,
        process: ["parse-input", "build-model"],
        logExceptions: true,
        throwExceptions: true
      };
      var result = argdown.run(request);
      var explanation = "";
      if (result.frontMatter && result.frontMatter.explanation) {
        explanation = result.frontMatter.explanation;
      }
      var mapTitle = "";
      if (result.frontMatter && result.frontMatter.title) {
        mapTitle = result.frontMatter.title;
      }
      if (result.frontMatter && result.frontMatter.hide) {
        token.content = removeFrontMatter(token.content);
      }
      return `<ArgdownCheatSheet><template slot="source">${oldFence(
        tokens,
        idx,
        options,
        env,
        slf
      )}</template><template slot="title">${mapTitle}</template><template slot="explanation">${explanation}</template></ArgdownCheatSheet>`;
    } else {
      return oldFence(tokens, idx, options, env, slf);
    }
  };
};