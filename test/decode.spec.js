'use strict';

require('chai').should();

var encode = require('../lib/encode');
var decode = require('../lib/decode');

var URIS = require('./fixtures/uris.json');

describe('URI Beacon decode()', function () {
  it('should decode a UriBeacon-encoded buffer to a URI (string)', function () {
    URIS.forEach(function (uri) {
      decode(encode(uri)).should.equal(uri);
    });
  });
  it('should throw an exception if something other than a Buffer is provided', function () {
    decode.bind(decode, 'this is not a Buffer').should.throw(TypeError);
  });
});
