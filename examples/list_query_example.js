/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * $Id: list_query_example.js 71961 2018-12-13 21:25:45Z gidriss $
 */

const api   = require('merchantapi');
const util  = require('util');

/* Initialize a client */
var client  = new api.Client('https://www.mystore.com/mm5/json.mvc', 'MyApiToken', 'MySigningKey', {});

/*
 * All Request objects which inherit from ListQueryRequest
 * can utilize the FilterExpression class to fluently add
 * search filters to the *List_Load_Query requests.
 *
 * @see ListQueryRequest in listquery.js
 * @see FilterExpression in listquery.js
 */

var request = new api.requests.ProductListLoadQuery();

/*
 * Create a FilterExpression object for the request.
 * This will enforce only adding search filters to
 * defined fields in ProductListLoadQuery. Trying to
 * filter against undefined fields throws an exception.
 *
 * @see ProductListLoadQuery::availableSearchFields
 * @see ProductListLoadQuery::getAvailableSearchFields()
 * @see FilterExpression
 */

filters = request.filterExpression();

/*
 * Alternately, you can just create a FilterExpression object
 * directly.
 *
 * filters = new api.FilterExpression()
 *
 * This will not enforce a requests available search fields.
 *
 * filters = new api.FilterExpression(request)
 *
 * This will enforce a requests available search fields.
 */

filters.equal('code', 'foo')
  .orEqual('code', 'bar');

/*
 * You can nest additional expressions to create
 * more complex search queries:
 */

filters.orX(
  filters.expr()
    .like('code', 'BAZ%')
    .andGreaterThan('price', 9.99)
);

request.setFilters(filters);

/*
 * This would result in a query along the lines of:
 *
 * [...] WHERE code = 'foo' OR code = 'bar' OR ( code LIKE 'BAZ%' AND price > 9.99 )
 */

/* You can get an array of available search fields for a ListQueryRequest */
availableSearchFields = request.getAvailableSearchFields();

/* You can also just supply a custom array of list filters you wish to apply */
request.setFilters([
  {
    name  : 'search',
    value : {
      field    : 'code',
      operator : 'EQ',
      value    : 'Foo'
    }
  },
  {
    name  : 'search_AND',
    value : {
      field    : 'price',
      operator : 'GT',
      value    : 9.99
    }
  }
]);

/*
 * Some *List_Load_Query functions allow you to include additional data in the response
 * by specifying additional on demand columns
 */

/* You can add a single column */
request.addOnDemandColumn('column');

/* You can set (and replace) an array columns */
request.setOnDemandColumns(['column','column2','column3']);

/* You can get an array of supported columns from the Request */
availableColumns = request.getAvailableOnDemandColumns();

/* You can set all supported on demand columns the request supports like this */
request.setOnDemandColumns(request.getAvailableOnDemandColumns());

/*
 * Lists which include Custom Fields (Product,Category,Order) you must explicitly specify
 * the custom field module and code as an on demand column or using wildcards
 */

request.addOnDemandColumn('CustomField_Values:*'); // Includes ALL custom fields
request.addOnDemandColumn('CustomField_Values:customfields:*'); // Includes all fields provided by the customfields module
request.addOnDemandColumn('CustomField_Values:customfields:MyFieldCode'); // includes only the MyFieldCode provided by the customfields module

/* You can sort the result list by using  the setSort method on the Request */
request.setSort('field', api.requests.ProductListLoadQuery.SORT_DESCENDING);

/* Get an array of available sort fields */
availableSortFields = request.getAvailableSortFields();

/*
 * Some *List_Load_Query functions support custom filters specific to the request.
 * You can add custom filters using the setCustomFilter method. The value type will
 * vary for each custom field.
 */
request.setCustomFilter('Custom_Filter_Name', 'Custom_Filter_Value');

/* Send the request */
request.send(function(error, response){
  if (error) {
    // Handle Error
    console.log(error);
    return;
  } else if (!response.isSuccess()) {
    console.log('Load Products Error', response.getErrorCode(), response.getErrorMessage());
  }

  response.getProducts().forEach(function(product){
    console.log(util.format('Product ID: %d Code: %s Name: %s',
      product.getId(),
      product.getCode(),
      product.getName()));
  });
});
