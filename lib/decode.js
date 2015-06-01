'use strict';

var uuid = require('node-uuid');

var PREFIXES = require('./prefixes.json');
var SUFFIXES = require('./suffixes.json');

function decodeURL(data) {
  var foundSlash = false;
  var url = '';

  for (var i = 0; i < data.length; i++) {
    var s = String.fromCharCode(data[i]);
    if (s === '/') {
      foundSlash = true;
    }
    url += (!foundSlash && data[i] < SUFFIXES.length) ? SUFFIXES[data[i]] : s;
  }

  return url;
}

function decodeURN(data) {
  return uuid.unparse(data);
}

function decode(prefix, data) {
  return (prefix === 4) ? decodeURN(data) : decodeURL(data);
}

module.exports = function (data) {
  var prefix = data[0];

  return PREFIXES[prefix] + decode(prefix, data.slice(1));
};