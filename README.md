# uri-beacon-uri-encoding
[![npm version](https://badge.fury.io/js/uri-beacon-uri-encoding.svg)](http://badge.fury.io/js/uri-beacon-uri-encoding)
[![Build Status](https://travis-ci.org/pgaubatz/node-uri-beacon-uri-encoding)](https://travis-ci.org/pgaubatz/node-uri-beacon-uri-encoding)
[![Coverage Status](https://coveralls.io/repos/pgaubatz/node-uri-beacon-uri-encoding/badge.svg)](https://coveralls.io/r/pgaubatz/node-uri-beacon-uri-encoding)
[![Dependency Status](https://david-dm.org/pgaubatz/node-uri-beacon-uri-encoding.svg)](https://david-dm.org/pgaubatz/node-uri-beacon-uri-encoding)

Encode and decode [UriBeacon URIs](https://github.com/google/uribeacon/blob/master/specification/AdvertisingMode.md).  

## Installation

    npm install --save uri-beacon-uri-encoding

## Usage
```javascript
var encoding = require('uri-beacon-uri-encoding');

var uri = 'http://some.url';
var encoded = encoding.encode(uri);
var decoded = encoding.decode(encoded);

assert.strictEqual(decoded, uri);
```

This module is supposed to be used in conjunction with the [`noble` package](https://github.com/sandeepmistry/noble).
