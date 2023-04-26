// prompt("Hi Mian AHsan Aslam !");



// comment in javascript single line
// this is a book


// multiline
/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit mollitia odit, quam cupiditate ullam tempora sit nobis nisi iste quod perferendis sapiente a ex culpa impedit animi accusantium reiciendis? */

// random number 
// let a = Math.floor(Math.random() * 100);
// document.write(a)


// let firstName ;            // declaration of variable firstName
// firstName = "Ahsan";       // initialization o fvariable firstName 





// Global scope and block scope of let and var
// Let
// {
//     let a = 20;
//     console.log(a);
// }
// let has block scope 



// var
// {
//     var a = 20;    
// }
// console.log(a);
// var has global scope as it can be consoled in block as well as out of block 


// javascript is a case sensitive langauge 
// let myVariable = "Hello";
//     myVariable = "World";
// console.log(myVariable); // Output: "Hello"

// const rupees = 20;

// var string1 = "AHSAN is a cofounder of Amania Group";
// var string2 = 'Ahsan is a co';
// var string3 = `He buy a shirt of rupees ${rupees} `;

// double quote problem
// let question = "Do you want to learn JavaScript? "Yes!"";
// let question = 'Do you want to learn JavaScript? "Yes!".';

// single quote problem
// let string = `Let's continue your fight`;
// console.log(string)




// Premitive data types
// let str = "Hello";
// let nr = 7;
// let bigNr = 12345678901234n;
// let bool = true;
// let sym = Symbol("unique");
// let undef = undefined;
// let nullvalue = null;
// console.log("str", typeof str);
// console.log("nr", typeof nr);
// console.log("bigNr", typeof bigNr);
// console.log("bool", typeof bool);
// console.log("sym", typeof sym);
// console.log("undef", typeof undef);
// console.log("null", typeof nullvalue);



// Converting data types
// let nr1 = 0.2;
// let nr2 = "2";
// let result = nr1 * nr2;
// console.log("result :",result,typeof(result));





// let number = 6;
// result = String(number);
// console.log(typeof(result));

// let strToNr = 12.5;
// strToNr = Number(strToNr);
// console.log(strToNr, typeof strToNr);

// let strToBool = "any string will return true";
// strToBool = Boolean(strToBool);
// console.log(strToBool, typeof strToBool);


// let string = "false";
// result = Boolean(string);
// console.log(result,typeof result);

// // Practice exercise 2.1
// let str1 = 'Laurence';
// let str2 = "Svekis";
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;
// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof val1);
// console.log(typeof val2);
// console.log(typeof myNum);


// let a = 9;
// let remainder = a % 3
// console.log(remainder);

// // increment
// let a = 9;
// a ++; // a = a+1
// console.log(a);


// // let a = 6;
// a--; // a = a-1
// console.log(a);

// // assignment operator 
// let b = 10;
//   b = 20;
//   console.log(b);


// // addition assignment operator 
// let b = 10;
//   b += 20;
//   console.log(b);


// // modulus assignment 
// let c = 129;
// let  remainder = c % 2;

//     if (remainder!=0){
//         console.log("Odd Number");
//     }else {
//         console.log("Even Number");
//     }


// comparision operator
// let a = 10;
// let b = 10;

// if(a>b){
//     console.log("A is greater than b ");
// }else if(a==b){
//     console.log("B is equal to  A ");
// }else{
//     console.log("B is greater than A ")
// }


// // datatype and value of comparision operator
// let a = 30;
// let b = 30;

// if(a!==b){
//     console.log("Data type and value of a is not equal to b ");
// }else {
//     console.log("good luck");
// }


// let result = 2 ** 3
// console.log(result);





// let x = 2;
// x += 2;
// console.log(x);


// let x = 5;
// let y = "5";
// console.log(x == y);


// let a = 4 ;
// let b = 6;

// if(a>=b){
//     console.log("You are rattt");
// }else{
//     console.log("You are mice");
// }


// let x = 1;
// let y = 2;
// let z = 3;
// // console.log(x < y && y > z);
// // console.log(x > y || y < z);
// // console.log(x > y || y > z);


// let x = false;
// console.log(!x);



// let x = 1;
// let y = 2;
// console.log(!(x < y));



// projects
// let kg = prompt("Enter your Weight in kg to convert in pound");
// let pound = kg * 2.2;
// document.write("Weight in pound : ",pound);


// let miles = prompt("Enter your distance in Miles to convert in km");
// let km = miles * 0.621371;
// document.write(`The distance of ${km} kms is equal to ${miles} miles`);

// // The distance of 130 kms is equal to 209.2143 miles



// let a = "Hello";
// a = prompt("world");
// console.log(a);


// let result = 3 + 4 * 2 / 8;
// console.log(result);


// let firstNum = 5;
// let secondNum = 10;
// firstNum++;
// secondNum--;
// let total = ++firstNum + secondNum;
// console.log(total);
// let total2 = 500 + 100 / 5 + total--;
// console.log(total2);




// let a = 2;
// let b = 4;
// console.log(`Difference  of a and b is ${a-b} `)




// const a = 5;
// const b = 10;
// console.log(a > 0 && b > 0); true 
// console.log(a == 5 && b == 4); false
// console.log(true ||false); true 
// console.log(a == 3 || b == 10); true 
// console.log(a == 3 || b == 7); false