//question no 16 //
let guests11 = ["affan","rafay","faheem"];
//add a guest in thr beggining //
guests11.unshift("ayan");
// add aguest in the middle //
let middleIndex = Math.floor(guests11.length / 2);
guests11.splice(middleIndex,0,"New guest");
// add a guest in the end of the list //
guests11.push("subhan");
console.log("new set of invititaion");
console.log("i just found a bigger table");
for(let i = 0 ; i < guests11.length; i++){
    console.log(`i would like to invite ${guests11[i]} on dinner`)
}
