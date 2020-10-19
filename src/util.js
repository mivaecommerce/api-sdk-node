/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const core = require('util');

/** @module Util */

/**
 * Check if a value is undefined.
 * @param {*} value
 * @returns {boolean}
 */
function isUndefined(value) {
  return value === undefined;
}

/**
 * Check if a value is null or undefined.
 * @param {*} value
 * @returns {boolean}
 */
function isNullOrUndefined(value) {
  return value === undefined || value === null;
}

/**
 * Check if a value is null.
 * @param {*} value
 * @returns {boolean}
 */
function isNull(value) {
  return value === null;
}

/**
 * Check if a value is an array.
 * @param {*} value
 * @returns {boolean}
 */
function isArray(value) {
  return Array.isArray(value);
}

/**
 * Check if a value is a string.
 * @param {*} value
 * @returns {boolean}
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Check if a value is boolean.
 * @param {*} value
 * @returns {boolean}
 */
function isBool(value) {
  return typeof value === 'boolean';
}

/**
 * Check if a value is a numeric object.
 * @param {*} value
 * @returns {boolean}
 */
function isNumber(value) {
  return typeof value === 'number';
}

/**
 * Check if a value is a numeric object and a float.
 * @param {*} value
 * @returns {boolean}
 */
function isFloat(value) {
  return isNumber(value) && !isInt(value);
}

/**
 * Check if a value is a numeric object and a integer.
 * @param {*} value
 * @returns {boolean}
 */
function isInt(value) {
  return isNumber(value) && Math.round(value) === value;
}

/**
 * Check if a value is a object.
 * @param {*} value
 * @returns {boolean}
 */
function isObject(value) {
  return !isArray(value) && !isNull(value) && typeof value === 'object';
}

/**
 * Check if a value is a date object.
 * @param {*} value
 * @returns {boolean}
 */
function isDate(value) {
  return core.types.isDate(value);
}

/**
 * Check if a value is a instance of another.
 * @param {*} value
 * @param {*} type
 * @returns {boolean}
 */
function isInstanceOf(value, type) {
  return value instanceof type;
}

/**
 * Check if a value is callable.
 * @param {*} value
 * @returns {boolean}
 */
function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Check if a value is in an array.
 * @param {*} value
 * @param {Array} array
 * @returns {boolean}
 */
function inArray(value, array) {
  var i;
  var l;

  if (isArray(array)) {
    for (i = 0, l = array.length; i < l; i++) {
      if (array[i] === value) {
        return true;
      }
    }
  }

  return false;
}

module.exports = {
  isUndefined,
  isNullOrUndefined,
  isNull,
  isArray,
  isString,
  isBool,
  isFloat,
  isInt,
  isObject,
  isNumber,
  isDate,
  isInstanceOf,
  isFunction,
  inArray,
  format: core.format
};
