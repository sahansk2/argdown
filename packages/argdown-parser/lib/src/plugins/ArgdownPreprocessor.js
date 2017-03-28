'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var _Statement = require('../model/Statement.js');

var _Argument = require('../model/Argument.js');

var _EquivalenceClass = require('../model/EquivalenceClass.js');

var _chevrotain = require('chevrotain');

var _ArgdownLexer = require('./../ArgdownLexer.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArgdownPreprocessor = function () {
  _createClass(ArgdownPreprocessor, [{
    key: 'run',
    value: function run(result) {
      result.statements = this.statements;
      result.arguments = this.arguments;
      return result;
    }
  }]);

  function ArgdownPreprocessor() {
    _classCallCheck(this, ArgdownPreprocessor);

    this.name = "ArgdownPreprocessor";
    var $ = this;

    var statementReferencePattern = /\[(.+)\]/;
    var statementDefinitionPattern = /\[(.+)\]\:/;
    var statementMentionPattern = /\@\[(.+)\](\s?)/;
    var argumentReferencePattern = /\<(.+)\>/;
    var argumentDefinitionPattern = /\<(.+)\>\:/;
    var argumentMentionPattern = /\@\<(.+)\>(\s?)/;
    var linkPattern = /\[(.+)\]\((.+)\)/;

    var uniqueTitleCounter = 0;
    function getUniqueTitle() {
      uniqueTitleCounter++;
      return "Untitled " + uniqueTitleCounter;
    }
    function getEquivalenceClass(title) {
      if (!title) return null;

      var ec = $.statements[title];
      if (!ec) {
        ec = new _EquivalenceClass.EquivalenceClass();
        ec.title = title;
        $.statements[title] = ec;
      }
      return ec;
    }

    var currentStatement = null;
    var currentStatementOrArgument = null;
    var currentArgument = null;
    var currentArgumentReconstruction = null;
    var currentInference = null;
    var rangesStack = [];
    var parentsStack = [];
    var currentRelation = null;

    function onArgdownEntry() {
      $.statements = {};
      $.arguments = {};
      currentStatement = null;
      currentStatementOrArgument = null;
      currentArgumentReconstruction = null;
      currentInference = null;
      currentArgument = null;
      rangesStack = [];
      parentsStack = [];
      currentRelation = null;
    }
    function onStatementEntry(node, parentNode) {
      currentStatement = new _Statement.Statement();
      if (parentNode.name == 'argdown') {
        currentStatement.role = "thesis";
      }
      currentStatementOrArgument = currentStatement;
      node.statement = currentStatement;
    }
    function onStatementExit(node) {
      var statement = node.statement;
      if (!statement.title || statement.title == '') {
        statement.title = getUniqueTitle();
      }
      var equivalenceClass = getEquivalenceClass(statement.title);
      equivalenceClass.members.push(statement);
      if (statement.role == "thesis") {
        equivalenceClass.isUsedAsThesis = true; //members are used outside of argument reconstructions (not as premise or conclusion)
      }
      currentStatement = null;
    }
    function onStatementDefinitionEntry(node) {
      var match = statementDefinitionPattern.exec(node.image);
      if (match != null) {
        currentStatement.title = match[1];
        node.statement = currentStatement;
      }
    }
    function onStatementReferenceEntry(node) {
      var match = statementReferencePattern.exec(node.image);
      if (match != null) {
        currentStatement.title = match[1];
        node.statement = currentStatement;
      }
    }
    function onStatementMentionExit(node) {
      var match = statementMentionPattern.exec(node.image);
      if (match) {
        node.title = match[1];
        if (node.image[node.image.length - 1] == " ") {
          node.trailingWhitespace = ' ';
        } else {
          node.trailingWhitespace = '';
        }
        if (currentStatement) {
          var range = { type: 'statement-mention', title: node.title, start: currentStatement.text.length };
          currentStatement.text += node.image;
          range.stop = currentStatement.text.length - 1;
          currentStatement.ranges.push(range);
        }
      }
    }
    function updateArgument(title) {
      currentArgument = $.arguments[title];
      if (!currentArgument) {
        currentArgument = new _Argument.Argument();
        currentStatementOrArgument = currentArgument;
        currentArgument.title = title;
        //we are in the ArgumentDefinition token, parentNode is the argumentDefinition rule
        $.arguments[currentArgument.title] = currentArgument;
      }
      currentStatement = new _Statement.Statement();
      currentArgument.descriptions.push(currentStatement);
    }
    function onArgumentDefinitionEntry(node, parentNode) {
      var match = argumentDefinitionPattern.exec(node.image);
      if (match != null) {
        var title = match[1];
        updateArgument(title);
        parentNode.argument = currentArgument;
      }
    }
    function onArgumentDefinitionOrReferenceExit() {
      currentStatement = null;
      currentArgument = null;
    }
    function onArgumentReferenceEntry(node, parentNode) {
      var match = argumentReferencePattern.exec(node.image);
      if (match != null) {
        var title = match[1];
        updateArgument(title);
        parentNode.argument = currentArgument;
      }
    }
    function onArgumentMentionExit(node) {
      var match = argumentMentionPattern.exec(node.image);
      if (match) {
        node.title = match[1];
        if (node.image[node.image.length - 1] == " ") {
          node.trailingWhitespace = ' ';
        } else {
          node.trailingWhitespace = '';
        }
        if (currentStatement) {
          var range = { type: 'argument-mention', title: node.title, start: currentStatement.text.length };
          currentStatement.text += node.image;
          range.stop = currentStatement.text.length - 1;
          currentStatement.ranges.push(range);
        }
      }
    }
    function onFreestyleTextEntry(node) {
      node.text = "";
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = node.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var child = _step.value;

          node.text += child.image;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (currentStatement) currentStatement.text += node.text;
    }
    function onLinkEntry(node) {
      var match = linkPattern.exec(node.image);
      var linkRange = { type: 'link', start: currentStatement.text.length };
      node.url = match[2];
      node.text = match[1];
      currentStatement.text += node.text;
      linkRange.stop = currentStatement.text.length - 1;
      linkRange.url = node.url;
      currentStatement.ranges.push(linkRange);
      if (node.image[node.image.length - 1] == ' ') {
        currentStatement.text += ' ';
        node.trailingWhitespace = ' ';
      } else {
        node.trailingWhitespace = '';
      }
    }

    function onBoldEntry() {
      var boldRange = { type: 'bold', start: currentStatement.text.length };
      rangesStack.push(boldRange);
      currentStatement.ranges.push(boldRange);
    }
    function onBoldExit(node) {
      var boldEnd = _.last(node.children);
      if (boldEnd.image[boldEnd.image.length - 1] == ' ') {
        currentStatement.text += ' ';
        node.trailingWhitespace = ' ';
      } else {
        node.trailingWhitespace = '';
      }
      var range = _.last(rangesStack);
      range.stop = currentStatement.text.length - 1;
      rangesStack.pop();
    }
    function onItalicEntry() {
      var italicRange = { type: 'italic', start: currentStatement.text.length };
      rangesStack.push(italicRange);
      currentStatement.ranges.push(italicRange);
    }
    function onItalicExit(node) {
      var italicEnd = _.last(node.children);
      if (italicEnd.image[italicEnd.image.length - 1] == ' ') {
        currentStatement.text += ' ';
        node.trailingWhitespace = ' ';
      } else {
        node.trailingWhitespace = '';
      }
      var range = _.last(rangesStack);
      range.stop = currentStatement.text.length - 1;
      rangesStack.pop();
    }

    function onRelationExit(node) {
      var relation = node.relation;
      var contentNode = node.children[1];
      var content = contentNode.argument || contentNode.statement;
      var target = getRelationTarget(content);
      if (relation) {
        if (relation.from) relation.to = target;else {
          relation.from = target;
        }
        relation.from.relations.push(relation);
        relation.to.relations.push(relation);
      }
    }
    function onIncomingSupportEntry(node) {
      var target = _.last(parentsStack);
      currentRelation = { type: "support", from: target };
      node.relation = currentRelation;
    }
    function onIncomingAttackEntry(node) {
      var target = _.last(parentsStack);
      currentRelation = { type: "attack", from: target };
      node.relation = currentRelation;
    }
    function onOutgoingSupportEntry(node) {
      var target = _.last(parentsStack);
      currentRelation = { type: "support", to: target };
      node.relation = currentRelation;
    }
    function onOutgoingAttackEntry(node) {
      var target = _.last(parentsStack);
      currentRelation = { type: "attack", to: target };
      node.relation = currentRelation;
    }
    function onRelationsEntry() {
      parentsStack.push(getRelationTarget(currentStatementOrArgument));
    }
    function getRelationTarget(statementOrArgument) {
      var target = statementOrArgument;
      if (statementOrArgument instanceof _Statement.Statement) {
        if (!statementOrArgument.title) statementOrArgument.title = getUniqueTitle();
        target = getEquivalenceClass(statementOrArgument.title);
      }
      return target;
    }
    function onRelationsExit() {
      currentRelation = null;
      parentsStack.pop();
    }

    function onArgumentEntry(node, parentNode, childIndex) {
      var argument = null;
      if (childIndex > 0) {
        var precedingSibling = parentNode.children[childIndex - 1];
        if (precedingSibling.name == 'argumentReference' || precedingSibling.name == 'argumentDefinition') {
          argument = precedingSibling.argument;
        } else if ((0, _chevrotain.tokenMatcher)(precedingSibling, _ArgdownLexer.ArgdownLexer.Emptyline)) {
          precedingSibling = parentNode.children[childIndex - 2];
          if (precedingSibling.name == 'argumentReference' || precedingSibling.name == 'argumentDefinition') {
            argument = precedingSibling.argument;
          }
        }
      }
      if (!argument) {
        argument = new _Argument.Argument();
        argument.title = getUniqueTitle();
        $.arguments[argument.title] = argument;
      }
      node.argument = argument;
      currentArgumentReconstruction = argument;
    }
    function onArgumentStatementExit(node, parentNode, childIndex) {
      if (node.children.length > 1) {
        //first node is ArgdownLexer.ArgumentStatementStart
        var statementNode = node.children[1];
        var statement = statementNode.statement;
        statement.role = "premise";
        if (childIndex > 0) {
          var precedingSibling = parentNode.children[childIndex - 1];
          if (precedingSibling.name == 'inference') {
            statement.role = "conclusion";
            statement.inference = precedingSibling.inference;
          }
        }
        var ec = getEquivalenceClass(statement.title);
        ec.isUsedInArgument = true;
        currentArgumentReconstruction.pcs.push(statement);
        node.statement = statement;
        node.statementNr = currentArgumentReconstruction.pcs.length;
      }
    }
    function onInferenceEntry(node) {
      currentInference = { inferenceRules: [], metaData: {} };
      node.inference = currentInference;
    }
    function onInferenceRulesExit(node) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = node.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var child = _step2.value;

          if (child.name == 'freestyleText') {
            currentInference.inferenceRules.push(child.text.trim());
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
    function onMetadataStatementExit(node) {
      var key = node.children[0].text;
      var value = null;
      if (node.children.length == 2) {
        value = node.children[1].text;
      } else {
        value = [];
        for (var i = 1; i < node.children.length; i++) {
          value.push(node.children[i].text);
        }
      }
      currentInference.metaData[key] = value;
    }
    function onHeadingExit(node) {
      var headingStart = node.children[0];
      node.heading = headingStart.image.length;
      node.text = node.children[1].text;
    }

    this.argdownListeners = {
      argdownEntry: onArgdownEntry,
      headingExit: onHeadingExit,
      statementEntry: onStatementEntry,
      statementExit: onStatementExit,
      argumentEntry: onArgumentEntry,
      argumentStatementExit: onArgumentStatementExit,
      inferenceEntry: onInferenceEntry,
      inferenceRulesExit: onInferenceRulesExit,
      metadataStatementExit: onMetadataStatementExit,
      StatementDefinitionEntry: onStatementDefinitionEntry,
      StatementReferenceEntry: onStatementReferenceEntry,
      StatementMentionExit: onStatementMentionExit,
      ArgumentDefinitionEntry: onArgumentDefinitionEntry,
      ArgumentReferenceEntry: onArgumentReferenceEntry,
      ArgumentMentionExit: onArgumentMentionExit,
      argumentDefinitionExit: onArgumentDefinitionOrReferenceExit,
      argumentReferenceExit: onArgumentDefinitionOrReferenceExit,
      incomingSupportEntry: onIncomingSupportEntry,
      incomingSupportExit: onRelationExit,
      incomingAttackEntry: onIncomingAttackEntry,
      incomingAttackExit: onRelationExit,
      outgoingSupportEntry: onOutgoingSupportEntry,
      outgoingSupportExit: onRelationExit,
      outgoingAttackEntry: onOutgoingAttackEntry,
      outgoingAttackExit: onRelationExit,
      relationsEntry: onRelationsEntry,
      relationsExist: onRelationsExit,
      freestyleTextEntry: onFreestyleTextEntry,
      italicEntry: onItalicEntry,
      italicExit: onItalicExit,
      boldEntry: onBoldEntry,
      boldExit: onBoldExit,
      LinkEntry: onLinkEntry
    };
  }

  _createClass(ArgdownPreprocessor, [{
    key: 'logRelations',
    value: function logRelations(data) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Object.keys(data.statements)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var statementKey = _step3.value;

          var statement = data.statements[statementKey];
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = statement.relations[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var relation = _step5.value;

              if (relation.from == statement) {
                console.log("Relation from: " + relation.from.title + " to: " + relation.to.title + " type: " + relation.type);
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = Object.keys(data.arguments)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var argumentKey = _step4.value;

          var argument = data.arguments[argumentKey];
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = argument.relations[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var _relation = _step6.value;

              if (_relation.from == argument) {
                console.log("Relation from: " + _relation.from.title + " to: " + _relation.to.title + " type: " + _relation.type);
              }
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }]);

  return ArgdownPreprocessor;
}();

module.exports = {
  ArgdownPreprocessor: ArgdownPreprocessor
};
//# sourceMappingURL=ArgdownPreprocessor.js.map