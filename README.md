# fs.promiser

####[npm : fs.promiser](https://www.npmjs.com/package/fs.promiser)

[![npm version](https://badge.fury.io/js/fs.promiser.svg)](https://badge.fury.io/js/fs.promiser)
[![coverage status](https://coveralls.io/repos/github/void666/fs.promiser/badge.svg)](https://coveralls.io/github/void666/fs.promiser)
[![build status](https://travis-ci.org/void666/fs.promiser.svg?branch=master)](https://travis-ci.org/void666/fs.promiser)
[![npm downloads](https://img.shields.io/npm/dt/fs.promiser.svg)](https://img.shields.io/npm/dt/fs.promiser)

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
`npm install fs.promiser`

### Test
`npm test`