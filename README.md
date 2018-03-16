# fs.proms

#### [npm : fs.proms](https://www.npmjs.com/package/fs.proms)

[![npm version](https://badge.fury.io/js/fs.promisify.svg)](https://badge.fury.io/js/fs.proms)
[![coverage status](https://coveralls.io/repos/github/void666/fs.promise/badge.svg?branch=master)](https://coveralls.io/github/void666/fs.promise?branch=master)
[![build status](https://travis-ci.org/void666/fs.promise.svg?branch=master)](https://travis-ci.org/void666/fs.promise)
[![npm downloads](https://img.shields.io/npm/dt/fs.proms.svg)](https://img.shields.io/npm/dt/fs.proms)


Minimal promise wrapper on top of fs module. 

#### Usage
`Note : node version >= 8.10`

``` 
const fs = require('fs.proms');

fs.readFile('/path/to/file.txt', options)
    .then((data) => {
        ... //Do Something
    })
    .catch((err) => {
        console.log('Error', err);
    })
```

### Installation
`npm install fs.proms`

### Test
`npm test`