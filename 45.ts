// question45
// make function who stores all information about car 
function aboutcar(...args){
    let carinfo = {
        model: "2021",
        manufacture: "2021",
        
    }
    // process additional keyword arguments 
    for(let i = 0; i < args.length; i++){
        let key = args[i];
        let value = args[i + 1]
        carinfo[key] = value 
    };
    return carinfo;
}

// calling a function of car details
let cardetails = aboutcar("red", "optionalfuture");
console.log(cardetails)