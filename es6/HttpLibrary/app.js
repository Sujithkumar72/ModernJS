const http = new easyHttp();

//GET POSTS
// http.get("https://jsonplaceholder.typicode.com/posts", function(err, response){
//     if(err){
//         console.log(err);
//     }   else {
//         console.log(response);
//     } 
// });

// get single post
// http.get("https://jsonplaceholder.typicode.com/posts/1", function(err, response){
//     if(err){
//         console.log(err);
//     }   else {
//         console.log(response);
//     } 

// });


const data = {
    "title": "Custom Post",
    "body": "This is a custom Post"
};

// CREATE POST
// http.post("https://jsonplaceholder.typicode.com/posts", data, function(err, posts){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

//UPDATE post
// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(err, post){
//     if(err){
//         console.log(err)
//     } else{
//         console.log(post);
//     }
// });

http.delete("https://jsonplaceholder.typicode.com/posts/1", function(err, response){
    if(err){
        console.log(err);
    }   else {
        console.log(response);
    } 
});