// Iteration 1 | Find the Maximumwor
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2){
        return num1;
    }else if (num2 > num1){
        return num2;
    }

   return num1;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let maxLen=0;
    let LongestWord;
    if (!words || words.length === 0){
        return null;
    }

    for (let i=0; i< words.length; i++){
        if(words[i].length > maxLen){
            maxLen      = words[i].length;
            LongestWord = words[i];
        }
    }

    return LongestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum=0;
    
    if (!numbers || numbers.length === 0){
        return sum;
    }

    for (let i=0; i< numbers.length; i++){
        sum += numbers[i];
    }

    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let sum = sumNumbers(numbers2);
    let avg = 0;
    let len = (!numbers2 || numbers2.length === 0) ? 0 : numbers2.length;
    
    if (len > 0){
        avg = sum / len;
    }    

    return avg;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, searchWord) {
    if (!words2 || words2.length === 0){
        return null;
    } 

    let idx = words2.indexOf(searchWord);
    if (idx > 0){
        return true;
    }
    return false;
}
