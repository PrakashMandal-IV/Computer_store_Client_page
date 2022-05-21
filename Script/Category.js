domain = localStorage.getItem('domain')

categoryUrl = 'http://'+domain+'/Category/get-all-category'


fetch(categoryUrl,{
    method: 'GET',
    headers: {
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": 'OPTIONS,POST,GET',
    'Content-Type': 'application/json; charset=UTF-8'
}
}).then(function (response){
return response.json();
}).then(function (data){   
   getcategory(data)     
})


function getcategory(data){
    categorylabel = document.getElementById('label')
    for(var i in data)
    {
        var category = `
        <button type="button" class="categorylabel" onclick="getProduct(this.id)" id="category${i}" value="${data[i].id}" >${data[i].name}</button>
        `
        categorylabel.innerHTML += category
    }
}

function getProduct(id){
   Categorid = document.getElementById(id).value
   localStorage.setItem('CategoryId',Categorid)
   window.location.href = "/pages/ProductList.html"
}