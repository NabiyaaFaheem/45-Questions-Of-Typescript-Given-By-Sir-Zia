// question no 32 //
// checking username //
// making a list of current users

let curr_user = ["doc32","cash4","sara4","subhan6","kash2","ila7"];
let new_user = ["ali2","affan","cash4","sara4","samma12"];

//convert current user to lower case //

let curr_user_lower = curr_user.map(user => user.toLocaleLowerCase());
//seeing a new user list who has been used user name // by loop//
for(let i = 0; i < new_user.length; i++){
    let new_user_lower = new_user[i].toLocaleLowerCase();
    if(curr_user_lower.includes(new_user[i])){
        console.log(`the surname ${new_user[i]}is  in use you will have to enter now user name`);
    }else{
        console.log(`the user name ${new_user[i]}is availible`);
    }
};