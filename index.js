'use strict';
const fs = require('fs');
const promisify = require('./promisify');

class fsPromiser {
    static _get() {
        return promisify(fs);
    }
}
module.exports = fsPromiser._get();
