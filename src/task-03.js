"use strict";

const findBestEmployee = function(employees) {
  const allKeys = Object.keys(employees);
  const allValues = Object.values(employees);
  const maxValue = Math.max(...allValues);
  return allKeys[allValues.indexOf(maxValue)];
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); 

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); 

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); 
