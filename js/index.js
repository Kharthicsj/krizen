const menu_btn = $(".menu__btn");
const navbar = $(".navbar")
const navitem = $(".nav__item");
const dropdown = $(".dropdown");
const body = $("body");
let menuopen = false;
// menu btn action
menu_btn.click(function(){
    if(!menuopen){
        menu_btn.addClass('open');
        body.css('overflow-y', 'hidden');
        if($(window).width() > 568){
            navbar.animate({
                width: '40%',
            });
        }
        else {
            navbar.animate({
                width: '60%',
            });
        }
        menuopen = true;
        
    }
    else {
        menu_btn.removeClass('open');
        body.css('overflow-y', 'visible');
        navbar.animate({
            width: '0'
        });
        menuopen = false;
    }

});
//Scroll Animation
document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in');
  
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });
  
  


