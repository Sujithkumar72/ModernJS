const user ={email : "example@test.com"};

try {
    // myFunction(); //reference error
    // null.myFunction(); //Type Error
    // eval("Hello world"); //Syntax Error
    // decodeURIComponent("%"); //URI Error
    if(!user.name){
        throw "User has no name";
    }
} catch(e) {
    console.log(e);

    // console.log(e.name);
    // console.log(e.message);
    // console.log(e instanceof ReferenceError);
} finally {
    console.log("Finally runs regardless of result....");
}

