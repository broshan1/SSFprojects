class Person {
    firstName: string;
    lastName: string;
    age: number;
    alive: boolean = true;
    constructor(firstname: string, lastname: string, age: number) {
        this.firstName  = firstname;
        this.lastName = lastname;
        this.age = age;
    }
}

var broshan = new Person('BROshan', 'Shwarma', 25);
console.log(broshan);