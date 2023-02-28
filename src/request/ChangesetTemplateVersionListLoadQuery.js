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
 * Handles API Request ChangesetTemplateVersionList_Load_Query. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/changesettemplateversionlist_load_query
 * @class
 */
class ChangesetTemplateVersionListLoadQuery extends ListQueryRequest {
  /**
   * ChangesetTemplateVersionListLoadQuery Constructor.
   * @param {?BaseClient} client
   * @param {?Changeset} changeset
   */
  constructor(client, changeset = null) {
    super(client);
    this.function = 'ChangesetTemplateVersionList_Load_Query';
    this.scope = Request.REQUEST_SCOPE_STORE;

    this.availableSearchFields = [
      'id',
      'templ_id',
      'parent_id',
      'item_id',
      'prop_id',
      'sync',
      'filename',
      'dtstamp',
      'user_id',
      'user_name'
    ];

    this.availableSortFields = [
      'id',
      'templ_id',
      'parent_id',
      'item_id',
      'prop_id',
      'sync',
      'filename',
      'dtstamp',
      'user_id',
      'user_name'
    ];

    this.availableOnDemandColumns = [
      'notes',
      'source',
      'settings'
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
   * @returns {ChangesetTemplateVersionListLoadQuery}
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
    return new responses.ChangesetTemplateVersionListLoadQuery(this, httpResponse, data);
  }
}

module.exports.ChangesetTemplateVersionListLoadQuery = ChangesetTemplateVersionListLoadQuery;