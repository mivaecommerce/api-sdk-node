/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/** @module Version */

/** @ignore */
const VERSION_MAJOR = 2;

/** @ignore */
const VERSION_MINOR = 0;

/** @ignore */
const VERSION_PATCH = 3;

/** Holds version information */
class Version {
  /**
   * @returns {number}
   * @static
   * @const
   */
  static get VERSION_MAJOR() {
    return VERSION_MAJOR;
  }

  /**
   * @returns {number}
   * @static
   * @const
   */
  static get VERSION_MINOR() {
    return VERSION_MINOR;
  }

  /**
   * @returns {number}
   * @static
   * @const
   */
  static get VERSION_PATCH() {
    return VERSION_PATCH;
  }

  /**
   * @returns {string}
   * @static
   * @const
   */
  static get VERSION_STRING() {
    return '2.0.3';
  }
}

module.exports = Version;
