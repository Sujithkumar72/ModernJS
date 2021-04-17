const posts=[
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"}
]

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post)
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output ="";
//         posts.forEach(function(post){
//             output +=`<li>${post.title}`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title:"Post Three", body:"This is the post Three"});

// getPosts();


//async way
function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            let error = true;
            if(!error){
                resolve();
            } else {
                reject("Error Bumps");
            }
            
        }, 2000);
    })

}

function getPosts(){
    setTimeout(function(){
        let output ="";
        posts.forEach(function(post){
            output +=`<li>${post.title}`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title:"Post Three", body:"This is the post Three"})
    .then(getPosts)
    .catch(function(err){
        console.log(err);
    });