// Question35
// animals: think of at least three different animals that have a common character 

let animals = ["lion","cat","zebra"];

// using for loop for printing each animal 
console.log("the three common animal's are",animals)
for(let i = 0; i <animals.length; i++){
    if(animals[i] =="lion"){
        console.log(`${animals[i]} is a very dangerous animal`)
    }else if(animals[i] =="cat"){
        console.log(`${animals[i]} would make be a great pet`)
    }else if(animals[i] =="zebra"){
        console.log(`${animals[i]} is a great animal`)
    }
};
console.log("any would be great pet if we treat well")

