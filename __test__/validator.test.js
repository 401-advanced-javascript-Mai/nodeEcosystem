'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive () ... DRY it out
  //  i make the function that can test all 


  // if the input is string return false
  it('strings', () => {
    let str = 'yes';
    expect(validator.isObject(str)).toBeFalsy();  
  });
  
    // if the input is number return false
  it('numbers', () => {
    let num = 1;
    expect(validator.isObject(num)).toBeFalsy();
  });
  
    // if the input is array return false
  it('arrays', () => {
    let arr = ['a'];
    expect(validator.isArray(arr)).toBeFalsy();
  });

    // if the input is object return true
  it('objects', () => {
    let obj = {x:'y'};
    expect(validator.isObject(obj)).toBeTruthy();
  });
   
  // if the input is boolens return false  
  it('booleans', () => {
    let bool = false;
    expect(validator.isObject(bool)).toBeFalsy();
  });

      // if the input is object return false
  it('functions', () => {
    let func = () => {};
    expect(validator.isObject(func)).toBeFalsy();
  });

});



describe('validator module performs complex validations', () => {

    it('validates if the input is object or not ', () => {
        const susan = {
          id:'123-45-6789',
          name:'Susan McDeveloperson',
          age: 37,
          children:[],
        }; 
        // let str = 'mai';
        expect(validator.isObject(susan)).toBeTruthy();
      });
    
  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(true).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(true).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(true).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(true).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});