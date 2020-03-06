// const number =[3,4,5,6,7,8];
// const output = [];
// for(let i=0; i<number.length; i++)
// {
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }


const number2 = [3,5,6,8,9,10,11,12,13];

// function sum(element){
//     return element * element;
// }
// const result = number2.map(element=>element*element);

// const result = number2.map(function(element){return element*element});
// const result = number2.map(sum);

// const result = number2.filter(x=>x>5);
const result = number2.find(x=>x>5);
console.log(result);

