'use strict';

const util = require('util');
const promisify = module => {
    return new Proxy(module, {
        get: (moduleName, functionName) => {
            if (functionName in moduleName) {
                if (moduleName[functionName] instanceof Function) {
                    return util.promisify(moduleName[functionName]);
                }
            }
            return moduleName[functionName];
        }
    });
};

module.exports = promisify;