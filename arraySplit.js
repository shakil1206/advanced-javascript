const number = [1,2,3,4,5,6,7,8,9,10];
// const part = number.slice(4,6);
const removed = number.splice(2,6,99,100);
console.log(removed);
console.log(number);

const together = number.join(" ");
console.log(together);


function doSomething(x, y = 4){
    console.log(y);    
    }
    doSomething(3,2);


if({}){
    console.log("I am not false")
}
else{
    console.log("I am false")
}

if( 'false' ){
    console.log("I am not false")
}
else{
    console.log("I am false")
}