const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
taskInput.value = "";
// form.addEventListener("submit", runEvent);
// taskInput.addEventListener("keyup", runEvent);
taskInput.addEventListener("focus", runEvent)
function runEvent(e){
    heading.innerText = e.target.value;
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value);
    // console.log(taskInput.value);
    // e.preventDefault();

}

taskInput.addEventListener("focus", runEvent);

// const clearBtn=document.querySelector(".clear-tasks");
// const card= document.querySelector(".card");
// const heading = document.querySelector("h5");

// //Event Handler
// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);
//     heading.textContent = `Mouse(x): ${e.offsetX} Mouse(y):${e.offsetY}`;
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

// clearBtn.addEventListener("click",runEvent);
// clearBtn.addEventListener("dblclick", runEvent);
// clearBtn.addEventListener("mousedown", runEvent);
// clearBtn.addEventListener("mouseup", runEvent);
// clearBtn.addEventListener("mouseenter", runEvent);
// clearBtn.addEventListener("mouseleave", runEvent);
// clearBtn.addEventListener("mouseover", runEvent);
// clearBtn.addEventListener("mouseout", runEvent);
card.addEventListener("mousemove", runEvent);

// let val;
// const list =document.querySelector("ul.collection");
// console.log(list);
// const listItem = document.querySelector("li.collection-item:first-child");
// val = listItem;
// val= list;


// val = list.childNodes;

// val=list.children[1];
// val=list.firstChild;
// val=list.firstElementChild;

// console.log(val);

// const item = document.getElementsByClassName("collection-item");
// // console.log(item);
// // console.log(item[0]);
// item[0].style.color="red";
// item[0].textContent="Hello";
// const listItems =document.querySelector("ul").getElementsByClassName("collection-item");
// console.log(listItems);
// const lister = Array.from(listItems);
// listItems.forEach(function(listItem, index){
//   console.log(`${index}: listItem`);
// });




// const nodeList = document.querySelectorAll("li:nth-child(odd)");
// console.log(nodeList);
// nodeList.forEach(function(node, index){
//   console.log(`${index}: node`);
// });
// console.log(document.getElementById("task-title"));

// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

// document.getElementById("task-title").style.background ="#333";
// document.getElementById("task-title").style.color="#fff";
// document.getElementById("task-title").style.padding = "5px";


// document.getElementById("task-title").textContent ="task-list";
// document.getElementById("task-title").innerText ="My Tasks";
// document.getElementById("task-title").innerHTML="<h2 style='color:red'>Task List </h2>";

//document.querySelector()


// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h5"));
// document.querySelector("li").style.color ="green";
// document.querySelector("ul li").style.color ="red";
// document.querySelector("li:last-child").style.color ="green";
// document.querySelector("li:nth-child(1)").style.color ="black";
// document.querySelector("li:nth-child(even)").style.color ="red";
// document.querySelector("li:nth-child(4)").style.color ="red";

// let val;
// val = document;
// val =document.all;
// val= document.all[1];
// val=document.all.length;
// val=document.head;
// val=document.body;
// val=document.doctype;
// val=document.domain;
// val=document.URL;
// val=document.charset;
// val =document.contentType;
// val=document.forms;
// val=document.forms[0];
// val=document.forms[0].id;
// val=document.forms[0].method;
// val=document.forms[0].action;
// val=document.links;
// val=document.links[0];
// val=document.links[0].id;
// val=document.links[0].classList;
// val==document.links[0].className;
// val=document.images;
// val=document.scripts;
// val=document.scripts[2];
// val=document.scripts[2].getAttribute("src");
// let scripts =document.scripts;
// let scriptArray= Array.from(scripts);

// scriptArray.forEach(function(script){
//   console.log(script);
// });


// console.log(val);