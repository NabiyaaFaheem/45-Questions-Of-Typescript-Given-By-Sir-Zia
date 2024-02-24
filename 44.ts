// question no44 //
function makesandwich(...items){
    console.log("making a sandwich according to the items ")
    for(let item of items){
console.log("- " + item);
    }
    console.log("take your sandwich");
}
// call the function with different number of arguments //
makesandwich("chiken","cheese","tomato");
makesandwich("meat","salad","eggs");
makesandwich("vegetables","boiled eggs","cucumber");