# uri-beacon-decode
[![npm version](https://badge.fury.io/js/uri-beacon-decode.svg)](http://badge.fury.io/js/uri-beacon-decode)
[![Build Status](https://travis-ci.org/pgaubatz/node-uri-beacon-decode.svg?branch=master)](https://travis-ci.org/pgaubatz/node-uri-beacon-decode)
[![Coverage Status](https://coveralls.io/repos/pgaubatz/node-uri-beacon-decode/badge.svg?branch=master)](https://coveralls.io/r/pgaubatz/node-uri-beacon-decode?branch=master)
[![Dependency Status](https://david-dm.org/pgaubatz/node-uri-beacon-decode.svg)](https://david-dm.org/pgaubatz/node-uri-beacon-decode)

Decode [UriBeacon URI's](https://github.com/google/uribeacon/blob/master/specification/AdvertisingMode.md).  

## Installation

    npm install uri-beacon-decode

## Usage
    var uriBeaconDecode = require('uri-beacon-decode');
    
    var uri = uriBeaconDecode(encodedUriBuffer);
    console.log('Decoded URI: ' + uri);

This module is supposed to be used in conjunction with the [`noble` package](https://github.com/sandeepmistry/noble).
