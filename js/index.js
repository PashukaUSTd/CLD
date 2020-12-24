// window.addEventListener('DOMContentLoaded', function () {
$(document).ready(function () {   // событие .ready jquery аналог события DOMContentLoaded

  $('#burger').on('click', () => {
    $('#menu').toggleClass('is-active');
    $('#logo').addClass('move-logo');
    $('.header-menu').css('transition', '1s transform ease-in-out')
  });

  $('#cross').on('click', () => {
    $('#menu').removeClass('is-active');
    $('#logo').removeClass('move-logo');
    $('.header-menu').css('transition', '0.3s transform ease-in-out')

  });
  $(window).resize(() => {
    $('#menu').removeClass('is-active');
    $('#logo').removeClass('move-logo')
  });

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

  //переход по якорям
  $('nav a').on('click', function(event) {
    event.preventDefault(); //отменяем действие по умолчанию

    let href = $(this).attr('href');

    let headerHeight = $('header').height();

    let offset = $(href).offset().top - headerHeight;


    $('html, body').animate({
      scrollTop: offset,
    }, 700);
  });

  //подключаем кнопку ведущую в начало страницы
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.quicknav').fadeIn();
    } else {
      $('.quicknav').fadeOut();
    }
  });

  $('.quicknav').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 700);
    return false;
  });

  // tabs
  document.querySelectorAll('.our-job-btn').forEach(function (tabsBtn) {
    console.log(tabsBtn);
  });


  $(function () {
    $("#accordion").accordion({
      collapsible: true,
      heightStyle: "fill"
    });
  });
});
