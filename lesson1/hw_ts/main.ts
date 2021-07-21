// Создать интерфейс по такой объект:
// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address":
//         {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                     "lat": "-37.3159",
//                     "lng": "81.1496"
//                 }
//         },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company":
//         {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
// }

class UserCompany {
    name: string;
    catchPhrase: string;
    bs: string;


    constructor(name: string, catchPhrase: string, bs: string) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}


function user(
    id: number,
    name: string,
    username: string,
    email: string,
    address: { street: string, suite: string, city: string, zipcode: string, geo: { lat: string, lng: string } },
    phone: string,
    website: string,
    company: UserCompany,
) {


}

user(
    1,
    'Leanne Graham',
    'Bret',
    'Sincere@april.biz',
    {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {lat: '-37.3159', lng: '81.1496'}
    },
    '1-770-736-8031 x56442',
    'hildegard.org',
    new UserCompany('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')
);


// типизировать эту функцию:
//
//     function concat(text1, text2) {
//         return text1 + text2
//     }


interface TextConcat {
    text1: string;
    text2: string;
    concat: (text1: string, text2: string) => string
}

function concatText(TextConcat: TextConcat) {

}

concatText({
    text1: 'vasya',
    text2: 'smirnov',
    concat: function (text1, text2)
    {
        return text1 + text2;
    }
})




// создать класс юзера с полями name, age, city, status
// и методами:
//     getName
// setName
// getAge
// setAge
// getCity
// setCity
// changeStatus
// status boolean


class Users {
    private _name: string;
    private _age: number;
    private _city: string;
    private _status: boolean;


    constructor(name: string, age: number, city: string, status: boolean) {
        this._name = name;
        this._age = age;
        this._city = city;
        this._status = status;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    setChangeStatus(changeStatus) {

        this._status = changeStatus;
    }


}

let users = new Users('vasya', 30, 'Lviv', true);
users.setChangeStatus(true);


// 1) написать интерфейс Animal который описывает:
//     тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal

interface Animal {
    floats: string;
    walks: string;
    runs: string;
}

function animalInformation(animal: Animal) {

}

animalInformation({
    floats: 'true',
    walks: 'true',
    runs: 'true'
})

class Cat implements Animal {

    floats: string;
    runs: string;
    walks: string;


    constructor(floats: string, runs: string, walks: string) {
        this.floats = floats;
        this.runs = runs;
        this.walks = walks;
    }
}

class Bird implements Animal {

    floats: string;
    runs: string;
    walks: string;


    constructor(floats: string, runs: string, walks: string) {
        this.floats = floats;
        this.runs = runs;
        this.walks = walks;
    }
}

class Fish implements Animal {

    floats: string;
    runs: string;
    walks: string;


    constructor(floats: string, runs: string, walks: string) {
        this.floats = floats;
        this.runs = runs;
        this.walks = walks;
    }
}

let animal: Animal[] = [
    new Cat('noFloats', 'runs', 'walks'),
    new Bird('noFloat', 'noRuns', 'noWalks'),
    new Fish('floats', 'noRuns', 'noWalks'),
];


