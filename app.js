
//Assignment 4 / Wordsheet - Starts


//chap14 - if statement nested -starts


/* Q 1.
 Code an if statement enclosing a nested if. If password is not
empty, then check if password is not greater than 5 , then display an alert that says "Password must be greater than 5" if greater
than 5 then Alert "OK". */

var password = +prompt("Enter password");

if(password !== ""){
    if(password >= 5){
        console.log("password must be greater than 5");
    }
    else{
        console.log("ok");
    }
}
else{
    console.log("please enter password..!")
}


/*  Q2. 
Try this statement by yourself if (a === 1) { if (c === "Max") {
alert("OK");
}
} */

var a = +prompt("Enter number");
var c = prompt("Enter a name");

if (a===1){
    if(c==="Max"){
        alert("OK")
        
    }
}
else{
    alert("a is not equal to 1")
}


/*  Q3. 
Code the first line of an if statement that avoids the nesting above
by testing for multiple conditions.
if (a === 1) { if
(c === "Max") {
alert("OK");
} } */
    
 asking to sir...!


/*  Q4. 
Declare two variables and assign them the same number value.
Test two conditions, using nested if statements. Test whether the
first variable equals the second variable and also whether it is less
than or equal to the second variable. If the test passes—and it
will—display an alert message. */

var num1 = 10;
var num2 = 10;

if (num1 === num2) {
    if (num1 <= num2) {
        alert("Both conditions are true: num1 equals num2 and num1 is less than or equal to num2.");
    }
}


//chap14 - if statement nested - Ends



//Chapter 15 (Array I) - Starts


//1. Declare an empty array.

var empty_arr=[];

//2. Code an array with 1 string element

var arr=["string"];

//3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index

var alphabet = ["h","i","j","k"];
console.log(alphabet[2])

//4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.

var alphabet=["h","i","j","k", "l","m","n","o"];
console.log(alphabet.length)

//5. Declare an array with one element and Add a second element with index in array. Create an alert whose message is the new element.

var arrayOne=[4];
arrayOne[1]="cat";
alert(arrayOne[1])


//Chapter 15 (Array I) - Ends



//Chapter 16 (Array II) - Starts

//1. Code an array with 1 string element. Add an additional element to the array using push. Create an alert whose message is the last element.

var arr =["khan"];
arr.push("saab");
console.log(arr)

//* 2.
 var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Add three number elements to the beginning of an array. */

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
arr.unshift(6,7,8);
console.log(sizes)

/*  3. 
Declare an array with one element.
Add a second element to the beginning of the array. Create an alert whose message is the new first element.*/

var arr = [6174];
arr.unshift(4716);
alert(arr[0]);


/* Q4:
 var sizes = ["S", "M", "XL", "XXL", "XXXL"];
Insert "L" into the array between "M" and "XL". */

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2,0,"L");
console.log(sizes)

/*  5. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Copy the first 3 sizes of the array and put them into a new array,
regSizes. */

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var cregSizes=sizes.slice("S","M","XL");
console.log(regSizes)


/*  6. var pets = ["dog", "cat", "ox", "duck", "frog"].
Add 2 elements after "dog" and remove "cat", "ox", and "duck". */

 var pets = ["dog", "cat", "ox", "duck", "frog"];
 pets.splice(1,3,"kitten","ostrich");
console.log(pets)


/*  7. var pets = ["dog", "cat", "ox", "duck", "frog"];
Remove "cat" and "ox". */


var pets = ["dog", "cat", "ox", "duck", "frog"];
var.splice(1,2);
console.log(pets)


/*  8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
Reduce it to "duck" and "frog" using slice. */

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var copy = pets.slice(3,2);
console.log(copy)


//Chapter 16 (Array II) - Ends


//Assignment 4 / Wordsheet - Ends











