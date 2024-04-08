function fibonacci(number1, number2, counter){
    let list = [number1, number2];
    for (let i = 2; i < counter; i++){
        let sum = number1 + number2;
        list.push(sum);
        number1 = number2;
        number2 = sum;
    }
    return list;

}
console.log(fibonacci(0 , 1 ,20));