const numberArray = [1,2,3,4,5,6];

const updateArray = numberArray.map(function(value, index){
    console.log("Index:", index, "Value:", value, "Result=",numberArray[index]*2);

    return numberArray[index]*2
});

console.log(updateArray);