/* eslint import/no-extraneous-dependencies: 0 */
const request = require('request');
const fs = require('fs');

request('/base-site', (error, response, body) => {
  fs.writeFileSync('webpack.routes.json', body);
});
