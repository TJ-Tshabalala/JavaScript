let groups = [
    ['Martin', 'Daniel','Keith'],
    ['Margot','Marina','Ali'],
    ['Helen','Jonah','Sambikos']
];

// Lets see if we can find the groups that have two names starting with M

//Example: 
/*
We first loop over the top-level arrays and set a counter, matches, with a start value of 0,
and for each of these top-level arrays, we are going to loop over the values.

When a value starts with an M, we increase matches by one and check whether we have found two matches already.
If we find two Ms, we break out of the inner loop and continue in our outer loop.
This one will move on to the next top-level array, since nothing is happening after the inner loop.

If the name does not start with an M, we do not need to check for matches being 2, and we can continue to the next value in the inner array.

*/
for(let i = 0; i < groups.length; i++){
    let matches = 0;

    for (let j = 0; j < groups[i].length; j++){
        if(groups[i][j].startsWith('M')){
            matches++;
        } else{
            continue;
        }
    }
    if (matches === 2){
        console.log("Found a group with two names starting with an M:");
        console.log(groups[i]);
        break;
    }
}