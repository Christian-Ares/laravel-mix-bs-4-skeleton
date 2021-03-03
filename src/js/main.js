import $ from "jquery";
import "popper.js";
import "bootstrap";
import Swiper from 'swiper';
import SwiperCore, { Navigation } from 'swiper/core'

SwiperCore.use([Navigation])

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  direction: 'horizontal',
  loop: true,
  allowSlideNext: true,
  allowSlidePrev: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});