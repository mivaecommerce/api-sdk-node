/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const { Model } = require('./../abstract');

/** EXCLUSION_SCOPE constants. */
/** @ignore */
const EXCLUSION_SCOPE_BASKET = 'basket';
/** @ignore */
const EXCLUSION_SCOPE_GROUP = 'group';
/** @ignore */
const EXCLUSION_SCOPE_ITEM = 'item';

/** 
 * PriceGroupExclusion data model.
 * @class
 */
class PriceGroupExclusion extends Model {
  /**
   * PriceGroupExclusion Constructor.
   * @param {Object} data
   * @returns {void}
   */
  constructor(data = {}) {
    super(data);
  }

  /**
   * Constant EXCLUSION_SCOPE_BASKET
   * @returns {string}
   * @const
   * @static
   */
  static get EXCLUSION_SCOPE_BASKET() {
    return EXCLUSION_SCOPE_BASKET;
  }

  /**
   * Constant EXCLUSION_SCOPE_GROUP
   * @returns {string}
   * @const
   * @static
   */
  static get EXCLUSION_SCOPE_GROUP() {
    return EXCLUSION_SCOPE_GROUP;
  }

  /**
   * Constant EXCLUSION_SCOPE_ITEM
   * @returns {string}
   * @const
   * @static
   */
  static get EXCLUSION_SCOPE_ITEM() {
    return EXCLUSION_SCOPE_ITEM;
  }

  /**
   * Get id.
   * @returns {number}
   */
  getId() {
    return this.getField('id', 0);
  }
  
  /**
   * Get scope.
   * @returns {string}
   */
  getScope() {
    return this.getField('scope');
  }
  
  /**
   * Set id.
   * @param {number} id
   * @returns {PriceGroupExclusion}
   */
  setId(id) {
    return this.setField('id', id);
  }

  /**
   * Set scope.
   * @param {string} scope
   * @returns {PriceGroupExclusion}
   */
  setScope(scope) {
    return this.setField('scope', scope);
  }
}

module.exports.PriceGroupExclusion = PriceGroupExclusion;