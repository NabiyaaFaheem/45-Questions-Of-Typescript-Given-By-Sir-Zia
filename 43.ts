// question no 43

//make a function that have return new magician
    function make_great(Magicians){
    let greatmagicians = magicianss.map(magicianss => magicianss + "the great")
    return greatmagicians;
} 

let magicianss = [
     'David',
     'dynamo',
     'Harry Houdini',
     'cries Angel',
     'shin lim'
]

let greatmagicians = make_great(magicianss);

console.log('original Magicians',magicianss);

console.log("Updated",make_great(magicianss));