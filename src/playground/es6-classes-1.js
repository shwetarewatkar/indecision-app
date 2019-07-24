class Person{
    constructor(name = 'Anonymous', age = 0){
        // console.log('test');
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        // return 'Hi '+ this.name + '!';
        return `Hi I am ${this.name}.`;
    }
    getDesscription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
       return !!this.major 
    }
    getDesscription(){
        let description = super.getDesscription();
        if(this.hasMajor){
            description += ` Their Major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasLocation){
            greeting += ` I am from ${this.homeLocation}.`
        }
        return greeting;
    }
}
const me = new Traveler('Shweta', 24, 'Sacramento');
// console.log(me.hasMajor());

const other = new Traveler();
// console.log(other.hasMajor());

console.log(me.getGreeting());
console.log(other.getGreeting())