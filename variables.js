const accountId=1154
let accountEmail="promit1154@gmail.com"
var accountPassword="Promit@1154"
accountCity="Dhaka"
//accountId=1155 // Not allowed because accountId is a constant
accountEmail="promit1155@gmail.com"
accountPassword="Promit@1155"
accountCity="Comilla"
let accountState;

console.log(accountEmail);
console.log(accountId);
console.log(accountPassword);
console.log(accountCity);
/* prefer not to use var because it has function scope and can lead to unexpected behavior */

console.table([accountEmail, accountId, accountPassword, accountCity,accountState]); 