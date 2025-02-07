// // Using concat - combining string variables
// let s1 = 'Hello ';
// let s2 = 'JavaScript';
// let result = s1.concat(s2);
// console.log(result);

// // Converting a string to an array
// // using split
// arr_result = result.split(" ");
// console.log(arr_result);
// // Can use any character to split the string
// let favouriteFruits = 'strawberry,watermelon,grapefruit';
// let arr_fruits = favouriteFruits.split(",");
// console.log(arr_fruits);


// // Converting an array to a string
// // using a join() method

// let letters = ['a', 'b', 'c'];
// let x = letters.join("");
// console.log(x);

// // Working with index and positions

// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";

// let index_re = poem.indexOf("re");
// console.log(index_re);

// // Another way to search for a string 
// // Use the search() method
// // used to look for a string pattern.
// // looking for the character at the index, rather than the index itself use
// // charAt(index) method - index is taken at as an argument


// let pos1 = poem.charAt(100);
// console.log(pos1);
const wordsVar = 'yeah, wE huRT pEoPLE';

function myFunction(x){
    let lower_it = x.toLowerCase();
  // console.log(lower_it);
   // Convert the phrase to array
   let split_arr = lower_it.split(" ");
   let arr = [];
   // initialize array with split_array
    arr = split_arr;
   // console.log(arr);
    
   arr.forEach((item) =>{
       //console.log(item);
       let singleLetter = item.slice(0,1);
       let restWord = item.slice(1);
       // Make singleLetter var to upper case and then concat the rest of the words to  it.
     arr.push(console.log(singleLetter.toUpperCase().concat(restWord)));
       console.log(arr.join(' '));
   });
   
    
    return x;
}


myFunction(wordsVar);
