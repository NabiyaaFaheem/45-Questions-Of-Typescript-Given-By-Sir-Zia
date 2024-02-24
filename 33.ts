// Question33
// ordinal number: ordinal number indicate their position in a array,such as 1st 

function ordinalnumber(n){
    if(n === 1){
        return"1st"
    }else if(n === 2){
        return "2nd"
    }else if(n ===3){
        return "3rd"
    }else {
        return n + "th";
    }
}

// stores numbers 1 to 9 in array 

let num =[1,2,3,4,5,6,7,8,9];

for(let i = 0; i <num.length; i++){
    console.log(ordinalnumber(num[i]))
}