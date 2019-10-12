

function Item(code, title, price, description, category, rating, image){
    this.code = code;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.rating = rating;
    this.image = image

}

function saveItem(){
    //get values
    var code = $("#txtCode").val();
    var title = $("#txtTitle").val();
    var price = $("#txtPrice").val();
    var description = $("#txtDescription").val();
    var category = $("#txtCategory").val();
    var rating = $("#txtRating").val();
    var image = $("#txtImage").val();
    // create an object
    var test = new Item(code, title, price, description, category, rating, image);
    console.log(test);
    // send the object to a server
}

function solveHomework(){
    var data = [
        {
            age: 99,
            name: "Sergio",
            color: "Gray"
        },
        {
            age: 23,
            name: "John",
            color: "Blue"
        },
        {
            age: 27,
            name: "Alice",
            color: "Pink"
        },
        {
            age: 87,
            name: "Robert",
            color: "Gray"
        },
        {
            age: 23,
            name: "Sheldon",
            color: "Black"
        },
        {
            age: 45,
            name: "Will",
            color: "Green"
        },
        {
            age: 16,
            name: "Kevin",
            color: "Yellow"
        },
        {
            age: 37,
            name: "Liz",
            color: "Pink"
        },
        {
            age: 98,
            name: "Noah",
            color: "White"
        },
        {
            age: 31,
            name: "Alfredo",
            color: "White"
        },
        {
            age: 74,
            name: "Rhenard",
            color: "Green"
        },
        {
            age: 39,
            name: "Myk",
            color: "Blue"
        },
    ]

    // 1 - who ( name - age ) is the oldest ?
    // 2 - who ( name - age ) is the youngest ?
    // 3 - sum of all ages 

    // http method (Get, Post, Put, Patch, Delete)
    // http Status Codes
}

function init() {
    console.log('Admin');

    $("#btnSave").click(saveItem);

    solveHomework();
}

window.onload = init;