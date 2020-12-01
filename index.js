window.addEventListener('DOMContentLoaded', function () {

  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('#menu').classList.toggle('is-active') 
    document.querySelector('#logo').classList.add('move-logo')
  })
  document.querySelector('#cross').addEventListener('click', function(){ 
    document.querySelector('#menu').classList.remove('is-active')
    document.querySelector('#logo').classList.remove('move-logo')
    document.querySelector('.header-menu').style.transition = '1s transform ease-in-out'
  })

  var mySwiper = new Swiper('.swiper-container', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $(function () {
    $("#accordion").accordion({
      collapsible: true,
      heightStyle: "fill"
    });
  })
});
