const accountId = 144553
let accountEmail = "harshit@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "hs@hs.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);


/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])