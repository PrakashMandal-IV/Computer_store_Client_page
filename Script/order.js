const params = new URLSearchParams(window. location. search)
token = document.cookie.replace("name=","")
productId = params.get('product')
domain = localStorage.getItem('domain')
const getProductUrl = 'http://'+domain+'/Product/get-product-by-id/'+productId
const addressUrl = 'http://'+domain+'/Controller/get-user-address'
fetch(getProductUrl,{
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

function GetProduct(data)
{
    
    var productTemplate = document.getElementById('productinfo')
    var fillProduct = `
    <img class="productimg" src="${data.imageUrl}" alt="">
               <div class="info">
                   <p class="title">${data.name}</p>
                   <p class="detail">${data.description}</p>
                   <label for="quantity">Qty*: </label>
                   <input type="text" name="quantity" id="qty" value="1" class="qty">
                   <p class="Price">₹ ${data.newPrice}</p>
                </div>
    `
    productTemplate.innerHTML +=fillProduct
}

fetch(addressUrl,{
    method: 'GET',
    headers: {
        'Authorization': "bearer " + token,
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": 'OPTIONS,POST,GET',
        'Content-Type': 'application/json; charset=UTF-8'
    }
}).then(function (response){
    return response.json()
}).then(function (data){
   console.log(data)
   getAddress(data)
})

function getAddress(data)
{
    var addresshtml = document.getElementById('address')
    add = data.addressList
    console.log(add)
    for(var i in add)
    {
        var addresscard = `
        <input type="radio" name="Address" id="Address" class="CheckAddress" checked>
                    <label for="Address">
                        <p class="AddressName">${add[i].name}</p>
                        <p class="addresstype">${add[i].addressType}</p>
                        <p class="street">${add[i].street}</p>
                        <p class="city">${add[i].city}</p>
                        <p class="state">${add[i].state}</p>
                        <p class="country">${add[i].country}</p>
                        <p class="landmark">${add[i].landmark}</p>
                        <p class="pincode">${add[i].postalCode}</p>
                        <p class="Number">${add[i].phoneNumber}</p>
                    </label>
        `
        addresshtml.innerHTML += addresscard
    }

}
