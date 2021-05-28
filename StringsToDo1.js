// Remove Blanks
// Create a function that given a string, returns all of that string's contents, but without blanks
// If given the string "Pl ayTha tF u nkyM usi c"

// function removeBlanks(str){
//     var String = "";
//     for (var x = 0; x < str.length; x++){
//         if (str[x] != " "){
//             String += str[x];
//         }
//     }
//     return String;
// }
// console.log(removeBlanks("Pl ayTha tF u nkyM usi C"))


// Get Digits 
// Create a JavaScript function that given a string, returns the integer made from the string's digits. 
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680

// function getDigits(str) {
//     var num = ("0s1a3y5w7h9a2t4?6!8?0").split("");
//     console.log(num);
//     var char = "";
//     for (var x = 0; x < str.length; x++){
//         if (num.includes(str[x])) {
//             char += str[x];
//         }
//     }
//     return char;
// }
// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// Acronyms
// Create a function that, given a string, returns the string's acronym (first letters only, capitalized)
// function acronym(str){
//     var word = "";
//     var arr = str.split(" ");
//     for (var x = 0; x < arr.length; x++){
//         if (arr[x] == false) {
//             continue;
//         }
//         else {
//             word += arr[x][0].toUpperCase();
//         }
//     }
//     return word;
// }
// console.log(acronym(" there's no free lunch - gotta pay yer way."));

// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string
// function countNonSpaces(str){
//     var count = 0;
//     for(var x = 0; x < str.length; x++){
//         if (str[x] == ' ') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countNonSpaces('Honey pie, you are driving me crazy'));

// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array

// function removeShorterStr(array, length) {
//     var newArr = [];
//     for (var x = 0; x < array.length; x++){
//         if (array[x].length >= length) {
//             newArr.push(array[x]);
//         }
//     }
//     return newArr;
// }
// console.log(removeShorterStr(['I', 'like', 'to', 'eat', 'apples', 'and', 'bananas'], 4));



