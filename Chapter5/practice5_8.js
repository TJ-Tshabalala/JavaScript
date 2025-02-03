let varOutput = "";
let numberVar = 5;

for(let i =0; i < 10; i++){
    if(i === numberVar){
        continue;
    }
    varOutput += i +" ";
}
console.log(varOutput);