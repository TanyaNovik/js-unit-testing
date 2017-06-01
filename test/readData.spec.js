'use strict';

const path = require('path');
// instead of relative path with '../../'
// it is better to use path.resolve
//const readData = require('../lib/readData');
const readData = require(path.resolve('lib/readData'));

describe('readData', () => {

    it('should read data from from properties file', (done) => {
        let fileData = readData('test/test-data/somefile.properties');
        fileData.then((data) => {
          expect(data['data']).toBe('data from properties file');
          done();
        });
    });

    it('should read data from from csv file', (done) => {
      let fileData = readData('test/test-data/somefile.csv');
      fileData.then((data) => {
        expect(data[0][0]).toBe('data from csv file');
        done();
      });
    });

    it('should read data from from json file', () => {
        let data = readData('test/test-data/test.json');
        expect(data.data).toBe('data from json file');
    });

    it('should read data from from yml file', () => {
        let data = readData('test/test-data/somefile.yml');
        expect(data.data).toBe('data from yml file');
    });

    it('should read data from from xlsx file', () => {
        let data = readData('test/test-data/somefile.xlsx');
        expect(data.Sheets.Sheet1.A1.v).toBe('data from xlsx file');
    });
});