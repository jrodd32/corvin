/* eslint import/no-extraneous-dependencies: 0 */
const request = require('request');
const fs = require('fs');

// TODO: update to prod domain
request('https://corvin.test/api/v1/routes', (error, response, body) => {
  fs.writeFileSync('webpack.routes.json', body);
});
