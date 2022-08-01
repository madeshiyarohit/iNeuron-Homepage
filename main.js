$(document).ready(function () {
  $(window).scroll(function () {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 150) {
      $('.header').addClass('sticky-navbar');
    } else {
      $('.header').removeClass('sticky-navbar');
    }
  });
  $('.main-box').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //   Course

  $('.programs').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //   Teacher Section
  $('.mainTeacherBox').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //   Hack companies
  $('.hack-comp-name').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //   $('.what-you-will-learn li#affordable').click(function () {
  //     $('.program-box').css({ display: 'none' });
  //     $('div#affordable').css({ display: 'block!important' });
  //   });

  //   $('#live').click(function () {
  //     $('.program-box').css({ display: 'none' });
  //     $('.programs #live').css({ display: 'block!important' });
  //   });

  //   $('#community').click(function () {
  //     $('.program-box').css({ display: 'none' });
  //     $('.programs #community').css({ display: 'block!important' });
  //   });

  //   $('#neuron').click(function () {
  //     $('.program-box').css({ display: 'none' });
  //     $('.programs #neuron').css({ display: 'block!important' });
  //   });

  //   $('#test').click(function () {
  //     $('.program-box').css({ display: 'none' });
  //     $('.programs #test').css({ display: 'block!important' });
  //   });
});
