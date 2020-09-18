'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var warning = require('warning');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var warning__default = /*#__PURE__*/_interopDefaultLegacy(warning);

let warned = {};

function deprecated(propType, explanation) {
  return function validate(props, propName, componentName, ...rest) { // Note ...rest here
    if (props[propName] != null) {
      const message = `"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`;
      if (!warned[message]) {
        warning__default['default'](false, message);
        warned[message] = true;
      }
    }

    return propType(props, propName, componentName, ...rest); // and here
  };
}

function _resetWarned() {
  warned = {};
}

deprecated._resetWarned = _resetWarned;

exports.deprecated = deprecated;
