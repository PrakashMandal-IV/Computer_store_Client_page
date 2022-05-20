navbar = document.getElementById('navbar')
var nav = `
<img src="/Images/logo.png" alt="" class="logo">
<button class="navbtn homebtn" onclick="HomeBtn()">Home</button>
<button class="navbtn categorybtn" onclick="CategoryBtn()">Category</button>
<button class="navbtn buildpcbtn">Build PC</button>
<button class="navbtn ordersbtn">Orders</button>
<button class="navbtn cartbtn">Your Cart</button>
<button class="navbtn accountbtn" onclick="AccountBtn()">Account</button> 
`
navbar.innerHTML +=nav

function HomeBtn()
{
    window.location.href = "/index.html"
}
function CategoryBtn()
{
    window.location.href = "/pages/Category.html"
}
function AccountBtn(){
    window.location.href = "/pages/Account.html"
}
