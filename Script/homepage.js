var authToken = null

//category
function categoryView(){
}
//login/register
function account(){
    if(authToken == null)
    {
    window.location = "/pages/login.html";
    }
    else{window.location = "my account"}
}
const url = 'http://192.168.43.227:7063/Category/get-product-by-category/3'
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
       featurecard(text)          
})
//<h8 class="cat">laptop</h8>
//<h8 class="cat">Gaming</h8>
function featurecard(data){
    var cards = document.getElementById('featcard')
    var gamingcards = document.getElementById('gaminglaptop')
    var accessories = document.getElementById('Accessories')
    var newarrivals = document.getElementById('NewArrivals')
    var product  = data.product
    for (var i in product)
    {
        
        
        newdes = product[i].description.replace(/^(.{80}[^\s]*).*/, "$1")
        var card = `
            <div class="card">
            <img class="productimage" src="${product[i].imageUrl}" alt="laptop"> 
            <p class="productTitle">${newdes}</p>
            <div class="categorylabel">
            <h8 class="cat">${product[i].category[0].name}</h8>
            <h8 class="cat">${product[i].category[1].name}</h8>
            </div>
            <div class="cardfoot">
                <button class="btn buy">Buy Now</button>
                <button class="btn cart"><img class="cartImg" src="Images/cart.png" alt=""></button>
                <div class="price">
                    <p class="newPrice">₹ ${product[i].newPrice}</p>
                    <p class="oldPrice">₹ ${product[i].price}</p>
                </div>
            </div>
        </div> `
    cards.innerHTML +=card
    gamingcards.innerHTML +=card
    accessories.innerHTML +=card
    newarrivals.innerHTML +=card
    }
  
}