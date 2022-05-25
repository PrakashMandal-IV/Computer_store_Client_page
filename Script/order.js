const params = new URLSearchParams(window. location. search)
token = document.cookie.replace("name=","")
productId = params.get('product')
domain = localStorage.getItem('domain')
const getProductUrl = 'http://'+domain+'/Product/get-product-by-id/'+productId
const addressUrl = 'http://'+domain+'/Controller/get-user-address'
const AddAddressUrl = 'http://'+domain+'/Controller/add-user-address'
let newPrice = ''
let price = ''
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
    newPrice = data.newPrice
    price = data.price
}

function FetchAddress()
{
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
    getPricing()
}
}

function getPricing() {
    var template = document.getElementById('price')
    if(newPrice>=1000)
    {
        charges = 0
    }
    else charges = 40
    var element = `
    <div class="subtotal">
                <div class="PriceLabel">
                    <p class="label">Price: </p>
                    <p class="tag newPrice">₹ ${newPrice}</p>
                </div>
                <div class="PriceLabel">
                    <p class="label">M.R.P: </p>
                    <p class="tag price">- ₹ ${price}</p>
                </div>
                <div class="PriceLabel">
                    <P class="label">You Saved : </P>
                    <p class="tag saveing">+ ${price - newPrice}</p>
                </div>
                <div class="PriceLabel">
                    <p class="label">Delivery </br> Charges: </p>
                    <p class="tag delivery">+ ${charges} </p>
                </div>
                <div class="PriceLabel">
                    <p class="label">Total Amount: </p>
                    <p class="tag total">₹ ${newPrice + charges}</p>
                </div>
                <p class="tax">Inclusive of all Taxes</p>
            </div>
    `
    template.innerHTML += element
}



//Add Address 
function AddAddress(){
    Addressname = document.getElementById('name').value
    street= document.getElementById('street').value
    city= document.getElementById('city').value
    state= document.getElementById('state').value
    country= document.getElementById('country').value
    landMark= document.getElementById('landmark').value
    postalCode= document.getElementById('pincode').value
    phoneNumber= document.getElementById('phone').value
   if(document.getElementById('HomeAddress').checked)
   {
       addresstype = true
   }
   else if(document.getElementById('OfficeAddress').checked)
   {
       addressType= false
   }
    AddressData = {
    name: `${Addressname}`,
    addressType: addressType,
    street: `${street}`,
    city: `${city}`,
    state: `${state}`,
    country: `${country}`,
    landMark: `${landMark}`,
    postalCode: `${postalCode}`,
    phoneNumber:`${phoneNumber}`
    }
fetch(AddAddressUrl,{
    method: 'POST',
    headers: {
        'Authorization': "bearer " + token,
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": 'OPTIONS,POST,GET',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(AddressData)
}).then(function (response)
{
    if(response.status == 200)
    {
        document.getElementById('AddressForm').style.display = 'none'
    }

})



//end address function
}