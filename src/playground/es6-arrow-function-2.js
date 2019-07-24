const add = (a,b) =>{
    // console.log(arguments)
    return a+b;
}
console.log(add(55,1))

//this keyword - no longer bound

const user = {
    name: 'shweta',
    cities: ['pune', 'mumbai', 'dubai'],
    printplacesLived(){
        return this.cities.map((city) => this.name+" has lived in "+city+ "!");

        // this.cities.forEach((city)=>{
        //     console.log(this.name + ' has lived in '+ city );
        // });
        // return cityMessages;
    }
};

console.log(user.printplacesLived());

//chanllenge area

const multiplier = {
    numbers : [1,2,3,4,5],
    multiplyby : 2,
    multiply(){
        return this.numbers.map((number) => this.multiplyby * number);
    }
};
console.log(multiplier.multiply());