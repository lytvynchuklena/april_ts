class UserType1 {
    name: string;
    age: number;
    status: boolean;


    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    info(): string {
        return this.name

    }

}
function parametrizationFn(
    str: string,
    num: number,
    truest: boolean,
    user : UserType1,
    arr: any [],
    skills: string [],
    users: {name: string, age: number} [],

) {

}
parametrizationFn(
    'okten',
    100500,
    true,
    // {name: 'vasya', age: 31, status: true},
    new UserType1('vasya', 31, true),
    [1, 2, 3, true],
    ['java', 'js'],
    [{name: 'kokos', age: 123}, {name: 'kokos', age: 123}, {name: 'kokos', age: 123}]

);

interface Car {
    model: string;
    power: number;
    producer?: string;
    drive: (a: number) => number

}


function tuningCar(car: Car) {

}

tuningCar({
    model: 'subaru',
    power: 254,
    producer: 'FHI',
    drive: function (a) {
        return 10500

    }
})

tuningCar({model: 'subaru', power: 254,
    drive : function (a) {
    console.log('vasdasd');
    return 123;
    }
})

class Subaru implements Car{

    model: string;
    power: number;
    producer: string;
    awd: boolean = true;

    drive(a: number): number {
        return 0;
    }


    constructor(model: string, power: number, producer: string, awd: boolean) {
        this.model = model;
        this.power = power;
        this.producer = producer;
        this.awd = awd;
    }

    foobar(): void {

    }




}
class Toyota implements Car{

    model: string;
    power: number;
    producer: string;
    price: number;


    drive(a: number): number {
        return 0;
    }


    constructor(model: string, power: number, producer: string, price: number) {
        this.model =  model;
        this.power = power;
        this.producer = producer;
        this.price = price;
    }

}


let cars: Car[] = [
    new Subaru('legacy', 165, 'subaru', true),
    new Toyota('camry', 265, 'toyota', 43000)
];

// let firstCar = cars[0] as Subaru;
// // firstCar.foobar();
// console.log(firstCar.awd);

class Client {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    setNewAge(newAge) {
        if (newAge > 0) {
            this.age = newAge;
        }
    }


}

let client = new Client('vasya', 31);
// client.age = -1000;
client.setNewAge(-100);


enum Gender {
    MALLE = 'male',
    FEMALE = 'female'
}

function fooabr2(gender: string) {

}

fooabr2('dog')


function fooabr3(gender: Gender) {
    console.log(gender);

}

fooabr3(Gender.FEMALE);