'use strict';

require('chai').should();

var uriBeacon = require('uri-beacon');
var uriBeaconDecode = require('../lib/decode');

var URIS = require('./fixtures/uris.json');

describe('uriBeaconDecode()', function () {
  it('should decode a UriBeacon-encoded buffer to a URI (string)', function () {
    URIS.forEach(function (uri) {
      uriBeaconDecode(uriBeacon.encode(uri)).should.equal(uri);
    });
  });
});
