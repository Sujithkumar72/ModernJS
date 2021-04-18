document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);
function getText(){
    fetch("test.txt")
        .then(res => res.text())
        .then(data => {console.log(data);
            document.getElementById("output").innerHTML = data;
        })
        .catch(err => console.log(err));
}

function getJson(){
    fetch("post.json")
        .then(res => res.json())
        .then(data => {
            let output =""
            data.forEach(item => {output+=`<li>${item.title}</li>`;});
            document.getElementById("output").innerHTML = output;
        })
        .catch(err => console.log(err));
}

//GET from external API
function getExternal(){
    fetch("https://api.github.com/users")
        .then(res => res.json())
        .then(data => {
            let output =""
            data.forEach(item => {
                output+=`<li>${item.login}</li>`;
            });
            document.getElementById("output").innerHTML = output;
        })
        .catch(err => console.log(err));
}