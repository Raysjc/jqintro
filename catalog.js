
// Global Variables
var items = [{
    code: "asdfj123",
    title: "Tomie",
    price: 980.99,
    description: "This is the long description of a product so the client learn about it and buy it",
    category: "Single",
    rating: 5,
    image: "img/banner.jpg"
},
{
    code: "asdfj123",
    title: "HKS",
    price: 1234.99,
    description: "This is the long description of a product so the client learn about it and buy it",
    category: "Double",
    rating: 4,
    image: "img/banner.jpg"
},
{
    code: "asdfj123",
    title: "Replica",
    price: 1234.99,
    description: "adsfaetrtadfgagfgfdgf afgdgaasdf",
    category: "Dual",
    rating: 4.5,
    image: "img/banner.jpg"
},
{
    code: "asdfj123",
    title: "Replica",
    price: 1234.99,
    description: "adsfaetrtadfgagfgfdgf afgdgaasdf",
    category: "Dual",
    rating: 4.5,
    image: "img/banner.jpg"
}]

// fucntions

function displayCatalog(){
    // travel the array
    // get each element from the array
    // display the element into the DOM (html)
    for(var i = 0; i < items.length; i++){
        var product = items[i];

        // var pLayout = "<div><h4>" + product + "</h4></div>";
        // var pLayout = `<div>
        // <h4>${product.title}</h4>
        // <h5>${product.price}</h5>
        // <p>${product.description}</p>
        // <button class='btn btn-danger'>Buy</button>
        // </div>`;
        var pLayout = 
        `<div class="item">
            <div>
                <img src="${product.image}" class="card-img-top" alt="Exhaust">
                <div class="product-body">
                    <h4 class="card-title">${product.title}</h4>
                    <h6 class="card-price">${product.price}</h6>
                    <p class="card-text">${product.description}</p>
                    <button class="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>`
        console.log(i, pLayout);
        $('#catalog').append(pLayout);
    }
}

function init(){
    console.log('Catalog Page');

    displayCatalog();
}

// initialization
window.onload = init;