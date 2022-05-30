import { sayHello } from './sayHello';
import '../stylesheets/style.scss';

sayHello();

const d = document;

const openHamburger = d.querySelector('#js-open-hamburger-menu');
const hamburger = d.querySelector('#js-hamburger-menu');
const bodyFixed = d.querySelector('#js-pos-fixed');
const ratings = d.querySelector('#js-hamburger-hide');

export const hamburgerMenu = () => {
  hamburger.classList.toggle('hamburger--active');
  bodyFixed.classList.toggle('hamburger--pos-fixed');
  ratings.classList.toggle('hero__ratings--active');
};

openHamburger.addEventListener('click', hamburgerMenu);
