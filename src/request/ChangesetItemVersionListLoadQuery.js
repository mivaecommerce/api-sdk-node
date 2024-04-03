/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const util = require('./../util');
const models = require('./../models');
const responses = require('./../responses');
const { Request }  = require('./../abstract');
const { ListQueryRequest }  = require('./../listquery');

/** 
 * Handles API Request ChangesetItemVersionList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/changesetitemversionlist_load_query
 * @class
 */
class ChangesetItemVersionListLoadQuery extends ListQueryRequest {
  /**
   * ChangesetItemVersionListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Changeset} changeset
   */
  constructor(client, changeset = null) {
    super(client);
    this.function = 'ChangesetItemVersionList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'item_id',
      'user_id',
      'user_name',
      'code',
      'module_code',
      'module_name'
    ];

    this.availableSortFields = [
      'id',
      'item_id',
      'user_id',
      'user_name',
      'code',
      'module_id',
      'module_code',
      'module_name'
    ];

    this.changesetId = null;

    if (util.isInstanceOf(changeset, models.Changeset)) {
      if (changeset.getId()) {
        this.setChangesetId(changeset.getId());
      }
    }
  }

  /**
   * Get Changeset_ID.
   * @returns {number}
   */
  getChangesetId() {
    return this.changesetId;
  }

  /**
   * Set Changeset_ID.
   * @param {number} changesetId
   * @returns {ChangesetItemVersionListLoadQuery}
   */
  setChangesetId(changesetId) {
    this.changesetId = changesetId;
    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    if (!util.isNullOrUndefined(this.changesetId)) {
      data['Changeset_ID'] = this.changesetId;
    }

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ChangesetItemVersionListLoadQuery(this, httpResponse, data);
  }
}

module.exports.ChangesetItemVersionListLoadQuery = ChangesetItemVersionListLoadQuery;