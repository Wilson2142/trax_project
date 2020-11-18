/* ----Navbar replace on scroll---- */
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;

  header.classList.toggle("scrolling", windowPosition);
});
/* ----Navbar replace on scroll ends---- */

/* ----Sidebar menu button---- */
function open_menu() {
  let sideMenu = document.querySelector(".sideMenu");
  sideMenu.classList.toggle("side-active");
};
function close_menu() {
  let sideMenu = document.querySelector(".sideMenu");
  sideMenu.classList.remove("side-active");
 
};

/* ----Sidebar menu button ENDS---- */
/* ----Gallery grid---- */
$(document).ready(function () {
$("#grid-container").cubeportfolio({
  filters: ".galleryLinks",
  animationType: "rotateSides",
  gapHorizontal: 0,
  gapVertical: 0,
  mediaQueries: [{
      width: 1100,
      cols: 3,
  }, {
      width: 767,
      cols: 2,
  }, {
      width: 480,
      cols: 1,
  }]
});
}); 
/* ----Gallery grid ends---- */
/* ----- OWL CAROUSEL ----- */
$(document).ready(function (){
  let owl = $('.owl-carousel');
 
 owl.owlCarousel({
   items: 1,
   loop: true,
   autoplay: false,
   nav: false,
   dots: true,
   touchDrag:false,
   mousedrag:false,
   margin: 0,
   animateIn: 'fadeIn',
   animateOut: 'fadeOut',
   
 });
 
 
  /* ---- Multilayer Animation ---- */
 function setAnimation ( _elem, _InOut ) {
     let animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
     _elem.each ( function () {
       let $elem = $(this);
       let $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );
       $elem.addClass($animationType).one(animationEndEvent, function () {
         $elem.removeClass($animationType); 
       });
     });
   }
 
   let round = 0;
   owl.on('changed.owl.carousel', function(event) {
 
       let $currentItem = $('.owl-item', owl).eq(event.item.index);
       let $elemsToanim = $currentItem.find("[data-animation-in]");
     
       setAnimation ($elemsToanim, 'in');
   })
   
   owl.on('translated.owl.carousel', function(event) {
       if (event.item.index == (event.page.count - 2))  {
         if (round < 1) {
           round++
         } else {
          console.log("Something happend on HERO carousel, don't worry about this, autoplay fucks it up")
         }
       }
   });
 
 });
 /* ---- Multilayer Animation ENDS ---- */
 /* ---- Team Slider ---- */
 
 $('#owl-one').owlCarousel({
   loop: true,
   margin: 0,
  
   responsiveClass: true,
   responsive: {
     0: {
       items: 1,
     },
     545: {
       items: 2,
     },
     768: {
       items: 3,
     },
     1199: {
       items: 4,
     }
   }
 });
 /* ---- Team Slider ENDS ---- */
 /* ---- Pricing Slider ---- */
 $('#owl-two').owlCarousel({
   loop: false,
   margin: 40,
   stagePadding: 20,
   autoplay: true,
   autoplaySpeed:500,
   dots:false,
   responsiveClass: true,
   
   responsive: {
     0: {
       items: 1,
     },
     768: {
       items: 2,      
     },
     997: {
       items: 3,
     }
   }
 });
 /* ---- Pricing Slider ENDS ---- */
 /* ---- Service Slider ---- */
 $('#owl_three').owlCarousel({
   loop: true,
   margin: 0,
   animateOut: 'fadeOut',
   animateIn: 'fadeIn',
   dots: false,
   autoplay: true,
   autoplaySpeed: 500,
   mouseDrag: true,
   touchDrag: true,
   responsive: {
     1279: {
       items: 1,
     },
     576: {
       items: 1,
     },
     320: {
       items: 1,
     },
   }
 });
 /* ---- Service Slider ENDS ---- */
 /* ---- Partners Slider ---- */
 $('#owl_four').owlCarousel({
   loop: true,
   margin: 5,
   mouseDrag: true,
   touchDrag: true,
   autoplay: true,
   nav: false,
   dots: false,
   autoplaySpeed: 1000,
   autoplayTimeout: 5000,
   responsive : {
     0: {
       items: 1
     },
     372 : {
       items: 2
     },
     576: {
       items: 3
     },
     997 : {
       items: 4
     }, 
     1199 : {
       items: 5
   },
 }
});
 /* ---- Partners Slider ENDS ---- */
 /* ---- Testimonial Slider ---- */
 
 $('#owl_five').owlCarousel({
   loop: true,
   mousedrag: true,
   touchDrag: true,
   autoplay: true,
   items: 1,
   nav: false,
   dots: false,
   animatein: 'fadeIn',
   animateOut: 'fadeOut',
   
 })
 /* ---- Testimonial Slider ENDS ---- */
 /* ---- Fancybox call ---- */
  $('[data-fancybox="gallery"]').fancybox({

});
 

/* ---- Pricing Value Changer ---- */
            // Igen tudom hogy ez így elég noob, de az array nélkül nem akar működni, hiába van változóba akkor sem... "sad panda"
            const monthly = document.getElementById('month_btn');
            const yearly = document.getElementById('year_btn');

            yearly.addEventListener('click', () => {
                document.getElementsByClassName('priceNum')[0].innerHTML = "$89.55";
                document.getElementsByClassName('priceNum')[1].innerHTML = "$179.55";
                document.getElementsByClassName('priceNum')[2].innerHTML = "$269.55";
                document.getElementsByClassName('priceNum')[3].innerHTML = "$449.55";
                document.getElementsByClassName('priceDur')[0].innerHTML = "Year"
                document.getElementsByClassName('priceDur')[1].innerHTML = "Year"
                document.getElementsByClassName('priceDur')[2].innerHTML = "Year"
                document.getElementsByClassName('priceDur')[3].innerHTML = "Year"
                if (monthly.classList.contains('btn-active')) {
                    monthly.classList.remove('btn-active');
                    yearly.classList.add('btn-active');
                }
                else {
                  console.log("something isn't right with Pricing")
                }
            });
            monthly.addEventListener('click', () => {
                document.getElementsByClassName('priceNum')[0].innerHTML = "$9.55";
                document.getElementsByClassName('priceNum')[1].innerHTML = "$19.95";
                document.getElementsByClassName('priceNum')[2].innerHTML = "$29.95";
                document.getElementsByClassName('priceNum')[3].innerHTML = "$49.95";
                document.getElementsByClassName('priceDur')[0].innerHTML = "month"
                document.getElementsByClassName('priceDur')[1].innerHTML = "month"
                document.getElementsByClassName('priceDur')[2].innerHTML = "month"
                document.getElementsByClassName('priceDur')[3].innerHTML = "month"
                if (yearly.classList.contains('btn-active')) {
                    yearly.classList.remove('btn-active');
                    monthly.classList.add('btn-active');
                }
                else {
                  console.log("something isn't right with Pricing")
                }
            });
            /* wow initialization */
            new WOW().init()
          
 
