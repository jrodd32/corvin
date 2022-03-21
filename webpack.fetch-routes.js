/* eslint import/no-extraneous-dependencies: 0 */
const request = require('request');
const fs = require('fs');

request('https://corvinsflooring.com/api/v1/routes', (error, response, body) => {
  fs.writeFileSync('webpack.routes.json', body);
});
