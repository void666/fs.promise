# fs.promisify

#### [npm : fs.promisify](https://www.npmjs.com/package/fs.promiser)

[![npm version](https://badge.fury.io/js/fs.promisify.svg)](https://badge.fury.io/js/fs.promisify)
[![coverage status](https://coveralls.io/repos/github/void666/fs.promise/badge.svg?branch=master)](https://coveralls.io/github/void666/fs.promise?branch=master)
[![build status](https://travis-ci.org/void666/fs.promise.svg?branch=master)](https://travis-ci.org/void666/fs.promise)
[![npm downloads](https://img.shields.io/npm/dt/fs.promisify.svg)](https://img.shields.io/npm/dt/fs.promisify)


Minimal promise wrapper on top of fs module. 

#### Usage
`Note : node version >= 8.10`

``` 
fs.readFile('/path/to/file.txt', options)
    .then((data) => {
        ... //Do Something
    })
    .catch((err) => {
        console.log('Error', err);
    })
```

### Installation
`npm install fs.promisify`

### Test
`npm test`