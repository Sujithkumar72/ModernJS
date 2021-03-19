//looping in arrays

// const cars= ["Ford", "Hondo", "Toyota", "Chevrolett"];
// for (let i=0; i<cars.length; i++){
//     if(i ===2){
//         console.log(cars[i]);
//     }
    
// }

//ForEACH method

// cars.forEach(function(car){
//     if(cars.indexOf(car) ==1){
//         console.log(car);
//     }
// })

// cars.forEach(function(car, index,array){
//     if(cars.indexOf(car) ==1){
//         console.log(`${index}:${car}`);
//     }
//     console.log(array);
// })

// const user ={
//     firstName : "Sujith",
//     lastName : "kumar",
//     age: 31
// };

// for (let x in user){
//     console.log(`${x}: ${user[x]}`);
// }


//MAP method
// const users = [
//     {
//     id:1,
//     name: "Sujith"
// },
// {
//     id:2,
//     name:"samu"
// },
// {
//     id:3,
//     name:"dhivi"
// },
// {
//     id:4,
//     name:"soon"
// }
// ]

// const ids = users.map(function(users){
// return users.id;
// });
// console.log(ids)

//do while
// let i = 100;
// do{
//     console.log("Number "+ i);
//     i++;
// } while(i<0);


//while loop
// let i = 0;
// while(i<10){
//     console.log("Number "+i);
//     i++;
// }



//FOR LOOP
// for(let i=0; i<10;i++){
//     if(i===2){
//         console.log('2 is my favourite number');
//         continue;
//     }
//     if(i===5){
//         console.log("Loop stopped");
//         break;
//     }
//     console.log(i);
// }


// function declaration & expressions
// const todo = {
//     add:function(){
//         console.log("Add Todo");
//         },
//         edit:function(id){
//             console.log(`Edit todo ${id}`);
//         }
// }

// todo.delete = function(){
//     console.log("Delete todo...");
// }

// todo.add();
// todo.edit(2);

// todo.delete();

// function greet(firstName ="John", lastName = "Smith"){
//     //console.log("Hello");
//     return "Hello "+ firstName + " "+ lastName ;
// }
// console.log(greet("Sujith", "kumar"));
// //function expression

// const square = function(x =3){
//  return x*x;
// }

// console.log(square());
// (function(name){
//     console.log("hello " + name);
// })("brad");

// (function(){
//     console.log("IIFE RAN...");
// })();


// switch conditions
// const color = "red";

// switch(color){
//     case "red":
//         console.log(`color is red`);
//         break;
//         case "blue":
//             console.log(`color is blue`);
//             break;
//             default:
//                 console.log(`color is neither red nor blue`);
// }

// let day;

// switch(new Date().getDay()){
//     case 0:
//         day ="Sunday";
//         break;
//         case 1:
//             day ="mONDAY";
//             break;
//             case 2:
//                 day ="Tuesday";
//                 break;
//                 case 3:
//                     day ="wed";
//                     break;
//                     case 4:
//                         day ="thurs";
//                         break;
//                         case 5:
//                             day ="fri";
//                             break;
//                             case 6:
//                                 day ="sat";
//                                 break;

// }

// console.log(`Today is ${day}`);

//IF condition
// const id =100;
// const name = "steve";
// const age = 24;

// //Ternary Operator
// console.log(id === 100 ? "Correct" : "Incorrect");


//Equal to
// if(id==101){
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

//test if undefined
// if(typeof id !== "undefined"){
//     console.log(`This ID the ${id}`);
// } else {
//     console.log("No ID");
// }

//date tutorial
// const person={
//     firstName: "Steve",
//     lastName: "Smith",
//     age: 30,
//     hobbies: ["music","sports","reading"],
//     email: "steve@aol.com",
//     address:{
//         city:"Miami",
//         state:"FL"
//     },
//     getBirthYear: function(){
//         return 2017 - this.age;
//     }

// }

// let val;

// val = person.lastName;
// val= person["firstName"];

// val=person.age;

// val=person.hobbies[1];
// val=person.address["city"];
// val=person.getBirthYear();


// console.log(val);

// document.body.innerHTML = val;


// const people = [
//     {name:'John', age:30},
//     {name:'Mike', age:24}
// ]
// for (let i=0; i<people.length; i++){
//     console.log(people[i].name);
// }


// // const name ="John";
// // const age = 30;
// // const job ="Web Developer";
// // const city = "Chidambaram";

// // //without Template strings

// // let html;

// // // html = "<ul><li>Name: "+ name + "</li><li>Age: "+age+"</li><li>Job: "+ job+"</li><li>City: "+city+"</li></ul>";
// // // console.log(html);

// // //with template literals
// // html = `<h2><ul>
// //         <li>Name: ${name}</li>
// //         <li>Age: ${age}</li>
// //         <li>Job: ${job}</li>
// //         <li>City: ${city}</li>
// //         <li>${age>30 ? "Age is not above 30": "Above 30"}</li>
// //     </ul>
// // </h2>`;

// // document.body.innerHTML  = html;


// //array of numbers
// const numbers=[43,54, 87, 45, 56, 67];
// const numbers2 = new Array(12, 23, 34,445);

// document.body.innerHTML= numbers2;
// const fruit =["banana","orange","grapes"];
// const mixed =[22,"Hello", true, undefined, null, {a:1, b:2}, new Date()];
// let val;

// val = mixed[5];
// // console.log(Array.isArray(mixed));
// console.log(val);


// val2 = numbers.indexOf(56);
// console.log(val2);

// numbers.push(100);
// numbers.unshift(120);

// val3 =numbers.pop();
// numbers.shift();

// console.log(numbers);
// console.log(val3);
// //splice values

// numbers.splice(2,2);
// console.log(numbers);

// val4= numbers.concat(fruit);


// console.log(val4);
// console.log(fruit.sort());