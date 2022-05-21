domain = localStorage.getItem('domain')

const LoginUrl = 'http://'+domain+'/api/Login/user-login'
const registerUrl = 'http://'+domain+'/api/Login/register-user'
const loginform = document.getElementById('loginform')
console.log(document.cookie)
loginform.addEventListener('submit', function (e) {
    e.preventDefault();

    email = document.getElementById('email').value
    password = document.getElementById('password').value

    logindata = {
        email: `${email}`,
        password: `${password}`
    }
    console.log(logindata)
    fetch(LoginUrl, {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": 'OPTIONS,POST,GET',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(logindata)
    }).then(function (response) {
        if (response.status == 400) {
            document.getElementById('email').style.border = "1px solid red"
            document.getElementById('password').style.border = "1px solid red"
        }     
        return response.text()
    }).then(function (text) {
       CreateCookie(text)    
       window.location.href= "/pages/Account.html"
    })
})
//fuction to create cookie
function CreateCookie(authToken)
{     
     document.cookie = "name ="+authToken +";max-age ="+60*60*24*1+";SameSite=None;secure;"
}

//open loging or registration function
function OpenReg() {
    document.getElementById('logpanel').style.display = "none"
    document.getElementById('regpanel').style.display = "block"
    
}
function OpenLogin() {
    document.getElementById('regpanel').style.display = "none"
    document.getElementById('logpanel').style.display = "block"
   
}

//registration
const RegForn = document.getElementById('registrationform')
RegForn.addEventListener('submit', function (e) {
    e.preventDefault()
    username = document.getElementById('regusername').value
    firstname = document.getElementById('regfirstname').value
    lastname = document.getElementById('reglastname').value
    password = document.getElementById('regpassword').value
    regdata = {
        "username": `${username}`,
        "firstName": `${firstname}`,
        "lastName": `${lastname}`,
        "password": `${password}`
    }
    fetch(registerUrl, {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": 'OPTIONS,POST,GET',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(regdata)
    }).then(function (response) {
        if (response.status == 200) {
            document.getElementById('regpanel').style.display = "none"
            document.getElementById('logpanel').style.display = "block"         
        }
        else{
            alert("Facing some issues!, Please Try again")
        }
        return response.text();
    })
})