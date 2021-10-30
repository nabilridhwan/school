class Course{
    constructor(moduleName){
        this.module = moduleName;
    }

    taking(){
        return "I am taking " + this.module;
    }
}

class SpDiploma extends Course{
    // constructor(moduleName, diplomaName){

    //     // super means that we are calling the constructor of the parent class hence accessing all the methods from Course class
    //     super(moduleName);
    //     this.diploma = diplomaName
    // }

    test(){
        console.log(this.module)
    }

    show(){
        return this.taking() + " and my diploma is  " + this.diploma;
    }
}

var c1 = new Course("MAD");
var d1 = new SpDiploma("MAD", "DIT");

// console.log(d1.show());
console.log(d1.test());