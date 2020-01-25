"use strict";

const countProps = function(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count;
};

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
