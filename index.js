const credits = document.getElementById("credits");
credits.addEventListener("click", () => {
    alert("Background Image: https://www.wallpaperflare.com/anime-anime-girls-vertical-hololive-gawr-gura-virtual-youtuber-wallpaper-ycczg \n \nSocial Icons: https://github.com/alexandresanlim/Badges4-README.md-Profile \n \n yes i used an alert for this");
});

var controller = new ScrollMagic.Controller();
var revealElements = document.getElementsByClassName("animate-me");
for (var i=0; i<revealElements.length; i++) {
  new ScrollMagic.Scene({
		  triggerElement: revealElements[i],
			offset: 50,
			triggerHook: 0.9,
	})
		.setClassToggle(revealElements[i], "visible")
		.addTo(controller);
}