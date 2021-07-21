var UserType1 = /** @class */ (function () {
    function UserType1(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    UserType1.prototype.info = function () {
        return this.name;
    };
    return UserType1;
}());
function parametrizationFn(str, num, truest, user, arr, skills, users) {
}
parametrizationFn('okten', 100500, true, 
// {name: 'vasya', age: 31, status: true},
new UserType1('vasya', 31, true), [1, 2, 3, true], ['java', 'js'], [{ name: 'kokos', age: 123 }, { name: 'kokos', age: 123 }, { name: 'kokos', age: 123 }]);
function tuningCar(car) {
}
tuningCar({
    model: 'subaru',
    power: 254,
    producer: 'FHI',
    drive: function (a) {
        return 10500;
    }
});
tuningCar({ model: 'subaru', power: 254,
    drive: function (a) {
        console.log('vasdasd');
        return 123;
    }
});
var Subaru = /** @class */ (function () {
    function Subaru(model, power, producer, awd) {
        this.awd = true;
        this.model = model;
        this.power = power;
        this.producer = producer;
        this.awd = awd;
    }
    Subaru.prototype.drive = function (a) {
        return 0;
    };
    Subaru.prototype.foobar = function () {
    };
    return Subaru;
}());
var Toyota = /** @class */ (function () {
    function Toyota(model, power, producer, price) {
        this.model = model;
        this.power = power;
        this.producer = producer;
        this.price = price;
    }
    Toyota.prototype.drive = function (a) {
        return 0;
    };
    return Toyota;
}());
var cars = [
    new Subaru('legacy', 165, 'subaru', true),
    new Toyota('camry', 265, 'toyota', 43000)
];
// let firstCar = cars[0] as Subaru;
// // firstCar.foobar();
// console.log(firstCar.awd);
var Client = /** @class */ (function () {
    function Client(name, age) {
        this.name = name;
        this.age = age;
    }
    Client.prototype.setNewAge = function (newAge) {
        if (newAge > 0) {
            this.age = newAge;
        }
    };
    return Client;
}());
var client = new Client('vasya', 31);
// client.age = -1000;
client.setNewAge(-100);
var Gender;
(function (Gender) {
    Gender["MALLE"] = "male";
    Gender["FEMALE"] = "female";
})(Gender || (Gender = {}));
function fooabr2(gender) {
}
fooabr2('dog');
function fooabr3(gender) {
    console.log(gender);
}
fooabr3(Gender.FEMALE);
