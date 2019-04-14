// ######## 01 Callback (function passed in other function!! )
// const calc = () => {
//     return 4 * 4;
// }

// const printCalc = (callback) => {
//     console.log(callback() );
// }

// printCalc(calc);


// ######## 02 Prototype/class 
// class Car {
//     constructor(doors, engine, color) {
//         this.doors = doors;
//         this.engine = engine;
//         this.color = color;
//     }
// }

// const civic = new Car(4, 'V6', 'grey');

// console.log(civic);

// ######## 03 Constructor-Pattern 
class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

// externds-the-car-class
class Suv extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color);
        this.wheels = 4;
    }
}

const civic = new Car(4, 'V6', 'grey');
const cx5 = new Suv(4, "V8", "red");

console.log(civic);
console.log(cx5);

