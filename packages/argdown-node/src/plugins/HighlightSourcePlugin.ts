import * as _ from "lodash";
import {
  IArgdownPlugin,
  IRequestHandler,
  IArgdownRequest,
  isObject,
  mergeDefaults,
  DefaultSettings
} from "@argdown/core";
import * as Prism from "prismjs";
import "@argdown/prism";

/**
 * Settings used by the WebComponentExportPlugin
 */
export interface IHighlightSourceSettings {
  /**
   * Remove FrontMatter from highlighted source
   */
  removeFrontMatter?: boolean;
}
declare module "@argdown/core" {
  interface IArgdownRequest {
    /**
     * Settings for the [[WebComponentExportPlugin]]
     */
    sourceHighlighter?: IHighlightSourceSettings;
  }

  interface IArgdownResponse {
    /**
     * Highlighted Argdown source code (powered by Prism.js)
     *
     * Provided by the [[HighlightSourcePlugin]]
     */
    highlightedSource?: string;
  }
}
const defaultSettings: DefaultSettings<IHighlightSourceSettings> = {
  removeFrontMatter: false
};
export class HighlightSourcePlugin implements IArgdownPlugin {
  name = "HighlightSourcePlugin";
  defaults: IHighlightSourceSettings;
  constructor(config?: IHighlightSourceSettings) {
    this.defaults = _.defaultsDeep({}, config, defaultSettings);
  }
  getSettings(request: IArgdownRequest) {
    if (isObject(request.sourceHighlighter)) {
      return request.sourceHighlighter;
    } else {
      request.sourceHighlighter = {};
      return request.sourceHighlighter;
    }
  }
  prepare: IRequestHandler = request => {
    mergeDefaults(this.getSettings(request), this.defaults);
  };

  run: IRequestHandler = (request, response) => {
    const settings = this.getSettings(request);
    const code = settings.removeFrontMatter
      ? this.removeFrontMatter(request.input!)
      : request.input;

    response.highlightedSource = `<pre><code class="language-argdown">${Prism.highlight(
      code!,
      Prism.languages.argdown,
      "argdown"
    )}</code></pre>`;
  };
  removeFrontMatter(str: string) {
    return str.replace(/[\s]*===+[\s\S]*===+[\s]*/, "");
  }
}
