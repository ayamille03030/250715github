function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

/*function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}*/

var myScrollFunction = function() {
  var y = window.scrollY;
  if (y >= 800) {
    myID.className = "bottomMenu show"
  } else {
    myID.className = "bottomMenu hide"
  }
};

window.addEventListener("scroll", myScrollFunction);