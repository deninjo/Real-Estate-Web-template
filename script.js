const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btnPopup = document.querySelector('.btnLogin-popup')
const iconClose = document.querySelector('.icon-close')

registerLink.addEventListener('click', ()=> {wrapper.classList.add('active')})
loginLink.addEventListener('click', ()=> {wrapper.classList.remove('active')})
btnPopup.addEventListener('click', ()=> {wrapper.classList.add('active-popup')})
iconClose.addEventListener('click', ()=> {wrapper.classList.remove('active-popup')})


$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });




  const urlParams = new URLSearchParams(window.location.search);
  const submitted = urlParams.get('submitted');
  if (submitted === 'true') {
    document.getElementById('message').textContent = 'Added to wishlist';
  }


/*property listing
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
*/
