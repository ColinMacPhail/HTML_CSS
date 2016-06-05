// Demonstrating Async gotchas.

// DOESN'T WORK AS INTENDED:

// for( var j = 0; j < 5; j++ ) {  
//  setTimeout ( function () { console.log(j); }, j); 
// }

// WORKS AS INTENDED:

// for( var j = 0; j < 5; j++ ) { 
//  (function (i)  { 
//   setTimeout(function () { console.log(i); }, i); 
//   } ) (j); 
// } 