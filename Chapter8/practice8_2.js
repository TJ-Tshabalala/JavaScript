// let bb = ['so', 'bye', 'bye', 'love'];
// console.log(bb.lastIndexOf('hi'));

const ab = ['Laurence', 'Mike', 'Larry', 'Kim', 'Joanne', 'Laurence', 'Mike', 'Laurence', 'Mike','Laurence','Mike'];


const uniqueArray = ab.filter(function(value, index, array){
    console.log('Index:',index,'Value:',value,'First Match',array.indexOf(value))
    
    return array.indexOf(value) === index;
});


console.log(uniqueArray);