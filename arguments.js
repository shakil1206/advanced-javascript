function sum(num1, num2){
    console.log([...arguments]);
    let sum=0;
    for(let i=0; i<arguments.length; i++)
    {
        sum = sum + arguments[i];
    }
    return sum;
}

const result = sum(2,6,8,10,50);

console.log(result);