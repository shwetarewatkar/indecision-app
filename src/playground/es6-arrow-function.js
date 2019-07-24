// console.log("Es-6-arrow-function");

// const square = function(x){
//     return x*x;
// }
// console.log("Square: ",square(8));
// const squareArrow = (x) => {
//     return x*x;
// }
// console.log("SquareArrow: ",squareArrow(8));

// const squareArrowNew = (x) => x*x;

// console.log('squareArrowNew: ',squareArrowNew(7))


const getFirstName = (fullname) =>{
    return fullname.split(' ')[0]
}
console.log("firstName: ",getFirstName("Shweta Rewatkar"));

const getFirstNameNew = (fullname) => fullname.split(' ')[0]
console.log("getFirstNameNew: ",getFirstNameNew("Swapnil Patel"))