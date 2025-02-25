/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    const reqUrl = new URL(req.url, `http://${req.headers.host}`);
    const parts = reqUrl.pathname.split('/').filter(Boolean);

    res.writeHead(200, { 'Content-Type': 'application/json' });

    const queryParams = Object.fromEntries(reqUrl.searchParams);

    const responseData = {
      parts,
      query: queryParams,
    };

    const responseJson = JSON.stringify(responseData);

    res.end(responseJson);
  });
}

module.exports = {
  createServer,
};
