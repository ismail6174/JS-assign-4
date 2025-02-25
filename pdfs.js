
//Assignments 4 - PDFS - Starts


/*  1. Declare an empty array using JS literal notation to store student names in future. */

var arr=[];

/*  2. Declare an empty array using JS object notation to store
student names in future. */

sir asking!


//3. Declare and initialize a strings array.

var cities=["tuscon","Istanbul","Paris","Moscow"];

//4. Declare and initialize a numbers array.

var num_square=[1,4,9,16,25,36,49,64,81,100];

//5. Declare and initialize a boolean array.

var bool = [true,false];

//6. Declare and initialize a mixed array.

var mixedItems=["cats",66,true,null,"khan"];

/*  7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed 
qualifications in your browser like: */


var qualify = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","Phd"];

document.write("Qualification:",qualify)


/*  8. Write a program to store 3 student names in an array.Take
another array to store score of these three students. 
Assume that total marks are 500 for each student, display the scores & percentages of students like: */


var students=["Michael","Jhon","Tony"];
var score=[320,230,480];
var percentage=[320/500*100,230/500*100,480/500*100];

document.write("Score of",students[0],"is",score[0],". percentage:",percentage[0],"%")

document.write("Score of" , students[1] , "is" ,score[1] , ".percentage:",percentage[1],"%")

document.write("Score of",students[2],"is",score[2],". percentage:",percentage[2],"%")


// 9. Initialize an array with color names. Display the array elements in your browser.

var colors=["indigo","yellow","blue"];
document.write(colors);

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
//Display the updated array in your browser

var user_color =prompt("Add your color");
colors.unshift(user_color);
document.write(colors);


//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

var user_color =prompt("Add your color");
colors.push(user_color);
document.write(colors);

//c. Add two more color to the beginning of the array. Display the updated array in your browser.

colors.unshift("olivegreen","skyblue");
document.write(colors);


//d. Delete the first color in the array. Display the updated array in your browser.

colors.shift();
document.write(colors);


//e. Delete the last color in the array. Display the updated array in your browser.

colors.pop();
document.write(colors);


//f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.

var user_index= +prompt("Enter color index  number");
var user_color = prompt("Add your color");
colors.splice(user_index,0,user_color);
document.write(colors);


//g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. Display the updated array in your browser.

var user_index = +prompt("From which index you want to remove:");
var remove_count= +prompt("How many colors you want to remove:");
colors.splice(user_index,remove_count);
document.write(colors)
 
 
//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

var stud_score=[320,230,480,120];

console.log("Score of students:",stud_score);

var order_score = stud_score.sort();


console.log("Ordered Scores of students:",order_score);


//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

var city_names=["Karachi","Lahore","Quetta",
"Islamabad","Peshawar"];

document.write("Cities lists:",city_names);

var selected_cities=city_names.slice(2,-1);

console.log("Selected cities lists:",selected_cities);


//12. Write a program to create a single string from the below mentioned array: 
//var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arr = ["This", "is", "my","cat"];
var str= (arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3] );
console.log(str);



//Assignments 4 - PDFS - Ends







