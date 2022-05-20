navbar = document.getElementById('navbar')
var nav = `
<img src="Images/logo.png" alt="" class="logo">
<button class="navbtn homebtn">Home</button>
<button class="navbtn categorybtn" onclick="CategoryBtn()">Category</button>
<button class="navbtn buildpcbtn">Build PC</button>
<button class="navbtn ordersbtn">Orders</button>
<button class="navbtn cartbtn">Your Cart</button>
<button class="navbtn accountbtn">Account</button> 
`
navbar.innerHTML +=nav