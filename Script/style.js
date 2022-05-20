window.addEventListener("scroll", function(e){
    var scroll = this.scrollY;
    if(scroll>456)
    {
        document.getElementById("nav").style.backgroundColor = "rgb(230, 230, 230)"
    }
    else if(scroll<456)
    {
        document.getElementById("nav").style.backgroundColor = "rgba(230, 230, 230,0.6)"
    }
});