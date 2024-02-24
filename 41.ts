// question no 41 //
let Magician = ["peter","brook","steves","hardy","roman","rock"]
//console.log printing //
console.log("/these are the magicians/")
//passing a array to functions //
function showmagicians(magician){
    for(let i = 0; i < magician.length; i++){
      console.log(magician[i])
    }
}
//calling the function with magician array //
showmagicians(Magician);//
console.log("the question is completed");