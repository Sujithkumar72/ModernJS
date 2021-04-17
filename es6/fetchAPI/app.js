document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);
function getText(){
    fetch("test.txt")
        .then(function(res){
            return res.text();
        }).then(function(data){
            console.log(data);
            document.getElementById("output").innerHTML = data;
        }).catch(function(err){
            console.log(err);
        })
        ;
}

function getJson(){
    fetch("post.json")
        .then(function(res){
           return res.json();
        })
        .then(function(data){
            console.log(data);
            let output =""
            data.forEach(function(item){
                output+=`<li>${item.title}</li>`;
            });
            document.getElementById("output").innerHTML = output;
        });
}

//GET from external API
function getExternal(){
    fetch("https://api.github.com/users")
        .then(function(res){
           return res.json();
        })
        .then(function(data){
            console.log(data);
            let output =""
            data.forEach(function(item){
                output+=`<li>${item.login}</li>`;
            });
            document.getElementById("output").innerHTML = output;
        });
}