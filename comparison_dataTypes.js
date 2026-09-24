console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);


console.log("2">1);
console.log("02">1);//string is converted to number

console.log(null>0);//returns false because null is converted to 0
console.log(null>=0);//returns true because null is converted to 0
console.log(null==0);//returns false because null is only equal to undefined

console.log("3"===3);//returns false because string is not equal to number "=== is strict equality operator which checks both value and type"