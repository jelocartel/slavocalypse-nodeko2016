var components = require('./get-components')();

require('./create-require-config')(components);
require('./create-less-bundle')(components);
