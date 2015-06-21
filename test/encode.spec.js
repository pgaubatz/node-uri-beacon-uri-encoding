'use strict';

require('chai').should();

var encode = require('../lib/encode');

describe('URI Beacon encode()', function () {
  it('should encode URLs', function () {
    var encoded = encode('https://www.uribeacon.org/test');

    encoded[0].should.equal(0x01); // 'https://www.' prefix

    encoded[1].should.equal('u'.charCodeAt(0));
    encoded[2].should.equal('r'.charCodeAt(0));
    encoded[3].should.equal('i'.charCodeAt(0));

    encoded[10].should.equal(0x01); // '.org/' suffix

    encoded[11].should.equal('t'.charCodeAt(0));
    encoded[12].should.equal('e'.charCodeAt(0));
    encoded[13].should.equal('s'.charCodeAt(0));
    encoded[14].should.equal('t'.charCodeAt(0));

    encoded.length.should.equal(15);
  });

  it('should encode URLs and strip trailing slashes', function () {
    encode('https://www.uribeacon.org/')[10].should.equal(0x08); // '.org' suffix
    encode('http://1.at/').length.should.equal(1 + 4); // 1 prefix + 4 characters
  });

  it('should encode URNs', function () {
    var encoded = encode('urn:uuid:B1E13D51-5FC9-4D5B-902B-AB668DD54981');

    encoded[0].should.equal(0x04); // URN prefix

    encoded[1].should.equal(0xB1);
    encoded[16].should.equal(0x81);

    encoded.length.should.equal(17);
  });

  it('should encode unknown URIs', function () {
    var encoded = encode('wrong://wrong');
    [0x77, 0x72, 0x6f, 0x6e, 0x67, 0x3a, 0x2f, 0x2f, 0x77, 0x72, 0x6f, 0x6e, 0x67].forEach(function (val, i) {
      encoded[i].should.equal(val);
    });
  });

  it('should throw a TypeError if something other than a string is provided', function () {
    [123, {}, false].forEach(function (value) {
      encode.bind(encode, value).should.throw(TypeError);
    });
  });

  it('should throw an Error if the encoded URI is longer than 18 bytes', function () {
      encode.bind(encode, 'http://this.is.clearly.longer.than.18.bytes').should.throw(Error);
  });
});
