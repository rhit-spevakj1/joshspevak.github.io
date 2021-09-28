{/* <script src="js/scrollmagic/minified/ScrollMagic.min.js"></script>
var controller = new ScrollMagic.Controller();
 
// create a scene
new ScrollMagic.Scene({
    duration: 20, // the scene should last for a scroll distance of 100px
    offset: 50 // start this scene after scrolling for 50px
})
    .setPin('#end') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller */}


var scrollToTop = document.getElementById("myBtn");
var root = document.documentElement;
function scrollToTopfunc(){
    root.scrollTo({
        top: 0,
        behavior: "smooth"
      })
}

scrollToTop.addEventListener("click", scrollToTopfunc)

function handleScroll() {
    var scrollTotal = root.scrollHeight - root.clientHeight
    if((root.scrollTop / scrollTotal) > 0.80){
        scrollToTop.classList.add("showBtn")
    }
    else{
        scrollToTop.classList.remove("showBtn")
    }
}
  document.addEventListener("scroll", handleScroll)



 
    


