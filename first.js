$(function(){

  $('.news_list').slick({

    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 3000,

    arrows: false,
    dots: false,

    fade: true,

    speed: 700,

    infinite: true,

    pauseOnHover: false

  });

});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  document.querySelectorAll('.parallax').forEach(el => {
    const speed = parseInt(el.dataset.y);

    el.style.transform =
      `translateY(${scrollY * speed / 1000}px)`;
  });
});

window.addEventListener('scroll', () => {

  const people = document.querySelector('.people_right');

  if (!people) return;

  const rect = people.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.8) {
    document.querySelector('.deco05').classList.add('show');
    document.querySelector('.deco06').classList.add('show');
  }

});

$(function(){

  $('.interview-slider').slick({
    slidesToShow: 3.78,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 3000,

    arrows: false,
    dots: true,

    infinite: true,
    speed: 600,

    pauseOnHover: false,
    accessibility: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

});

$('.slides').slick({
  arrows:false,
  dots:false,
  autoplay:true,
  autoplaySpeed:4000,
  fade:true,
  speed:1000,
  pauseOnHover:false
});;

const slide = document.querySelector('.slide-area');
const interview = document.querySelector('.interview-area');

window.addEventListener('scroll', () => {

  const end =
    interview.offsetTop +
    interview.offsetHeight -
    slide.offsetHeight -
    145;

  if (window.scrollY >= end) {

    slide.style.position = 'absolute';
    slide.style.top =
      (interview.offsetHeight - slide.offsetHeight) + 'px';

  } else {

    slide.style.position = 'fixed';
    slide.style.top = '145px';

  }

});