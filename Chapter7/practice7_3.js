class EmployeeTracker{
    #firstName;
    #lastName;
    #serviceLength;
    constructor(firstName, lastName, serviceLength){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#serviceLength = serviceLength;


    }
    get firstName(){
        return this.#firstName;       
    }
    set firstName(firstName){
        this.#firstName = firstName;
    }
    
    get lastName(){
        return this.#lastName;
    }
    set lastName(lastName){
        this.#lastName = lastName;
    }

    get serviceLength(){
        return this.#serviceLength;
    }

    set serviceLength(serviceLength){
        this.#serviceLength = serviceLength;
    }

}

const emp1 = new EmployeeTracker('Jack','Leeway',12);
const emp2 = new EmployeeTracker('Maria','Sagat',5);
const employeeList = [];
employeeList.push(emp1);
employeeList.push(emp2);
//console.log(employeeList[0].firstName, employeeList[0].lastName, employeeList[0].serviceLength);
//console.log("Employee: ",emp1.firstName,emp1.lastName," years with company-",emp1.serviceLength,"yrs");
//console.log("Employee: ",emp2.firstName,emp2.lastName," years with company-",emp2.serviceLength,"yrs");

EmployeeTracker.prototype.workHistory = function (){
    console.log(this.firstName,this.lastName,": ",this.serviceLength,"years");

};
for(let employee =0; employee < employeeList.length;employee++){
    console.log(employeeList[employee].workHistory());
}