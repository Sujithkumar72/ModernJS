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

function createPosts(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    }, 2000);
}
createPosts({title: "post 3", body: "This is post threee"}, getPosts);