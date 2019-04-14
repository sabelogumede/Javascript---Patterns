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
// class Car {
//     constructor(doors, engine, color) {
//         this.doors = doors;
//         this.engine = engine;
//         this.color = color;
//     }
// }

// // externds-the-car-class
// class Suv extends Car {
//     constructor(doors, engine, color) {
//         super(doors, engine, color);
//         this.wheels = 4;
//     }
// }

// const civic = new Car(4, 'V6', 'grey');
// const cx5 = new Suv(4, "V8", "red");

// console.log(civic);
// console.log(cx5);

// ######## 04 Singleton-Pattern 
// let instance = null;

// class Car {
//     constructor(doors, engine, color) {
//         if (!instance) {
//             this.doors = doors;
//             this.engine = engine;
//             this.color = color;
//             instance = this;
//         } else {
//             return instance;
//         }

//     }
// }

// const civic = new Car(4, 'V6', 'grey');
// const honda = new Car(2, 'V4', 'red');

// console.log(civic);
// console.log(honda);

// ######## 05 Factory-Pattern 
// class Car {
//     constructor(doors, engine, color) {
//         this.doors = doors;
//         this.engine = engine;
//         this.color = color;
//     }

// }

// class carFactory {
//     createCar(type) {
//         switch(type) {
//             case 'civic':
//                 return new Car(4, 'V6', 'grey')
//             case 'honda':
//                 return new Car(2, 'V4', 'red')
//         }
//     }
// }

// const factory = new carFactory();
// const honda = factory.createCar('honda');

// console.log(honda);

// ######## 06 Abstract-Factory-Pattern

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class CarFactory {
    createCar(type) {
        switch(type) {
            case 'civic':
                return new Car(4, 'V6', 'grey')
            case 'honda':
                return new Car(2, 'V4', 'red')
        }
    }
}

class Suv {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

}

class SuvFactory {
    createSuv(type) {
        switch(type) {
            case 'cx5':
                return new Suv(4, 'V12', 'grey')
            case 'x5':
                return new Suv(2, 'V4', 'red')
        }
    }
}

const carfactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
    switch(type) {
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return suvFactory.createSuv(model);
    }
};


// const honda = factory.createCar('honda');
// const cx5 = factory.createCar('cx5');

const cx5 = autoManufacturer('suv', 'cx5')

// console.log(honda);
// console.log(cx5);

console.log(cx5);