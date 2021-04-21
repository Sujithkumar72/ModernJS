const posts = [
    { title : "Post One", body : "This is post One"},
    { title : "Post Two", body : "This is post Two"}
];

function getPosts(){
    setTimeout(()=> {
       let output = "";
       posts.forEach((post, index)=>{
           output += `<li>${post.title}</li>`;
       });
       document.body.innerHTML = output;
    }, 1000);

}
// getPosts();

function createPosts(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = true;
            if(!error){
                resolve();
            } else{
                reject("Error: Something went wrong");
            }
        },2000);
    });
}
createPosts({title: "post 3", body: "This is post threee"})
    .then(getPosts)
    .catch(error => console.log(error));