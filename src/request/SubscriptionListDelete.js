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

/** 
 * Handles API Request SubscriptionList_Delete. Scope: Store. 
 * @see https://docs.miva.com/json-api/functions/subscriptionlist_delete
 * @class
 */
class SubscriptionListDelete extends Request {
  /**
   * SubscriptionListDelete Constructor.
   * @param {?BaseClient} client
   */
  constructor(client) {
    super(client);
    this.function = 'SubscriptionList_Delete';
    this.scope = Request.REQUEST_SCOPE_STORE;
    this.subscriptionIds = [];
  }

  /**
   * Get Subscription_IDs.
   * @returns {Array}
   */
  getSubscriptionIds() {
    return this.subscriptionIds;
  }

  /**
   * Add Subscription_IDs.
   * @param {number} subscriptionId
   * @returns {SubscriptionListDelete}
   */
  addSubscriptionId(subscriptionId) {
    this.subscriptionIds.push(subscriptionId);
    return this;
  }

  /**
   * Add Subscription model.
   * @param {Subscription} subscription
   * @throws {Error}
   * @returns {SubscriptionListDelete}
   */
  addSubscription(subscription) {
    if (!util.isInstanceOf(subscription, models.Subscription)) {
      throw new Error(util.format('Expected instance of Subscription but got %s',
        typeof subscription));
    }

    if (subscription.getId()) {
      this.subscriptionIds.push(subscription.getId());
    }

    return this;
  }

  /**
   * Reduce the request to a an object.
   * @override
   * @returns {Object}
   */
  toObject() {
    var data = super.toObject();

    data['Subscription_IDs'] = this.subscriptionIds;

    return data;
  }

  /**
   * Create a response object from the response data.
   * @override
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new responses.SubscriptionListDelete(this, httpResponse, data);
  }
}

module.exports.SubscriptionListDelete = SubscriptionListDelete;