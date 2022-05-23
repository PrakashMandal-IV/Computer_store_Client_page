token = document.cookie.replace("name=","")
domain = localStorage.getItem('domain')

userDetailUrl = 'http://'+domain+'/Controller/get-user-detail'

fetch(userDetailUrl,{
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
  GetUser(data)
})

function GetUser(data)
{
   var detail = document.getElementById('detail')
   var _detail = `
   <p class="userName">${data.firstName} ${data.lastName}</p>
                <p class="userEmail">${data.email}</p>
   `
   detail.innerHTML +=_detail
}


//log out
function signout()
{
    document.cookie = "name" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href = "/pages/login.html"
}