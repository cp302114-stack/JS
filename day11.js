// day11 : CHAPTER: OOPS 

const student = {
    fullname: "chiru",
    marks : 92,
    printmarks : function(){
        console.log("marks =", this.marks);
    },
};

 // how to creat prototype

const epm = {
    clacyax(){
        console.log("tax rate is 11%");
    },
};

const chiru = {
    slaary :50000,
};
chiru.__proto__ = epm;

// classe

class ToyotaCar{
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    strbrand(brand){
        this.brandname = brand;
        console.log("this is:", this.brandname);
    }

}


// using this class we creat objct

let fortuner = new  ToyotaCar();
fortuner.strbrand("tesla");

// inheritance
// child class can use the methods and properties for 
// parents so code become easy

class Parent{

    constructor(){
        this.pare = "parents of there childrens";
    }
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{}

let chiruyy = new Child();

// super keyword

class Person{
    constructor(){
        this.spices = "homo sapiens";
    }
    
    eat(){
        console.log("eat");
    }

}

class Eng extends Person{
    constructor(bramchmm){
        super(); // to invoke parent class constructor
        this.bramchmm = bramchmm;
    }

    work(){
        super.eat();// we can call super method here 
        console.log("do some projects");
    }
}

let me = new Eng("computer science");

// problems 
// Qs1. You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.
// Qs. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.


let DATA = "secrate information";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ", DATA);
    }

}

class Admin extends User{  // answer for 2nd queation
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA= "some new value"
    }
}

let s1 = new User("chire", "cp10547@gmail.com");
let admn = new Admin("me", "goat@edu.atria");


// Error Handling
//try-catch
try {
//[... normal code]
} catch (err) { //err is error object
//handling error
}

// example

let a = 5
let b = 10
console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a + b);
try {
console.log("a+b=", a + c); //error it skips this and continue to next line if it gives a error 
} catch (err) {
console.log(err);
}I
console.log("a+b = ", a + b);
console.log("a+b=", a + b);
console.log("a+b =", a + b);
console.log("a+b =", a + b);
console.log("a+b= ", a + b);
