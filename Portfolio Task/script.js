//Open and close navbar when user clicks on hamburger
function navFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Close nav when user clicks outside
document.addEventListener('mouseup', function (e) {
	var navcon = document.getElementById('topnav');
	if(!navcon.contains(e.target) && navcon.classList.contains('responsive')){
		navcon.className = "topnav";
	}
});