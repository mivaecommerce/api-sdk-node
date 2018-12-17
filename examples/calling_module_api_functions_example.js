/*
 * (c) Miva Inc <https://www.miva.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * $Id: calling_module_api_functions_example.js 71956 2018-12-13 21:20:05Z gidriss $
 */

const api = require('merchantapi');

/* Initialize a client */
var client  = new api.Client('https://www.mystore.com/mm5/json.mvc', 'MyApiToken', 'MySigningKey', {});

/*
 * If you create a custom module or want to hook into an existing modules API functionality it exposes you can
 * use the Module request class to call into the module.
 */

request = new api.requests.Module(client);

request.setModuleCode('MyModuleCode')
  .setModuleFunction('MyModuleFunction');

/* Add custom parameters to the request using the setModuleField method */

request.setModuleField('MyModuleField', 'Foo')
  .setModuleField('MyModuleField_Array', [
    'foo',
    'bar'
  ]);

/*
 * It is best practice to create a custom class for your Module
 * by extending the Module or the Request class.
 */

/* Send the request */
request.send(function(error, response) {
  if (error) {
    // handle error
    console.log(error);
    return;
  }

  if (!response.isSuccess()) {
    console.log('Error', response.getErrorCode(), response.getErrorMessage());
  } else {
    console.log('Success');
  }
});
