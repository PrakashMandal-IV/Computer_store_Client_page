const url = 'https://localhost:7063/Product/get-product-by-id/7'
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
        document.getElementById('ProdImage').src = text.imageUrl
        document.getElementById('producttitle').innerText = text.name
      
       
})