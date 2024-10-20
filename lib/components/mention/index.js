'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index.js');
var mention$1 = require('./src/mention.js');
var mention = require('./src/mention2.js');
var install = require('../../utils/vue/install.js');

const ElMention = install.withInstall(mention$1["default"]);

exports.mentionEmits = mention.mentionEmits;
exports.mentionProps = mention.mentionProps;
exports.ElMention = ElMention;
exports["default"] = ElMention;
//# sourceMappingURL=index.js.map
