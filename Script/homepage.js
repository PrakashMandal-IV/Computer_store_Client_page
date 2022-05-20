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
const url = 'http://192.168.43.227:7063/Product/get-all-product'
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

function featurecard(data){
    var cards = document.getElementById('featcard')
    var gamingcards = document.getElementById('gaminglaptop')
    var accessories = document.getElementById('Accessories')
    var newarrivals = document.getElementById('NewArrivals')
    for (var i = 0;i<4;i++)
    {
        description = data[i].description
        newdes = description.replace(/^(.{80}[^\s]*).*/, "$1")
        var card = `
            <div class="card">
            <img class="productimage" src="${data[i].imageUrl}" alt="laptop"> 
            <p class="productTitle">${newdes}</p>
            <div class="categorylabel">
                <h8 class="cat">laptop</h8>
                <h8 class="cat">Gaming</h8>
            </div>
            <div class="cardfoot">
                <button class="btn buy">Buy Now</button>
                <button class="btn cart"><img class="cartImg" src="Images/cart.png" alt=""></button>
                <div class="price">
                    <p class="newPrice">₹ ${data[i].newPrice}</p>
                    <p class="oldPrice">₹ ${data[i].price}</p>
                </div>
            </div>
        </div> `
    cards.innerHTML +=card
    gamingcards.innerHTML +=card
    accessories.innerHTML +=card
    newarrivals.innerHTML +=card
    }
  
}
function CategoryBtn()
{
    window.location.href = "/pages/Category.html"
}