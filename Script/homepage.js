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
       console.log("calling cards")     
})

function featurecard(data){
    var cards = document.getElementById('cards')
    for (var i = 0;i<4;i++)
    {
        description = data[i].description
        newdes = description.replace(/^(.{80}[^\s]*).*/, "$1")
        var card = ` <div class="card">
        <img src="images/favorite.png"
                alt="image" class="fav">
            <img src="${data[i].imageUrl}"
                alt="image" class="productImage" id="ProdImage">
            <p class="productTitle" id="producttitle">${newdes}</p>
            <div class="category">
                <p id="category">Laptop</p>
                <p id="category">Laptop</p>
            </div>
            <div class="buy">
                <button class="buybtn">Buy Now</button>
                <button class="addcart"></button>
                <div class="price">
                    <p class="mainPrice">₹ ${data[i].newPrice}</p>
                    <p class="ogPrice">₹ ${data[i].price}</p>
                </div>
            </div>`
    cards.innerHTML +=card
    }
   
}