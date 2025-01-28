let company ={
    companyName: "Healthy Candy",
    activities: [
        "food manufacturing",
        "'improving kids' health",
        "manufacturing toys"
    ],
    address:[{
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state:"Florida"
    },
    {
        street:"1st West Avenue",
        number: "5",
        zipcode:"75001",
        city:"Addison",
        state: "Texas"
    }],
    yearOfEstablishment: 2021
};

let streetName = company.address[0].street;
console.log(streetName);