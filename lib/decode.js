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

module.exports = function (data) {
  if (!Buffer.isBuffer(data)) {
    throw new TypeError('\'data\' is expected to be an instance of Buffer');
  }

  var prefix = data[0];
  if (prefix > prefixes.length) {
    return data.toString();
  }

  data = data.slice(1);
  return prefixes[prefix] +
    (prefix < prefixes.indexOf('urn:uuid:')
      ? decodeURL(data)
      : decodeURN(data));
};
