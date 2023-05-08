1)Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Var ages = {3,9,23,64,2,8,28,93}
console.log(ages)



Programmatically subtract the value of the first element in the array from the value in the last element of the array 
Do not use numbers to reference the last element, find it programmatically, 
ages[7] – ages[0] is not allowed!

console.log(ages[ages.length-1]) - ages[0[]]


	1.b.Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.

ages.push(22)
console.log(ages[ages.length-1]-ages[0])



2)Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['sam','tommy','tim','sally','buck','bob']
console.log(names)

A.
\Use a loop to iterate through the array and calculate the average number of letters per name.

let numberOfLetters= 0

for (let i= 0; i< names.length; i++) {
    numberOfLetters+= names[i].length
}
console.log(numberOfLetters / names.length)
console.log(23)

	2.b.Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

    let namesArray= ''
    for (let i= 0; i< names.length; i++){
        namesArray += ''+names{i}
    }
    console.log(sam tommy tim sally buck bob)



3)How do you access the last element of any array?

adding a minus sign infront of -1 ages[ages.length() -1]

4)How do you access the first element of any array?

use a 0 to access first element of array


Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

 For example:


let names = ["Kelly", "Sam", "Kate"]; 	//starting with this array
let nameLengths = [5, 3, 4]; 			//create this new array

let nameLengths = []
for (let i+0; i< names.length; i+=) {
    nameLenghts.push(names[i]. length)
}
console.log(nameLengths)


Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

let sum = 0
for (leti=0; i< name.Lengths.length; i++){
    nameLenghtsSum = nameLengthsSum + nameLengths[i]
}
console.log (23)


Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’)

function combineWords(word, n) {
    return word.repeat(n)
}
console.log ('hello','hello,'hello')

Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.

function fullName (firstName, lastName){
    return firstName + lastName
}
console.log (donavon. hayes)

Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100

let sum = 0;
for(number:numbers)
 (i =0;i<arrayOfNumbers. length; i++) {

if (sum>100)
return true;
else
return false;
 }


Write a function that takes an array of numbers and returns the average of all the elements in the array.

let total = 0
for (let i=0;i< array.length; i++) {
    total+= array[i]
}
console.log(calculateAverage)

Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array

calculateAverageForTwo(array1, array2) {
    sum=0;
    for (let i = 0< arraylength;i+=){
       sum += numbers/ array.lengths
    }
 
    is (sum > total){
       return true;
    }else{
       return false;
       console.log(false);
    }
    
Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

if (isHotOutside && moneyInPocket >10.50) {
    return true
} else [
    return false

]

Create a function of your own that solves a problem.   In comments, write what the function does and why you created it

WakeUp (time){
    if(time >= 7) {
        return true;
 } else {
        return false;
 
        I used that function because everyone can relate to waking up early in the morning. The functio tells me if its after 7 we will wake up, if not we wont