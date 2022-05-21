productId = localStorage.getItem('productId')
getproductUrl = 'http://192.168.43.227:7063/Product/get-product-by-id/'+productId
console.log(productId)

fetch(getproductUrl,{
    method: 'GET',
    headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": 'OPTIONS,POST,GET',
        'Content-Type': 'application/json; charset=UTF-8'
    }
}).then(function (response){
    return response.json()
}).then(function (data){
     getProduct(data)
     console.log(data)
})


function getProduct(data)
{
    var producthtml = document.getElementById('Container')
    percent =  percent = 100-(Math.round((data.newPrice  / data.price)*100))
    var product = `
    <div class="ProductImage">
    <img class="Image" src="${data.imageUrl}" alt="">
</div>
<div class="Details">
    <div class="titles">
        <p class="title">${data.name}</p>
        <p class="desc">${data.description}</p>
    </div>
    <div class="pruchase">
        <p class="stock">Hurry,${data.inStock} stock left!!</p>
        <p class="discount">${percent}% Discount, Sale end soon!</p>
        <p class="shipping">Free shipping available on items above ₹ 1000/-</p>
        <button class="fav" type="button">Add to Fav.</button>
        <div class="button">
            <button class="btn buy" type="button">Buy Now</button>
            <button class="btn cart" type="button">Add to Cart</button>
            <p class="replacement">7 days Replacement</p>
            <div class="pricing">
                <p class="price">₹ ${data.newPrice}</p>
                <p class="mrp">MRP ₹ ${data.price}</p>
            </div>
        </div>
    </div>
</div>
    `
    producthtml.innerHTML += product
}