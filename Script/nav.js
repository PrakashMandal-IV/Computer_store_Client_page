navbar = document.getElementById('navbar')
var nav = `
<img src="/Images/logo.png" alt="" class="logo">
<button class="navbtn homebtn" onclick="HomeBtn()">Home</button>
<button class="navbtn categorybtn" onclick="CategoryBtn()">Category</button>
<button class="navbtn buildpcbtn">Build PC</button>
<button class="navbtn ordersbtn">Orders</button>
<div class="searching">
    <input type="search" name="search"id="searchbar" class="search" placeholder="Search..">
    </form>
    <button class="searchbtn" onclick="searchtag()"><img class="searchimg" src="/Images/search.png" alt=""></button>
    </div>
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

function searchtag()
{
    searchstring = document.getElementById('searchbar').value
    if(searchstring != "")
    {
        window.location.href ="/pages/SearchedProducts.html?watch="+searchstring
    }
}
