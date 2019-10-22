/* eslint import/no-extraneous-dependencies: 0 */
const request = require('request');
const fs = require('fs');

// TODO: update to prod domain
request('http://142.93.198.27/api/v1/routes', (error, response, body) => {
  fs.writeFileSync('webpack.routes.json', body);
});
