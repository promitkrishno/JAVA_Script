let score = 50
console.log(typeof score) // number
console.log(typeof(score)) // number
let s1="33"
console.log(typeof s1) // string
console.log(typeof(s1)) // string

let valueInNumber = Number(s1) // converts string to number
console.log(typeof valueInNumber) // number
console.log(valueInNumber) // 33    
let input="33a"
let valueInNumber2 = Number(input) // converts string to number
console.log(typeof valueInNumber2) // number
console.log(valueInNumber2) // NaN (Not a Number)

let s2=null
let valueInNumber3=Number(s2) // converts null to number
console.log(typeof valueInNumber3) // number
console.log(valueInNumber3) // 0

let s3=undefined
let valueInNumber4=Number(s3) // converts undefined to number
console.log(typeof valueInNumber4) // number
console.log(valueInNumber4) // NaN (Not a Number)

let s4=true
let valueInNumber5=Number(s4) // converts boolean to number
console.log(typeof valueInNumber5) // number
console.log(valueInNumber5) // 1    

let isLogedIn=1
let valueInBoolean=Boolean(isLogedIn) // converts number to boolean
console.log(typeof valueInBoolean) // boolean
console.log(valueInBoolean) // true

//"" => false
//"Promit" => true
