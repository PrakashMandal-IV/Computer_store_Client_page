id = localStorage.getItem('CategoryId')
domain = localStorage.getItem('domain')
productlistUrl = 'http://'+domain+'/Category/get-product-by-category/'+id

fetch(productlistUrl,{
    method: 'GET',
    headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": 'OPTIONS,POST,GET',
        'Content-Type': 'application/json; charset=UTF-8'
    },
}).then(function (response){
    return response.json()
}).then(function (data){
   GetProduct(data)
})


function GetProduct(data){
    var viewproduct = document.getElementById('product')
    document.getElementById('category').innerHTML += `Products of category "${data.name}"` 
    var product  = data.product
    for(var i in product)
    {
        console.log(product[i].id)
        percent = 100-(Math.round((product[i].newPrice  / product[i].price)*100))
        if(product[i].newPrice >1000)
        {
            shipping = '<p class="shipping">Free shipping available</p>'
        }     
        else{
            shipping= ""
        }  
        var listview = `
        <div class="product">
     <button type="button" class="productclick" onclick="getProduct(this.id)" id="btn${i}" value="${product[i].id}">   <img src="${product[i].imageUrl}" alt="image"
            class="productimg"> </button>
        <div class="detail">
            <div class="info">
                <label class="title">${product[i].name}</label></br>
                <label class="description">${product[i].description}</label>
            </div>
            <div class="infotwo">
                <div class="leftSection">
                <h8 class="cat">${product[i].category[0].name}</h8>
                <h8 class="cat">${product[i].category[1].name}</h8> 
                </br>
                    <button type="button" class="fav">Add To Wishlist +</button>
                    <div class="price">
                        <p class="newPrice">Price: ₹ ${product[i].newPrice}</p>
                        <div class="mrp">
                            <p>M.R.P :</p>
                            <p class="oldPrice"> ₹ ${product[i].price}</p>
                        </div>
                    </div>
                </div>
                <div class="rightSection">
                    <p class="dicount">${percent}% Discount, Buy now</p> 
                     ${shipping}          
                    <button type="button" class="cart btn">Add To Cart</button>
                    <button type="button" class="buy btn">Buy now</button>
                </div>
            </div>
        </div>
    </div>

        `
        viewproduct.innerHTML += listview
    }
  
}

function getProduct(id)
{
    ProductId = document.getElementById(id).value
   
   window.location.href = '/pages/Product.html?product='+ProductId
}