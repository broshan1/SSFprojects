var Person = /** @class */ (function () {
    function Person(firstname, lastname, age) {
        this.alive = true;
        this.firstName = firstname;
        this.lastName = lastname;
        this.age = age;
    }
    return Person;
}());
var broshan = new Person('BROshan', 'Shwarma', 25);
console.log(broshan);
