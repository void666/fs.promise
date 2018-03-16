'use strict';
const fs = require('../index');

describe('fs.promiser', function () {
    it('should be able to read from file and execute then block', () => {
        return fs.readFile('test.json')
            .then(data => {
                const parsedJson = JSON.parse(data);
                expect(parsedJson.code).equal('fs.promiser');
                expect(parsedJson.name).equal('FS Promiser');
            })
            .catch(err => {
                console.log('Error', err);
            });
    });
    it('should be able to get the constants from FS, which is a non function', () => {
        const R_OK = fs.R_OK;
        expect(typeof R_OK).not.equal('Function');
    });
});
