// Question31
// EMTY Array OF users

let users =["admin","nabiya,user","ayan,user"]; 
if(users.length >0){
    for(let i = 0; i < users.length;i++){
        if(users[i]=== "admin") {  
            console.log("hello admin would you like to check some status report?")
        }else{
            console.log(`hello ${users[i]}thank you for logging again`);
        }
    }
}else{
    console.log("we need to find some users");
}