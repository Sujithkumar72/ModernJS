const name ="John";
const age = 30;
const job ="Web Developer";
const city = "Chidambaram";

//without Template strings

let html;

// html = "<ul><li>Name: "+ name + "</li><li>Age: "+age+"</li><li>Job: "+ job+"</li><li>City: "+city+"</li></ul>";
// console.log(html);

//with template literals
html = `<h2><ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${age>30 ? "Age is not above 30": "Above 30"}</li>
    </ul>
</h2>`;

document.body.innerHTML  = html;