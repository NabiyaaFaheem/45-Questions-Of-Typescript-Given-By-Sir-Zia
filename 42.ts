

function make_great(magicians) {
    for(let i = 0; i < magicians.length; i++){
         magicians[i] = "The Great " + magicians[i]
    }
}

let magicians = [
    "peter","brook","steves","hardy","roman","rock"
];



function showmagicians1(magicians){
    for(let i = 0; i < magicians.length; i++){
        console.log(magicians[i])
    }
};

for(let i = 0; i < magicians.length; i++){
    console.log("Orugunal Magicians ",magicians[i]);
}
console.log("The List Has Modified");
make_great(magicians);

showmagicians1(magicians)