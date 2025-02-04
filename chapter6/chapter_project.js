// // Chapter 6 project
// function factorial(x) {
//     // Base case
//     if (x == 0) {
//         return 1;
//     } else {
//         // Recursive case
//         return x * factorial(x - 1);
//     }
// }

// console.log(factorial(5));

// function counter(x){
//     if(x > 10){
//         return "Value is greater than 10";
//     }else{
//         counter(x + 1);
        

//     }
//     console.log(x);
// }
// counter(3);

// Set timeout order

let funcOne = () =>{
    console.log("One");
}
let funcTwo = ()=>{
            console.log("One\nTwo");
};

function thirdFunc(){
    
    console.log("Three");
    funcTwo();
    funcOne();
}

function fourtFunc(){
    console.log("Four");
    thirdFunc();
}

setTimeout(fourtFunc, 1000);