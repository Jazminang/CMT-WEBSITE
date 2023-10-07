/*--- Sticky Nav---*/
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })

/*--- Sticky Nav---*/

/*--- Hamburger Nav---*/
 var navLinks = document.getElementById("navLinks");
 function showMenu(){
    navLinks.style.right = "0";
 }
  function hideMenu(){
    navLinks.style.right = "-200px";
 }
/*--- Hamburger Nav---*/