'use strict';

var url = require('url');

var UUID = require('node-uuid');

var prefixes = require('./prefixes');
var suffixes = require('./suffixes');

function findIndex(str, patterns) {
  for (var i = 0; i < patterns.length; i++) {
    var at = str.indexOf(patterns[i]);
    if (at >= 0) {
      return {
        index: i,
        at: at
      };
    }
  }
}

function encodeURL(parsedURL) {
  var protoHost = parsedURL.protocol + '//' + parsedURL.host;
  var rest = parsedURL.href.substr(protoHost.length, parsedURL.href.length);

  if (rest !== '/') {
    protoHost += '/';
    rest = rest.slice(1);
  } else {
    rest = ''; // strip trailing slash
  }

  var prefix = findIndex(parsedURL.href, prefixes);
  var suffix = findIndex(protoHost, suffixes);

  var hostname = protoHost.slice(prefixes[prefix.index].length, suffix && suffix.at);
  var port = protoHost.slice(suffix && suffix.at + suffixes[suffix.index].length);

  return Buffer.concat([
    new Buffer([prefix.index]),
    new Buffer(hostname),
    (suffix && new Buffer([suffix.index])) || new Buffer(0),
    (suffix && new Buffer(port)) || new Buffer(0),
    new Buffer(rest)
  ]);
}

function encodeURN(parsedURI) {
  var uuid = UUID.parse(parsedURI.path.slice(2));
  return new Buffer([4].concat(uuid));
}

function encodeOther(uri) {
  return new Buffer(uri.trim());
}

module.exports = function (uri) {
  var parsedUri = url.parse(uri);

  if (parsedUri.protocol === 'urn:') {
    return encodeURN(parsedUri);
  }
  if (parsedUri.protocol === 'http:' || parsedUri.protocol === 'https:') {
    return encodeURL(parsedUri);
  }
  return encodeOther(uri);
};
