token = document.cookie.replace("name=","")
validationUrl = 'http://192.168.43.227:7063/api/Login/check-validation'
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
           window.location.href = "/pages/login.html"
       }
   })
}