token = document.cookie.replace("name=","")
domain = localStorage.getItem('domain')
validationUrl = 'http://'+domain+'/api/Login/check-validation'
if(document.cookie == "")
{
    window.location.href = "/pages/login.html"
}
else{
   fetch(validationUrl,{
       method: 'GET',
       headers: {
        'Authorization': "bearer " + token,
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": 'OPTIONS,POST,GET',
        'Content-Type': 'application/json; charset=UTF-8'
       }
   }).then(function (response){
       if(response.status !=200)
       {
           document.cookie = "name" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
           window.location.href = "/pages/login.html"
       }
   })
}