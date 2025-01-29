// Here we will learn about combining switches.


grade = "C";
switch(grade){
    case "F":
    case "D":
        console.log("You have failed to meet the requirements.");
        break;
    case "C":
    case "B":
        console.log("You have passed!");
        break;
    case "A":
        console.log("Nice! Distinction there");
        break;
    default:
        console.log("I do not know this grade.");
}