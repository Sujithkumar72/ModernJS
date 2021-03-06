class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book){
        const list =document.getElementById("book-list");
        //create tr element 
        const row =document.createElement("tr");
        //insert cols to TR
        row.innerHTML =`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`
        list.appendChild(row);
    }
    showAlert(message, className){
        const div = document.createElement("div");
        div.className =`alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);
        const div1 = document.querySelector("body");
//   
        setTimeout(function(){
            document.querySelector(".alert").remove();
        }, 3000);
    }
    deleteBook(target){
        if(target.className ="delete"){
            target.parentElement.parentElement.remove();
        }
    }
    clearFields(){
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
}

//Event Listeners for Adding Book to the LIST
document.getElementById("book-form").addEventListener("submit", function(e){

    const   title= document.getElementById("title").value, 
            author = document.getElementById("author").value,
            isbn = document.getElementById("isbn").value;

    const book = new Book(title, author, isbn);
    const ui = new UI();

    if(title ===""||author === "" ||isbn===""){
        ui.showAlert("Please fill in all fields", "error");
    } else {
        ui.addBookToList(book);
        ui.clearFields();
        ui.showAlert("Book Added", "success");
    }

    e.preventDefault();
});

//Event Listener for removing book from the LIST
document.getElementById("book-list").addEventListener("click", function(e){

    const ui = new UI();
    ui.deleteBook(e.target);
    //shoe the message
    ui.showAlert("Book Removed", "success");
    e.preventDefault();
})