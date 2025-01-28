/* When working with objects and arrays, you will see these often combined.
In this practice script we'll deal with combining objects and arrays, and 
also objects inside objects*/

// Objects in objects

let company = {
    companyName: "Healthy Candy",
    activity: "food manufacturing",
    address:{ // Address is another object nested within the company Object.
        street: "2nd street",
        number: "123",
        zipCode: 33116,
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablisment: 2021
};

// Access or modify one of the properties of the address here, we can use two approaches:
//Option 1:
company.address.zipCode = "33117";
company["address"]["number"] = "100";

console.log(company);

// Arrays in Objects

let business = {
    businessName: "Notso Healthy",
    activities:[
        "food  manufacturing", 
        "'improving kids' health", "manufacturing toys"
    ],
    address:{
        street: "2nd Street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablisment: 2021
};

let activity = business.activities[1]; //  Call business,activities[1],define a var called activity and assign it to the code you called.
console.log(activity); // Console Result: 'improving kids' health