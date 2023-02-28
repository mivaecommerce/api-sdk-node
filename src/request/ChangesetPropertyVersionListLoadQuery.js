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
 * Handles API Request ChangesetPropertyVersionList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/changesetpropertyversionlist_load_query
 * @class
 */
class ChangesetPropertyVersionListLoadQuery extends ListQueryRequest {
  /**
   * ChangesetPropertyVersionListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Changeset} changeset
   */
  constructor(client, changeset = null) {
    super(client);
    this.function = 'ChangesetPropertyVersionList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'prop_id',
      'type',
      'code',
      'product_id',
      'cat_id',
      'sync',
      'version_id',
      'version_user_id',
      'version_user_name',
      'source_user_id',
      'source_user_name'
    ];

    this.availableSortFields = [
      'id',
      'prop_id',
      'type',
      'code',
      'product_id',
      'cat_id',
      'sync',
      'version_id',
      'version_user_id',
      'version_user_name',
      'source_user_id',
      'source_user_name'
    ];

    this.availableOnDemandColumns = [
      'settings',
      'product',
      'category',
      'source',
      'source_notes',
      'image'
    ];
    this.changesetId = null;

    if (util.isInstanceOf(changeset, models.Changeset)) {
      this.setChangesetId(changeset.getId());
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
   * @returns {ChangesetPropertyVersionListLoadQuery}
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

    data['Changeset_ID'] = this.getChangesetId();

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.ChangesetPropertyVersionListLoadQuery(this, httpResponse, data);
  }
}

module.exports.ChangesetPropertyVersionListLoadQuery = ChangesetPropertyVersionListLoadQuery;