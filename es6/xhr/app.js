document.getElementById("button").addEventListener("click", loadData);

function loadData(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "data.txt", true);

    //optional 
    xhr.onprogress =function () {
        console.log("READY STATE", xhr.readyState);
    }
    xhr.onerror = function(){
        console.log("Error...");
    }

    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById("output").innerHTML=this.responseText;
        }
    }
    xhr.send();
}