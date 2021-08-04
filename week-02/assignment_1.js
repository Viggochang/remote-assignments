/*
Complete the function below to find the max number of the passing array of numbers.
*/

function max(numbers){
    var max_num = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] > max_num){
            max_num = numbers[i];
        }
    }
    return max_num;
}

max([1, 2, 4, 5]); // result to 5 
max([5, 2, 7, 1, 6]); // result to 7

console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));