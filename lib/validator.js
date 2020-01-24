'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
    return input(rules);
  };
//// to check if input object or not 
// validator.isString = (input) =>{
//     return typeof input === "string" 
// }
// let input =3
validator.isArray = (input) => {
    return Array.isArray(input);
  };

validator.isObject = (input) => {
    if (typeof input !== "string" || typeof input !== 'number' || typeof input !== 'boolean' || typeof input !== 'function' ) 
    return  typeof input === 'object' ;
 }

//  validator.isObject(input) ;
// console.log( 'validator.isObject(mai)', 
//  validator.isObject(input)
// )

///// after be sure it object  to be sure that all properties are appear and each one have a value if not it will return (their missed properties in the object ) (must all have a value ) 
//  validator.keyAndValue = (input ) =>{
//      let entries = object.entries(input)
//      entries.forEach(element => {
//         // console.log(element)
//         if ( !element[0] && !element[1]){
// console.log('element[0]', element[0])
// console.log('element[1]' , element[1])
// // retuen this.isObject(element) ; 
//    }else {
// return (undefined)
// }
// })
//  }
//  validator


//  function keyAndValue (input ){
//     let entries = Object.entries(input)
//     entries.forEach(element => {
//         // console.log(element)
//         if( element[0] && element[1]){
// console.log('element[0]', element[0])
// console.log('element[1]' , element[1])        }
//   }  else{
// console.log('mai')}  }  )}
// keyAndValue(person)
// validator.isValid = (input, rules) => {
    // if (typeof input !== 'object')
    //    {return null;}

    //    let keys = Object.keys(input)
    //    keys.forEach(element =>{
        //    return this.isObject(element)
    //    })
//  };

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
// validator.isString = (input) => {
//   return typeof input === 'string';
// }