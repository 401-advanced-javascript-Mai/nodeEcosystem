'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */

 // check if there is valid input  
 // validator.isValid = (input, rules) => {
     //     return input(rules);
     //   };


     ///// check if the input ia string , boolens , number, function  or array , and return if its just object .   
     validator.isObject = (input) => {
         if (typeof input !== "string" || typeof input !== 'number' || typeof input !== 'boolean' || typeof input !== 'function' || typeof input!== Array.isArray() ) 
         return  typeof input === 'object' ;
 }
 


////// to check if the object has proparties with keys and values 
    validator.keysAreExists= (input)=>{
        if(Object.keys(input)){
      return true;
        }}
   validator.valueAreExists = (input)=>{
       if (Object.values(input)) {
           return true 
       }
   }
////// to check the proper type of proparties 
validator.matchTheTypeRequried = (input) =>{
    Object.values(input).every(value =>{
        typeof value==='string' || typeof value==='number' ||typeof value==="object" 
    })
    return true
}

validator.arrayIsValueOfOneProparties = (input) =>{
    Object.values(input).filter(value =>{
        if (value ===Array.isArray()){
            return true
        }
    }
        )
}
validator.arrayValueIsStringAndNotEmpty = (input) =>{
    Object.values(input).every(val =>{
        if ( typeof val === Array.isArray()){
                if (val.length > 0 ){
                    return true 
                }else{
                    return false
                }
            }
            })
        }

//  validator.itHasApropartiesWithValue = function (input) {
//      let entries = Object.entries(input)
// //  let keys= Object.keys(input) ;
// //  let values = Object.values(input)
// if (!entries){
// console.log(false)   }
// else{
//      entries.every(proparty =>{ if (proparty[0]&& proparty[1]) { console.log(true)}
//      })
// //  return false 
//  }
//  }
//  validator.itHasApropartiesWithValue(input)


 

/// after be sure it object  to be sure that all properties are appear and each one have a value if not it will return (their missed properties in the object ) (must all have a value ) 
//  validator.keyAndValue = (input ) =>{
//      let entries = object.entries(input)
//      entries.forEach(element => {
//         // console.log(element)
//         if ( element[0] && (element[1]) {return ture}
//      })
// }}
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