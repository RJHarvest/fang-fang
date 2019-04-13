
// preloader
$(window).load(function(){
    $('.preloader').fadeOut(500); // set duration in brackets
});

/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: true
  });
  wow.init();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#gallery').parallax("100%", 0.3);
    $('#menu').parallax("100%", 0.2);
    $('#team').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);
    $('#testimonial').parallax("100%", 0.1);

  }
  initParallax();

  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });

  // NIVO LIGHTBOX
  $('.gallery a').nivoLightbox({
    effect: 'fadeScale',
  });
  $('.featured-dish a').nivoLightbox({
    effect: 'fadeScale',
  });

  $('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});

  // var scroll_start = 0;
  // var startchange = $('.featured-dish');
  // var offset = startchange.offset().top;
  // if (startchange.length){
  //   $(document).scroll(function() {
  //      scroll_start = $(this).scrollTop();
  //      if(scroll_start > offset) {
  //         console.log('success');
  //         $('.slideshow').slick({
  //           dots: true,
  //           infinite: true,
  //           speed: 300,
  //           slidesToShow: 3,
  //           slidesToScroll: 1,
  //           slidesToScroll: 1,
  //           autoplay: true,
  //           autoplaySpeed: 2000,
  //           responsive: [
  //             {
  //               breakpoint: 1024,
  //               settings: {
  //                 slidesToShow: 3,
  //                 slidesToScroll: 1,
  //                 infinite: true,
  //                 dots: true
  //               }
  //             },
  //             {
  //               breakpoint: 480,
  //               settings: {
  //                 slidesToShow: 1,
  //                 slidesToScroll: 1
  //               }
  //             }
  //           ]
  //         });
  //       }else if (scroll_start < offset) {
  //         $('.slideshow').slick({
  //           dots: true,
  //           infinite: true,
  //           speed: 300,
  //           slidesToShow: 3,
  //           slidesToScroll: 1,
  //           slidesToScroll: 1,
  //           autoplay: false,
  //           responsive: [
  //             {
  //               breakpoint: 1024,
  //               settings: {
  //                 slidesToShow: 3,
  //                 slidesToScroll: 1,
  //                 infinite: true,
  //                 dots: true
  //               }
  //             },
  //             {
  //               breakpoint: 480,
  //               settings: {
  //                 slidesToShow: 1,
  //                 slidesToScroll: 1
  //               }
  //             }
  //           ]
  //         });
  //       }
  //   });
  // }

  // slideshow featured dish
  $('.slideshow').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  // slideshow testimonial
  $('.slideshow-testimonial').slick({
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  // submit message form
  $('#message').submit(function(e){
    e.preventDefault();
    var $form = $(this);
    const name = $form.find("input[name='name']").val();
    const email = $form.find("input[name='email']").val();
    const message = $form.find("textarea[name='message']").val();

    $.ajax({
      type: 'POST',
      url: './scripts/sendMail.php',
      data: { name, email, message },
      success: () =>{
        alert('Your message has been sent! Thank you for your leaving a message!');
      },
      error: () =>{
        alert('Your message could not be not sent! Please try again!');
      }
    })
  });

});
