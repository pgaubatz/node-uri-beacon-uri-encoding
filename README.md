# uri-beacon-uri-encoding
[![npm version](https://badge.fury.io/js/uri-beacon-decode.svg)](http://badge.fury.io/js/uri-beacon-decode)
[![Build Status](https://travis-ci.org/pgaubatz/node-uri-beacon-decode.svg?branch=master)](https://travis-ci.org/pgaubatz/node-uri-beacon-decode)
[![Coverage Status](https://coveralls.io/repos/pgaubatz/node-uri-beacon-decode/badge.svg?branch=master)](https://coveralls.io/r/pgaubatz/node-uri-beacon-decode?branch=master)
[![Dependency Status](https://david-dm.org/pgaubatz/node-uri-beacon-decode.svg)](https://david-dm.org/pgaubatz/node-uri-beacon-decode)

Encode and decode [UriBeacon URIs](https://github.com/google/uribeacon/blob/master/specification/AdvertisingMode.md).  

## Installation

    npm install --save uri-beacon-uri-encoding

## Usage
    var encoding = require('uri-beacon-uri-encoding');
    
    var uri = 'http://some.url';
    var encoded = encoding.encode(uri);
    var decoded = encoding.decode(encoded);
    
    assert.strictEqual(decoded, uri);

This module is supposed to be used in conjunction with the [`noble` package](https://github.com/sandeepmistry/noble).
