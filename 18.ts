// question no 18 //

//store a location in a array.make sure the array is not in alphabetical order.

let places = [`italy`,`germany`,`agra`,`eifel tower`,`time square`];
// print your array in its original order.
console.log(`original ` + places);

//print your array in aphabetical order without modifying the actual list.
console.log(`copy ` + [...places].sort());
// show that your array is still in its original order by printing it.

console.log(`original ` + places);

// print your array in reverse alphabetical order without changing the order of the original list.
console.log( `copy ` + [...places].sort().reverse());
// show that your array is still in its original order by printing it again.
console.log(`original ` + places);

//  reverse the order of your list.print the array to show that its order has changed.
console.log(`original ` + places.reverse());
// reverse the order of your list again.print the list to show its back to its original order.
console.log(`original ` + places.reverse());
// sort your array so its stored in a alphabetical order.print the array to show that its order has been changed.
console.log(`original ` + places.sort());
//sort to change your array so its stored in reverse alphabetical order. print the list to show that its order has changed.
console.log(`original ` + places.sort().reverse());



