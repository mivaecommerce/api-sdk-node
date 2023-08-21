/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { VariableValue } = require('./VariableValue');

/** 
 * VersionSettings data model.
 * @class
 */
class VersionSettings extends VariableValue {
  /**
   * VersionSettings Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Set an items value
   * @return {VersionSettings}
   */
  setItem(item, value) {
    if (!this.data || this.isObject()) {
      this.data[item] = value;
    }

    return this;
  }

  /**
   * Set an items property value
   * @return {VersionSettings}
   */
  setItemProperty(item, property, value) {
    if (!this.data || this.isObject()) {
      if (!hasItem(item)) {
        setItem(item, {});
      }

      this.data[item][property] = value;
    }

    return this;
  }

  /**
   * Check if an item exists
   * @return {bool}
   */
  hasItem(item) {
    if (this.isObject()) {
      if (util.isObject(this.data[item])) {
        return true;
      }
    }

    return false;
  }

  /**
   * Check if and item has a property
   * @return {bool}
   */
  itemHasProperty(item, property) {
    if (this.isObject()) {
      if (util.isObject(this.data[item])) {
        return !util.isNullOrUndefined(this.data[item][property]);
      }
    }

    return false;
  }

  /**
   * Get an items or null if it does not exist
   * @return {*?}
   */
  getItem(item) {
    if (hasItem(item)) {
      return this.data[item];
    }

    return null;
  }

  /**
   * Get an items property, or null if it does not exist
   * @return {*?}
   */
  getItemProperty() {
    if (itemHasProperty(item)) {
      return this.data[item][property];
    }

    return null;
  }
}

module.exports.VersionSettings = VersionSettings;