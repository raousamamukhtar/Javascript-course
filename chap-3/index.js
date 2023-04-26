// // how to create an Array
// // method-1
// let array = new Array("ALI","USAMAN",3,{"nationality":"Pakistani"});
// console.log(array);

// // method-2
// let arr2 = ["Ahsan",5,{"nationality":"Westendies","National":"Australian"}];
// console.log(arr2);





// let colors = ["black", "orange", "pink"]; 
// console.log(colors.length);
// console.log(colors[1]);
// console.log(colors.indexOf('orange'));


// let colors = ["black", "orange", "pink"];
// colors[1]=10000;
// console.log(colors);    

// let colors = ["black", "orange", "pink"];
// colors[3]="white";
// console.log(colors);


// colors = ["black", "orange", "pink"]
// booleans = [true, false, false, true];
// emptyArray = [];
// console.log("Length of colors:", colors.length);
// console.log("Length of booleans:", booleans.length);
// console.log("Length of empty array:", emptyArray.length);



// colors = ["black", "orange", "pink",1,23,4,5,6,"sad","hedsdf"]
// lastElement = colors[colors.length - 1];
// console.log(lastElement);

// items = ["Milk","Bread","Apple"];
// console.log(items.length);
// items[1]="Bannana";
// console.log(items)


// items = ["Milk","Bread","Apple"];
// items.push("Orange");
// items.unshift("Jam");
// console.log(items);

// items = ["Milk","Bread","Apple"];
// // items.pop();
// items.shift();
// console.log(items);

// slice splice concept


// slice

// const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
// const citrus = fruits.slice(0,4);
// console.log(citrus); // Output: ['apple','banana', 'orange','grape']



// const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
// const copyOfFruits = fruits.slice();
// console.log(copyOfFruits); // Output: ['apple', 'banana', 'orange', 'grape', 'kiwi']



// let arr5 = [1, "Umer", 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6);
// // console.log(arr7);


// console.log([...arr5,...arr6]);



// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// names.sort();
// names.reverse();
// console.log(names);

// let ages = [18, 72, 33, 56, 40];
// ages.sort();
// console.log(ages)



// list = [];
// list.push("Milk","Bread","Apples");
// list.splice(1,1,"Bannana","Egg");
// list.pop();
// // console.log(list);
// list.sort();
// // console.log(list.indexOf("Milk"));
// list.splice(1,0,"Carrots","Lettuce");

// newlist = [ "Juice","pop"];

// combinelist = list.concat(newlist,newlist);

// // console.log(combinelist.indexOf("pop"));
// console.log(combinelist);



// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arr[2][2]);




// let arr  = [1,2,3,4,5]
// console.log(typeof arr);


// let object = {
//     name:"Usama Mukhtar",
//     Id:36302,
//     nationality:["Pakistan","Australia","Italy"],
//     section:"Morning",
//     address:{
//         address1: "Arain Cottages Multan",
//         address2: "Loyal Orchard",
//     }
// }

// // object["nationality"]["1"]="America";
// // console.log(object.address);
// console.log(object["address"]);


// let  myCar = {
//     make:"Suzuki",
//     model:"2021",
//     value: 930000,
// }
 
// let property = "color";
// myCar.property;
// myCar["color"] = "Black"
// console.log(myCar);


// let people = {friends:[]};
// let friend1 = {
//     firstName:"Mian Ahsan",
//     lastName:"Usama",
//     id:1,
// };

// let friend2 = {
//     firstName:"Motu",
//     lastName:"Zaid",
//     id:2,
// };

// let friend3 = {
//     firstName:"Malik",
//     lastName:"Urf shadaaa",
//     id:3,
// };

// people.friends.push(friend1,friend2,friend3);
// console.log(people);





// create an object of name Fruits and store an empty object of property name Anaar.
// create variable of name Amrood and store array having values "Karwa","Meetha","Khata".
// create variable of kishmish and store array having values "pakistani","irani","agha khani".
// Now remove the last word khata from array of amrod BY USING ARRAY METHOD
// then push the new variable having value amrod to object named fruits


// const myArr2 = [];
// myArr2[10] = 'test'
// console.log(myArr2);
// console.log(myArr2[2]);


// const myArr3 = [3,6,8,9,3,55,553,434];
// myArr3.sort();
// myArr3.length = 0;
// console.log(myArr3[0]);

