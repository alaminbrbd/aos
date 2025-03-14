
// Mixitup
$(document).ready(function(){
    var mixer=mixitup('#hello',{
       
        animation:{
            duration:300
        }
    });
});
// Animation on scroll
AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
  });
// preloader
$(function () {
    // preloader start
    $(window).load(function () {
      $("#loading").fadeOut(2000);
    });
    // preloader end
  });



  //   go top button
let goTopBtn = document.getElementById("goTopBtn");
        
        window.onscroll = function () {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                goTopBtn.style.display = "block";
            } else {
                goTopBtn.style.display = "none";
            }
        };
        
        function goToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }