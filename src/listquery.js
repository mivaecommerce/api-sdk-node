/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Request, Response } = require('./abstract');
const util = require('./util');

/** @module ListQuery */

/** Sort Constants */
/** @ignore */
const SORT_ASCENDING    = 'asc';
/** @ignore */
const SORT_DESCENDING   = 'desc';

/** Operator Constants */
/** @ignore */
const OPERATOR_EQ       = 'EQ';         /** Operator: Equals */
/** @ignore */
const OPERATOR_GT       = 'GT';         /** Operator: Greater Than */
/** @ignore */
const OPERATOR_GE       = 'GE';         /** Operator: Greater Than or Equal */
/** @ignore */
const OPERATOR_LT       = 'LT';         /** Operator: Less Than */
/** @ignore */
const OPERATOR_LE       = 'LE';         /** Operator: Less Than or Equal */
/** @ignore */
const OPERATOR_CO       = 'CO';         /** Operator: Contains */
/** @ignore */
const OPERATOR_NC       = 'NC';         /** Operator: Does Not Contain */
/** @ignore */
const OPERATOR_LIKE     = 'LIKE';       /** Operator: Like */
/** @ignore */
const OPERATOR_NOTLIKE  = 'NOTLIKE';    /** Operator: Not Like */
/** @ignore */
const OPERATOR_NE       = 'NE';         /** Operator: Not Equal */
/** @ignore */
const OPERATOR_TRUE     = 'TRUE';       /** Operator: True */
/** @ignore */
const OPERATOR_FALSE    = 'FALSE';      /** Operator: False */
/** @ignore */
const OPERATOR_NULL     = 'NULL';       /** Operator: Is Null */
/** @ignore */
const OPERATOR_IN       = 'IN';         /** Operator: In Set (comma separated list) */
/** @ignore */
const OPERATOR_NOT_IN   = 'NOT_IN';     /** Operator: Not In Set (comma separated list) */
/** @ignore */
const OPERATOR_SUBWHERE = 'SUBWHERE';   /** Operator: SUBWHERE */

/** Valid Operators */
/** @ignore */
const VALID_OPERATORS   = [
  OPERATOR_EQ,
  OPERATOR_GT,
  OPERATOR_GE,
  OPERATOR_LT,
  OPERATOR_LE,
  OPERATOR_CO,
  OPERATOR_NC,
  OPERATOR_LIKE,
  OPERATOR_NOTLIKE,
  OPERATOR_NE,
  OPERATOR_TRUE,
  OPERATOR_FALSE,
  OPERATOR_NULL,
  OPERATOR_IN,
  OPERATOR_NOT_IN,
  OPERATOR_SUBWHERE
];

/** Search Filter Constants */
/** @ignore */
const FILTER_SEARCH         = 'search';
/** @ignore */
const FILTER_SEARCH_AND     = 'search_AND';
/** @ignore */
const FILTER_SEARCH_OR      = 'search_OR';

/** Valid Filters */
/** @ignore */
const VALID_FILTERS         = [
    FILTER_SEARCH,
    FILTER_SEARCH_AND,
    FILTER_SEARCH_OR
];

/** 
 * Abstract request all *List_Load_Query api requests inherit from. 
 * @see https://docs.miva.com/json-api/list-load-query-overview
 */
class ListQueryRequest extends Request {
  /**
   * ListQueryRequest Constructor.
   */
  constructor(client = null) {
    super(client);
    this.sort                       = null;
    this.offset                     = 0;
    this.count                      = 0;
    this.filters                    = new FilterExpression(this);
    this.expressions                = [];
    this.onDemandColumns            = [];
    this.customFilters              = {};
    this.availableOnDemandColumns   = [];
    this.availableCustomFilters     = [];
    this.availableSortFields        = [];
    this.availableSearchFields      = [];
  }

  /**
   * @returns {string}
   * @const
   */
  static get SORT_ASCENDING() {
    return SORT_ASCENDING;
  }

  /**
   * @returns {string}
   * @const
   */
  static get SORT_DESCENDING() {
    return SORT_DESCENDING;
  }

  /**
   * Get the sorting field.
   * @returns {*}
   */
  getSort() {
    return this.sort;
  }

  /**
   * Set the sorting field.
   * @param {string} field
   * @param {string} direction
   * @returns {ListQueryRequest}
   */
  setSort(field, direction = SORT_ASCENDING) {
    direction = direction.toLowerCase();

    if (direction !== SORT_ASCENDING && direction !== SORT_DESCENDING) {
      direction = SORT_ASCENDING;
    }

    if (direction === SORT_DESCENDING && field.indexOf('-') !== 0) {
      field = '-' + field;
    }

    this.sort = field;

    return this;
  }

  /**
   * Get the available sorting fields for the request.
   * @returns {Array}
   */
  getAvailableSortFields() {
    return this.availableSortFields;
  }

  /**
   * Get the record offset.
   * @returns {*}
   */
  getOffset() {
    return this.offset;
  }

  /**
   * Set the record offset.
   * @param {number} offset
   * @returns {ListQueryRequest}
   */
  setOffset(offset) {
    this.offset = offset;
  }

  /**
   * Get the maximum records to request.
   * @returns {number}
   */
  getCount() {
    return this.count;
  }

  /**
   * Set the maximum records to request.
   * @param {number} count
   * @returns {ListQueryRequest}
   */
  setCount(count) {
    this.count = count;
    return this
  }

  /**
   * Get the available search fields for the request.
   * @returns {Array}
   */
  getAvailableSearchFields() {
    return this.availableSearchFields;
  }

  /**
   * Add an on demand column to the request.
   * @param {string|Array} column
   * @returns {ListQueryRequest}
   * @throws {Error}
   */
  addOnDemandColumn(column) {
    if (column.indexOf(':') === -1 && !util.inArray(column, this.availableOnDemandColumns)) {
      throw new Error(util.format('Column %s is not an on demand column. Available on demand columns are %s',
        column, this.availableOnDemandColumns.join(', ')));
    }

    if (!util.inArray(column, this.onDemandColumns)) {
      this.onDemandColumns.push(column);
    }

    return this
  }

  /**
   * Remove an on demand column from the request.
   * @param {string|Array} column
   * @returns {ListQueryRequest}
   */
  removeOnDemandColumn(column) {
    var i;
    var l;

    for (i = 0, l = this.onDemandColumns.length; i < l; i++) {
      if (column === this.onDemandColumns[i]) {
        this.onDemandColumns = this.onDemandColumns.splice(i, 1);
      }
    }

    return this
  }

  /**
   * Set the on demand columns to fetch.
   * @param {Array} columns
   * @returns {ListQueryRequest}
   */
  setOnDemandColumns(columns) {
    var i;
    var l;

    this.onDemandColumns = [];

    for (i = 0, l = columns.length; i < l; i++) {
      this.addOnDemandColumn(columns[i]);
    }

    return this
  }

  /**
   * Get the on demand columns to fetch.
   * @returns {Array}
   */
  getOnDemandColumns() {
    return this.onDemandColumns;
  }

  /**
   * Get the available on demand columns for the request.
   * @returns {Array}
   */
  getAvailableOnDemandColumns() {
    return this.availableOnDemandColumns;
  }

  /**
   * Get the custom filters to apply.
   * @returns {Array}
   */
  getCustomFilters() {
    return this.customFilters;
  }

  /**
   * Get the available custom filters for the request.
   * @returns {Array}
   */
  getAvailableCustomFilters() {
    return this.availableCustomFilters;
  }

  /**
   * Set the search filters to apply to the request.
   * @param {Array|FilterExpression} filters
   * @throws {Error}
   * @returns {ListQueryRequest}
   */
  setFilters(filters) {
    if (!util.isArray(filters) && !util.isInstanceOf(filters, FilterExpression)) {
      throw new Error('Expecting an array of instance of FilterExpression');
    }

    this.filters = filters;

    return this
  }

  /**
   * Get the search filters to apply to the request.
   * @returns {Array|FilterExpression}
   */
  getFilters() {
    return this.filters;
  }

  /**
   * Set a custom filter supported by the request.
   * @param {string} name The custom filter name
   * @param {*} value The custom filter value
   * @returns {ListQueryRequest}
   * @throws {Error}
   */
  setCustomFilter(name, value) {       
    var i;
    var l;

    if (util.isUndefined(this.availableCustomFilters[name])) {
      throw new Error(util.format('Invalid custom filter %s. Available filters are %s',
        name, Object.keys(this.availableCustomFilters).join(', ')));
    }

    if (util.isArray(this.availableCustomFilters[name])) {
      if (!util.inArray(value, this.availableOnDemandColumns[name])) {
        throw new Error(util.format('Invalid custom filter choice for %s. Available choices are %s',
          name, this.availableCustomFilters[name].join(', ')));            
      }
    }

    for (i = 0, l = this.customFilters.length; i < l; i++) {
      if (this.customFilters[i].name === name) {
        this.customFilters[i].value = value;
        return this;
      }
    }

    this.customFilters.push({
        name  : name,
        value : value
    });

    return this;
  }

  /**
   * Remove a custom filter applied to the request.
   * @param {string} name
   * @returns {ListQueryRequest}
   */
  removeCustomFilter(name) {
    var i;
    var l;

    for (i = 0, l = this.customFilters.length; i < l; i++) {
      if (this.customFilters[i].name === name) {
        this.customFilters = this.customFilters.splice(i, 1);
        break;
      }
    }

    return this;
  }

  /**
   * Creates a new FilterExpression object in the context the request.
   * @returns {FilterExpression}
   */
  filterExpression() {
    return new FilterExpression(this);
  }

  /**
   * Reduce the request to an Object.
   * @returns Object
   * @override
   */
  toObject() {
    var i;
    var l;
    
    var object = Object.assign(super.toObject(), {
      Sort    : this.sort,
      Offset  : this.offset,
      Count   : this.count,
      Filter  : []
    });

    if (util.isInstanceOf(this.filters, FilterExpression)) {
      var filters = this.filters.toArray();

      if (!util.isArray(filters)) {
        throw new Error(util.format('Expected filter expression to return an array but got %s',
          typeof(filters)));
      }

      if (filters.length) {
        object['Filter'] = filters;
      }
    } else if (util.isArray(this.filters) && this.filters.length) {
      object['Filter'] = this.filters;
    }

    if (this.onDemandColumns.length) {
      object['Filter'].push({
          name  : 'ondemandcolumns',
          value : this.onDemandColumns
      });
    }

    if (this.customFilters.length) {
      for (i = 0, l = this.customFilters.length; i < l; i++) {
        object['Filter'].push(this.customFilters[i]);
      }
    }

    return object;
  }

  /**
   * @override
   * @param {Object} httpResponse
   * @param {Object} data
   * @returns {Response}
   */
  createResponse(httpResponse, data) {
    return new ListQueryResponse(this, httpResponse, data);
  }
}

/** 
 * Abstract response all *List_Load_Query api responses inherit from.
 * @see https://docs.miva.com/json-api/list-load-query-overview
 */
class ListQueryResponse extends Response {
  /**
   * ListQueryResponse Constructor.
   * @param {Request} request
   * @param {Object} httpResponse
   * @param {Object} data
   */
  constructor(request, httpResponse, data = {}) {
    super(request, httpResponse, data);
  }

  /**
   * @returns {number}
   */
  getTotalCount() {
    return !util.isNullOrUndefined(this.data['data']['total_count']) ?
      this.data['data']['total_count'] : 0;
  }

  /**
   * @returns {number}
   */
  getStartOffset() {
    return !util.isNullOrUndefined(this.data['data']['start_offset']) ?
      this.data['data']['start_offset'] : 0;
  }
}

/** 
 * Filter Expresion 
 * @see https://docs.miva.com/json-api/list-load-query-overview#filter-list-parameters
 */
class FilterExpression {
  /**
   * FilterExpression Constructor.
   * @param {?Request} request
   */
  constructor(request = null) {
    this.request      = request;
    this.parent       = null;
    this.expressions  = [];
  }

  /**
   * @returns {string}
   * @const
   */
  static get OPERATOR_EQ() {
    return OPERATOR_EQ;
  }

  /**
   * @returns {string}
   * @const
   */
  static get OPERATOR_GT() {
    return OPERATOR_GT;
  }

  /**
   * @returns {string}
   * @const
   */
  static get OPERATOR_GE() {
    return OPERATOR_GE;
  }

  /**
   * @returns {string}
   * @const
   */
  static get OPERATOR_LT() {
    return OPERATOR_LT;
  }

  /**
   * @returns {string}
   * @const
   */
  static get OPERATOR_LE() {
    return OPERATOR_LE;
  }

  /**
   * @returns {string}
   * @const
   */
  static get OPERATOR_CO() {
    return OPERATOR_CO;
  }

  /**
   * @returns {string}
   * @const
   */
  static get OPERATOR_NC() {
    return OPERATOR_NC;
  }

  /**
   * @returns {string}
   * @const
   */
  static get OPERATOR_LIKE() {
    return OPERATOR_LIKE;
  }

  /**
   * @returns {string}
   * @const
   */
  static get OPERATOR_NOTLIKE() {
    return OPERATOR_NOTLIKE;
  }

  /**
   * @returns {string}
   * @const
   */
  static get OPERATOR_NE() {
    return OPERATOR_NE;
  }

  /**
   * @returns {string}
   * @const
   */
  static get OPERATOR_TRUE() {
    return OPERATOR_TRUE;
  }

  /**
   * @returns {string}
   * @const
   */
  static get OPERATOR_FALSE() {
    return OPERATOR_FALSE;
  }

  /**
   * @returns {string}
   * @const
   */
  static get OPERATOR_NULL() {
    return OPERATOR_NULL;
  }

  /**
   * @returns {string}
   * @const
   */
  static get OPERATOR_IN() {
    return OPERATOR_IN;
  }

  /**
   * @returns {string}
   * @const
   */
  static get OPERATOR_NOT_IN() {
    return OPERATOR_NOT_IN;
  }

  /**
   * @returns {string}
   * @const
   */
  static get OPERATOR_SUBWHERE() {
    return OPERATOR_SUBWHERE;
  }

  /**
   * @returns {string}
   * @const
   */
  static get FILTER_SEARCH() {
    return FILTER_SEARCH;
  }

  /**
   * @returns {string}
   * @const
   */
  static get FILTER_SEARCH_AND() {
    return FILTER_SEARCH_AND;
  }

  /**
   * @returns {string}
   * @const
   */
  static get FILTER_SEARCH_OR() {
    return FILTER_SEARCH_OR;
  }

  /**
   * Get the parent expression.
   * @returns {?FilterExpression}
   */
  getParent() {
    return this.parent;
  }

  /**
   * Set the parent expression.
   * @param {?FilterExpression} parent
   * @returns {FilterExpression}
   */
  setParent(parent = null) {
    this.parent = parent;
    return this;
  }

  /**
   * Check if this expression is a child of another.
   *
   * @returns {boolean}
   */
  isChild() {
    return this.parent !== null;
  }

  /**
   * Get the child depth.
   * @returns {number}
   */
  childDepth() {
    var i = 0;

    var parent = this.getParent();

    while (parent) {
        parent = parent.getParent();
        i++;
    }

    return i;
  }

  /**
   * Create a new expression instance.
   * @returns FilterExpression
   */
  expr() {
    return new FilterExpression(this.request);
  }

  /**
   * Add a search filter.
   * @param {string} field
   * @param {string} operator
   * @param {*} value
   * @param {string} type
   * @returns {FilterExpression}
   */
  add(field, operator, value, type) {
    operator = operator.toUpperCase();

    if (this.request) {
      if (!util.inArray(field, this.request.getAvailableSearchFields())) {
        throw new Error(util.format('Field %s is invalid. Available fields are: %s',
          field, this.request.getAvailableSearchFields().join(', ')));
      }
    }

    if (!util.inArray(operator, VALID_OPERATORS)) {
      throw new Error(util.format('Operator %s is invalid. Available operators are: %s',
        field, VALID_OPERATORS.join(', ')));
    }

    if (!util.inArray(type, VALID_FILTERS)) {
      throw new Error(util.format('Filter type %s is invalid. Available search filter types are: %s',
        type, VALID_FILTERS.join(', ')));
    }

    if (!this.expressions.length) {
      type = FILTER_SEARCH;
    } else if (this.expressions.length && type === FILTER_SEARCH) {
      type = FILTER_SEARCH_OR;
    }

    if (type === FILTER_SEARCH || type === FILTER_SEARCH_AND) {
      this.expressions.push({
          type  : type,
          entry : new FilterExpressionEntry(field, operator, value, type)
      });
    } else if (type === FILTER_SEARCH_OR) {
      this.expressions.push({
          type  : type,
          entry : new FilterExpressionEntry(field, operator, value, type)
      });
    } else {
      throw new Error(util.format('Invalid type %s', type));
    }

    return this;
  }

  /**
   * Add a AND expression.
   * @param {FilterExpression} expression
   * @returns {FilterExpression}
   * @throws {Error}
   */
  andX(expression) {
    if (!util.isInstanceOf(expression, FilterExpression)) {
      throw new Error('Expecting an instance of FilterExpression');
    }

    expression.setParent(this);

    this.expressions.push({
        type  : FILTER_SEARCH_AND,
        entry : expression
    });

    return this;
  }

  /**
   * Add a OR expression.
   * @param {FilterExpression} expression
   * @returns {FilterExpression}
   * @throws {Error}
   */
  orX(expression) {
    if (!util.isInstanceOf(expression, FilterExpression)) {
      throw new Error('Expecting an instance of FilterExpression');
    }

    expression.setParent(this);

    this.expressions.push({
        type  : FILTER_SEARCH_OR,
        entry : expression
    });

    return this;
  }

  /**
   * Add a equal (x EQ y) filter for specified field.
   * @param {string} field
   * @param {string|number} value
   * @returns {FilterExpression}
   */
  equal(field, value) {
    return this.add(field, OPERATOR_EQ, value, FILTER_SEARCH);
  }

  /**
   * Add a equal (AND x EQ y) filter for specified field.
   *
   * @param {string} field
   * @param {string|number} value
   * @returns {FilterExpression}
   */
  andEqual(field, value) {
    return this.add(field, OPERATOR_EQ, value, FILTER_SEARCH_AND);
  }

  /**
   * Add a equal (OR x EQ y) filter for specified field.
   * @param {string} field
   * @param {string|number} value
   * @returns {FilterExpression}
   */
  orEqual(field, value) {
      return this.add(field, OPERATOR_EQ, value, FILTER_SEARCH_OR);
  }

  /**
   * Add a greater than (x GT y) filter for specified field.
   * @param {string} field
   * @param {number} value
   * @returns {FilterExpression}
   */
  greaterThan(field, value) {
    return this.add(field, OPERATOR_GT, value, FILTER_SEARCH);
  }

  /**
   * Add a greater than (AND x GT y) filter for specified field.
   * @param {string} field
   * @param {string} value
   * @returns {FilterExpression}
   */
  andGreaterThan(field, value) {
    return this.add(field, OPERATOR_GT, value, FILTER_SEARCH_AND);
  }

  /**
   * Add a greater than (OR x GT y) filter for specified field.
   * @param {string} field
   * @param {number} value
   * @returns {FilterExpression}
   */
  orGreaterThan(field, value) {
    return this.add(field, OPERATOR_GT, value, FILTER_SEARCH_OR);
  }

  /**
   * Add a greater than or equal (x GE y) filter for specified field.
   * @param {string} field
   * @param {number} value
   * @returns {FilterExpression}
   */
  greaterThanEqual(field, value) {
    return this.add(field, OPERATOR_GE, value, FILTER_SEARCH);
  }

  /**
   * Add a greater than or equal (AND x GE y) filter for specified field.
   * @param {string} field
   * @param {number} value
   * @returns {FilterExpression}
   */
  andGreaterThanEqual(field, value) {
      return this.add(field, OPERATOR_GE, value, FILTER_SEARCH_AND);
  }

  /**
   * Add a greater than or equal (OR x GE y) filter for specified field.
   * @param {string} field
   * @param {number} value
   * @returns {FilterExpression}
   */
  orGreaterThanEqual(field, value) {
    return this.add(field, OPERATOR_GE, value, FILTER_SEARCH_OR);
  }

  /**
   * Add a less than (x LT y) filter for specified field.
   * @param {string} field
   * @param {string} value
   * @returns {FilterExpression}
   */
  lessThan(field, value) {
    return this.add(field, OPERATOR_LT, value, FILTER_SEARCH);
  }

  /**
   * Add a less than (AND x LT y) filter for specified field.
   * @param {string} field
   * @param {number} value
   * @returns {FilterExpression}
   */
  andLessThan(field, value) {
    return this.add(field, OPERATOR_LT, value, FILTER_SEARCH_AND);
  }

  /**
   * Add a less than (OR x LT y) filter for specified field.
   * @param {string} field
   * @param {number} value
   * @returns {FilterExpression}
   */
  orLessThan(field, value) {
    return this.add(field, OPERATOR_LT, value, FILTER_SEARCH_OR);
  }

  /**
   * Add a less than or equal (x LE y) filter for specified field.
   * @param {string} field
   * @param {number} value
   * @returns {FilterExpression}
   */
  lessThanEqual(field, value) {
    return this.add(field, OPERATOR_LE, value, FILTER_SEARCH);
  }

  /**
   * Add a less than or equal (AND x LE y) filter for specified field.
   * @param {string} field
   * @param {number} value
   * @returns {FilterExpression}
   */
  andLessThanEqual(field, value) {
    return this.add(field, OPERATOR_LE, value, FILTER_SEARCH_AND);
  }

  /**
   * Add a less than or equal (OR x LE y) filter for specified field.
   * @param {string} field
   * @param {number} value
   * @returns {FilterExpression}
   */
  orLessThanEqual(field, value) {
    return this.add(field, OPERATOR_LE, value, FILTER_SEARCH_OR);
  }

  /**
   * Add a contains (x CO y) filter for specified field.
   * @param {string} field
   * @param {string} value
   * @returns {FilterExpression}
   */
  contains(field, value) {
    return this.add(field, OPERATOR_CO, value, FILTER_SEARCH);
  }

  /**
   * Add a contains (AND x CO y) filter for specified field.
   * @param {string} field
   * @param {string} value
   * @returns {FilterExpression}
   */
  andContains(field, value) {
    return this.add(field, OPERATOR_CO, value, FILTER_SEARCH_AND);
  }

  /**
   * Add a contains (OR x CO y) filter for specified field.
   * @param {string} field
   * @param {string} value
   * @returns {FilterExpression}
   */
  orContains(field, value) {
    return this.add(field, OPERATOR_CO, value, FILTER_SEARCH_OR);
  }

  /**
   * Add a does not contains (x NC y) filter for specified field.
   * @param {string} field
   * @param {string} value
   * @returns {FilterExpression}
   */
  doesNotContain(field, value) {
    return this.add(field, OPERATOR_NC, value, FILTER_SEARCH);
  }

  /**
   * Add a does not contains (AND x NC y) filter for specified field.
   * @param {string} field
   * @param {string} value
   * @returns {FilterExpression}
   */
  andDoesNotContain(field, value) {
    return this.add(field, OPERATOR_NC, value, FILTER_SEARCH_AND);
  }

  /**
   * Add a does not contains (OR x NC y) filter for specified field.
   * @param {string} field
   * @param {string} value
   * @returns {FilterExpression}
   */
  orDoesNotContain(field, value) {
    return this.add(field, OPERATOR_NC, value, FILTER_SEARCH_OR);
  }

  /**
   * Add a like (x LIKE y) filter for specified field.
   * @param {string} field
   * @param {string} value
   * @returns {FilterExpression}
   */
  like(field, value) {
    return this.add(field, OPERATOR_LIKE, value, FILTER_SEARCH);
  }

  /**
   * Add a like (AND x LIKE y) filter for specified field.
   * @param {string} field
   * @param {string} value
   * @returns {FilterExpression}
   */
  andLike(field, value) {
    return this.add(field, OPERATOR_LIKE, value, FILTER_SEARCH_AND);
  }

  /**
   * Add a like (OR x LIKE y) filter for specified field.
   * @param {string} field
   * @param {string} value
   * @returns {FilterExpression}
   */
  orLike(field, value) {
      return this.add(field, OPERATOR_LIKE, value, FILTER_SEARCH_OR);
  }

  /**
   * Add a not like (x NOTLIKE y) filter for specified field.
   * @param {string} field
   * @param {string} value
   * @returns {FilterExpression}
   */
  notLike(field, value) {
    return this.add(field, OPERATOR_NOTLIKE, value, FILTER_SEARCH);
  }

  /**
   * Add a not like (AND x NOTLIKE y) filter for specified field.
   * @param {string} field
   * @param {string} value
   * @returns {FilterExpression}
   */
  andNotLike(field, value) {
    return this.add(field, OPERATOR_NOTLIKE, value, FILTER_SEARCH_AND);
  }

  /**
   * Add a not like (OR x NOTLIKE y) filter for specified field.
   * @param {string} field
   * @param {string} value
   * @returns {FilterExpression}
   */
  orNotLike(field, value) {
    return this.add(field, OPERATOR_NOTLIKE, value, FILTER_SEARCH_OR);
  }

  /**
   * Add a not equal (x NE y) filter for specified field.
   * @param {string} field
   * @param {string|number} value
   * @returns {FilterExpression}
   */
  notEqual(field, value) {
    return this.add(field, OPERATOR_NE, value, FILTER_SEARCH);
  }

  /**
   * Add a not equal (AND x NE y) filter for specified field.
   * @param {string} field
   * @param {string|number} value
   * @returns {FilterExpression}
   */
  andNotEqual(field, value) {
    return this.add(field, OPERATOR_NE, value, FILTER_SEARCH_AND);
  }

  /**
   * Add a not equal (OR x NE y) filter for specified field.
   * @param {string} field
   * @param {string|number} value
   * @returns {FilterExpression}
   */
  orNotEqual(field, value) {
    return this.add(field, OPERATOR_NE, value, FILTER_SEARCH_OR);
  }

  /**
   * Add a true (x == true) filter for specified field.
   * @param {string} field
   * @returns {FilterExpression}
   */
  isTrue(field) {
    return this.add(field, OPERATOR_TRUE, null, FILTER_SEARCH);
  }

  /**
   * Add a true (AND x == true) filter for specified field.
   * @param {string} field
   * @returns {FilterExpression}
   */
  andIsTrue(field) {
    return this.add(field, OPERATOR_TRUE, null, FILTER_SEARCH_AND);
  }

  /**
   * Add a true (OR x == true) filter for specified field.
   * @param {string} field
   * @returns {FilterExpression}
   */
  orIsTrue(field) {
    return this.add(field, OPERATOR_TRUE, null, FILTER_SEARCH_OR);
  }

  /**
   * Add a false (x == false) filter for specified field.
   * @param {string} field
   * @returns {FilterExpression}
   */
  isFalse(field) {
    return this.add(field, OPERATOR_FALSE, null, FILTER_SEARCH);
  }

  /**
   * Add a false (AND x == false) filter for specified field.
   * @param {string} field
   * @returns {FilterExpression}
   */
  andIsFalse(field) {
    return this.add(field, OPERATOR_FALSE, null, FILTER_SEARCH_AND);
  }

  /**
   * Add a false (OR x == false) filter for specified field.
   * @param {string} field
   * @returns {FilterExpression}
   */
  orIsFalse(field) {
    return this.add(field, OPERATOR_FALSE, null, FILTER_SEARCH_OR);
  }

  /**
   * Add a is null (x == null) filter for specified field.
   * @param {string} field
   * @returns {FilterExpression}
   */
  isNull(field) {
    return this.add(field, OPERATOR_NULL, null, FILTER_SEARCH);
  }

  /**
   * Add a is null (AND x == null) filter for specified field.
   * @param {string} field
   * @returns {FilterExpression}
   */
  andIsNull(field) {
    return this.add(field, OPERATOR_NULL, null, FILTER_SEARCH_AND);
  }

  /**
   * Add a is null (OR x == null) filter for specified field.
   * @param {string} field
   * @returns {FilterExpression}
   */
  orIsNull(field) {
    return this.add(field, OPERATOR_NULL, null, FILTER_SEARCH_OR);
  }

  /**
   * Add a in (x IN y,z,.. ) filter for specified field.
   * @param {string} field
   * @param {Array|string} values
   * @returns {FilterExpression}
   */
  isIn(field, values) {
    return this.add(field, OPERATOR_IN, values, FILTER_SEARCH);
  }

  /**
   * Add a in (AND x IN y,z,.. ) filter for specified field.
   * @param {string} field
   * @param {Array|string} values
   * @returns {FilterExpression}
   */
  andIsIn(field, values) {
    return this.add(field, OPERATOR_IN, values, FILTER_SEARCH_AND);
  }

  /**
   * Add a in (OR x IN y,z,.. ) filter for specified field.
   * @param {string} field
   * @param {Array|string} values
   * @returns {FilterExpression}
   */
  orIsIn(field, values) {
    return this.add(field, OPERATOR_IN, values, FILTER_SEARCH_OR);
  }

  /**
   * Add a not in (x NOTIN y,z,.. ) filter for specified field.
   * @param {string} field
   * @param {Array|string} values
   * @returns {FilterExpression}
   */
  notIn(field, values) {
    return this.add(field, OPERATOR_NOT_IN, values, FILTER_SEARCH);
  }

  /**
   * Add a not in (AND x NOTIN y,z,.. ) filter for specified field.
   * @param {string} field
   * @param {Array|string} values
   * @returns {FilterExpression}
   */
  andNotIn(field, values) {
    return this.add(field, OPERATOR_NOT_IN, values, FILTER_SEARCH_AND);
  }

  /**
   * Add a not in (OR x NOTIN y,z,.. ) filter for specified field.
   * @param {string} field
   * @param {Array|string} values
   * @returns {FilterExpression}
   */
  orNotIn(field, values) {
    return this.add(field, OPERATOR_NOT_IN, values, FILTER_SEARCH_OR);
  }

  /**
   * Reduce the built expression(s) to an array.
   * @returns {Array}
   */
  toArray() {
    var i;
    var l;
    var entry;
    var ret = [];

    for (i = 0, l = this.expressions.length; i < l; i++) {
        entry = {};

      if (util.isInstanceOf(this.expressions[i]['entry'], FilterExpression)) {
        entry = {
          name  : this.expressions[i]['type'],
          value : this.expressions[i]['entry'].toArray()
        };
      } else {
        if (this.isChild()) {
          entry = {
              field: this.expressions[i]['type'],
              operator: 'SUBWHERE',
              value: [
                {
                  field     : this.expressions[i]['entry'].getLeft(),
                  operator  : this.expressions[i]['entry'].getOperator(),
                  value     : util.isArray(this.expressions[i]['entry'].getRight()) ?
                    this.expressions[i]['entry'].getRight().join(',') : this.expressions[i]['entry'].getRight()
                },
              ]
          };
        } else {
          entry = {
            name  : this.expressions[i]['type'],
            value : [
              {
                field     : this.expressions[i]['entry'].getLeft(),
                operator  : this.expressions[i]['entry'].getOperator(),
                value     : util.isArray(this.expressions[i]['entry'].getRight()) ?
                  this.expressions[i]['entry'].getRight().join(',') : this.expressions[i]['entry'].getRight()
              }
            ]
          };
        }
      }

      ret.push(entry);
    }

    return ret;
  }
}

/** Filter Expression Entry */
class FilterExpressionEntry {
  /**
   * FilterExpressionEntry Constructor.
   * @param left
   * @param operator
   * @param right
   * @param search
   */
  constructor(left, operator, right, search = 'search') {
    this.left       = left;
    this.operator   = operator;
    this.right      = right;
    this.search     = search;
  }

  /**
   * Get the left side of the expression.
   * @returns {string}
   */
  getLeft() {
    return this.left;
  }

  /**
   * Set the left side of the comparison.
   * @param {string} left
   * @returns {FilterExpressionEntry}
   */
  setLeft(left) {
    this.left = left;
    return this;
  }

  /**
   * Get the expression operator.
   * @returns {string}
   */
  getOperator() {
    return this.operator;
  }

  /**
   * Set the expression operator.
   * @param {string} operator
   * @returns {FilterExpressionEntry}
   */
  setOperator(operator) {
    this.operator = operator;
    return this;
  }

  /**
   * Get the right side of the expression.
   * @returns {string}
   */
  getRight() {
    return this.right;
  }

  /**
   * Set the right side of the expression.
   * @param {string} right
   * @returns {FilterExpressionEntry}
   */
  setRight(right) {
    this.right = right;
    return this;
  }
}

module.exports = {
  ListQueryRequest,
  ListQueryResponse,
  FilterExpression,
  FilterExpressionEntry
};
