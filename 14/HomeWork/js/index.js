window.addEventListener('DOMContentLoaded', function () {
  $('#burger').on('click', () => {
    $('#menu').toggleClass('is-active');
    $('#logo').addClass('move-logo');
    $('.header-menu').css('transition', '1s transform ease-in-out')
  })

  $('#cross').on('click', () => {
    $('#menu').removeClass('is-active');
    $('#logo').removeClass('move-logo');
    $('.header-menu').css('transition', '0.3s transform ease-in-out')
    
  })
    $(window).resize(() => {
    $('#menu').removeClass('is-active');
    $('#logo').removeClass('move-logo')
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
