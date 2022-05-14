const url = 'https://localhost:7063/Product/get-all-product'
fetch(url,{
    method: 'GET',
    headers:{
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": 'OPTIONS,POST,GET',
        'Content-Type': 'application/json; charset=UTF-8'
    },
}).then(function (response){
    return response.json();
}).then(function (text){
    
       console.log(text)
       featurecard(text)      
})

function featurecard(data){
    var cards = document.getElementById('cards')
    for (var i = 0;i<4;i++)
    {
        var card = ` <div class="card">
            <img src="${data[i].imageUrl}"
                alt="image" class="productImage" id="ProdImage">
            <p class="productTitle" id="producttitle">${data[i].name}</p>
            <div class="category">
                <p id="category">Laptop</p>
                <p id="category">Laptop</p>
            </div>
            <div class="buy">
                <button class="buybtn">Buy Now</button>
                <button class="addcart"><img class="cartImage" src="images/cart.png" alt=""></button>
                <div class="price">
                    <p class="mainPrice">${data[i].newPrice}</p>
                    <p class="ogPrice">₹ ${data[i].price}</p>
                </div>
            </div>`
    console.log(data[i])
    cards.innerHTML +=card
    }
}