# V [![npm](https://img.shields.io/npm/v/v.svg)](https://npmjs.org/package/v) [![downloads](https://img.shields.io/npm/dm/v.svg)](https://npmjs.org/package/v) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![npm](https://img.shields.io/npm/l/v.svg)](LICENSE)
Synchronized, realtime, cloud hosted, native JavaScript variables and constants

[![Build Status](https://travis-ci.com/DiegoRBaquero/V.svg?token=RmCH18hHqxd9wdtEPyix&branch=master)](https://travis-ci.com/DiegoRBaquero/V)

V extends your in-memory variables to also be saved/persisted instantly. Variables and constants are instantly synced
between all your running instances of V. When you restart V, variables and constants are reloaded automatically.

### Current Features
- Keeps your variables on the cloud
- Syncs variables between instances
- Automatic variables rehidration (reloading)

#### Requires NodeJS 6+, deasync

### TODO:
- Web GUI
- History - Time machine
- Events pub/sub

## Examples:

First: Get a new ID (Web GUI soon), this will print your ID on the console
```js
const V = require('v')
const v = new v()
```

Then use it:
```js
const V = require('v')
const v = new v('the-id-from-the-console')

v.myVar = 5
v.const('constant', 10)
v.close
```

© Diego Rodríguez Baquero 2016 - 2017