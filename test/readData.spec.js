'use strict';

const readData = require('../lib/readData');

describe('readData', () => {

    it('should read data from from properties file', () => {
        let data = readData('somefile.properties');
        expect(data).toBe('data from properties file');
    });

    it('should read data from from csv file', () => {
        let data = readData('somefile.csv');
        expect(data).toBe('data from csv file');
    });

    it('should read data from from json file', () => {
        let data = readData('somefile.json');
        expect(data).toBe('data from json file');
    });

    it('should read data from from yml file', () => {
        let data = readData('somefile.yml');
        expect(data).toBe('data from yml file');
    });

    it('should read data from from xlsx file', () => {
        let data = readData('somefile.xlsx');
        expect(data).toBe('data from xlsx file');
    });
});