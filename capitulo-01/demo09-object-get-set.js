// criando um objeto com métodos acessores get e set
const person = {
    _name: '',
    _age: 31,

    get name() {
        return this._name;
    },
    get canDrive(){ 
        return this._age > 18
    },
    set name(value) {
        this._name = value.toUpperCase();
    },
    set age(value) {
        this._age = value;
    }
}

// person.name = "Claudeilton Dantas";
// console.log(`My name is: ${person.name}`);
console.log(person.canDrive);
person.age = 17;
console.log(person.canDrive);

