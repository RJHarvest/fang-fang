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
    mobile: false
  });
  wow.init();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#gallery').parallax("100%", 0.3);
    $('#menu').parallax("100%", 0.2);
    $('#team').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);
    // $('#testimonial').parallax("100%", 0.1);

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
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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
    variableHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  // submit newsletter form
  $('#newsletter').submit(function(e){
      e.preventDefault();
      var $form = $(this);
      const email = $form.find("input[name='email']").val();

      if (email == '') {
        alert('Please enter a valid email address!');
      }else if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
      }else {
        $.ajax({
          type: 'POST',
          url: './scripts/subscribe.php',
          data: { email },
          success: () =>{
            alert('Thank you for subscribing to Fang Fang! Be sure to check out your email for any news and event updates.');
          },
          error: () =>{
            alert('Subscription failed! Please check your connection!');
          }
        });
      }
  });

  // submit message form
  $('#message').submit(function(e){
    e.preventDefault();
    var $form = $(this);
    const name = $form.find("input[name='name']").val();
    const email = $form.find("input[name='email']").val();
    const message = $form.find("textarea[name='message']").val();
    if (name == '' || email == '' || message == '') {
      alert('Please complete the form!');
    }else if (validateEmail(email)) {
      alert('Please enter a valid email address!');
    }else {
      $.ajax({
        type: 'POST',
        url: './scripts/sendMail.php',
        data: { name, email, message },
        success: () =>{
          alert('Your message has been sent to Fang Fang! Thank you for sending us your thoughts! We will get back to you soon!');
        },
        error: () =>{
          alert('Your message could not be not sent! Please try again!');
        }
      })
    }
  });

});
