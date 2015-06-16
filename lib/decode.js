'use strict';

var uuid = require('node-uuid');

var prefixes = require('./prefixes');
var suffixes = require('./suffixes');

function decodeURL(data) {
  var url = '';

  for (var i = 0; i < data.length; i++) {
    var s = String.fromCharCode(data[i]);
    url +=
      (data[i] < suffixes.length)
        ? suffixes[data[i]]
        : s;
  }

  return url;
}

function decodeURN(data) {
  return uuid.unparse(data);
}

function decode(data, prefix) {
  return (prefix === 4) ? decodeURN(data) : decodeURL(data);
}

module.exports = function (data) {
  var prefix = data[0];
  if (prefix <= 4) {
    return prefixes[prefix] + decode(data.slice(1), prefix);
  }
  return decode(data);
};
