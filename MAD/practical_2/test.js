class SpDip {
    constructor(modcode) {
        this.m_code = modcode;
    }

    getCode() {
        return "Hello"
    }
}

class Course extends SpDip {
    disp() {
        console.log("This module code : " + this.m_code + " is for Dip in IT");
        console.log(this.getCode());
    }
}

obj = new Course('ST0504');
obj.disp()