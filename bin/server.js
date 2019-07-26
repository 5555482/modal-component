var fs = require('fs');

var config;

try {
  config = JSON.parse(fs.readFileSync('./.babelrc'));
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

require('babel-core/register')(config);
require('../server');
