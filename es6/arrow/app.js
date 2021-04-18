// const sayhello = function(){
//     console.log("Hello");
// }

// const sayhello = ()=>{
//     console.log("Hello");
// }

//oneline function doesnt need braces
// const sayhello = ()=>console.log("Hello");

//oneline returns 
// const sayhello = ()=>"Hello";

//return object - enclose within braces ()
// const sayhello =() => ({msg : "Hello"});

//single param not need paranthesis
// const sayhello = (name) => console.log(`Hello ${name}`);

//Multiple parameters need parantheses
// const sayhello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`)

// sayhello("Brad", "Traversy");


const users =["Nathan", "John", "William" ];

//normal MAP function to deal with ARRAYS
// const nameLength = users.map(function(name){
//     return name.length;
// });

//shorter using Arrow function
// const nameLength = users.map((name)=>{
//     return name.length;
// });

//shortest using Arrow function
const nameLength = users.map(name=> name.length);

console.log(nameLength);