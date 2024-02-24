// question no 17 //
// you just found our that your new dinner table wont arrive in time ofr the dinner,and you have space for only two guests//
// print a message to inform //
console.log("i found out that our table wont arrive for the dinner");
console.log("and now i have space only for2 person in my new table");
//

//store a name of guesty in array //
let guest12 = ["affan","rafay","new guest","faheem","ayan","subhan"];

// addding a while loop for remoove guest //
while (guest12.length > 2){
    let remooveguest = guest12.pop();
    console.log(`sorry ${remooveguest}i cant invite you to dinner.`);
}