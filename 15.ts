// question no 15 //

let guest_list = [`nawaz sharif`,`imran khan`,`asif alizardari`];

for(let i=0; i<guest_list.length; i++){

    console.log(`dear mr. ` + guest_list[i] + `,\n\nit is our pleasure to invite you in our party.\n\nthank you`)
}

let absent_guest = `imran khan`;
let new_guest = `kamran khan tessori`;

guest_list[0] = new_guest ;

for(let i=0; i<guest_list.length; i++){

    console.log(`dear mr. ` + guest_list[i] + `,\n\nit is our pleasure to invite you in our party.\n\nthank you`)
}

console.log(`mr.${absent_guest}is not coming to the party.`);

