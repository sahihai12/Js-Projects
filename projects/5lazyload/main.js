'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



// create or delete  elements 
// console.log(document.documentElement);

// const all =  document.querySelectorAll('.nav__link');
// console.log(all);

// const newall =  document.getElementsByClassName('nav__link');
// console.log(newall);

const header = document.querySelector('header');


const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'Minima distinctio laborum beatae ea earum deleniti odit, enim quibusdam molestias quo. <button class="cokkie-btn">Got It</button>';

header.prepend(message);

document.querySelector('.cokkie-btn').addEventListener('click', () => {
  // console.log(message.parentElement.removeChild(message));
  // 2nd way to do 
  message.remove();
});


// get styles 

// console.log(message.style.transition);

// console.log(getComputedStyle(message).color);

// smoth scrolling 

const btn__scrool = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btn__scrool.addEventListener('click', function (e) {
  console.log(e);
  const scrool1 = section1.getBoundingClientRect();
  // console.log(section1);
  console.log(scrool1);

  window.scrollTo(scrool1.left, scrool1.y + window.pageYOffset);
  // section1.scrollIntoView();

});

// Event handler's

const section__header = document.querySelector('.section__header');

section__header.addEventListener('mouseenter', () => {
  console.log('ok');
})


// randint 

const randInt = (min, max) => {
  Math.floor(Math.random(max - min + 1));
}

// console.log(randInt(0, 255));



// random functions

const myrandfunc = () => {
  console.log('int');
  let next = 3251;
  next = ((next * next) / 100) % 10000;
  return next;
}


const allLinks = document.querySelectorAll('.nav__link');

allLinks.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    let attr = element.getAttribute('href');
    document.querySelector(`${attr}`).scrollIntoView();
  });
});

// dom traverse exercise 
// Traversing downwards
// element.querySelector
// element.querySelectorAll
// element.children
// Traversing upwards
// element.parentElement
// element.closest
// Traversing sideways
// element.nextElementSibling
// element.previousElementSibling
// Combine parentElement, children, and index


const data_tabs = document.querySelectorAll('[data-tab]');
const tabBtn = document.querySelectorAll('.operations__tab');
const tabcontent = document.querySelectorAll('.operations__content');

data_tabs.forEach(tabs => {
  tabs.addEventListener('click', () => {
    tabBtn.forEach(t => t.classList.remove('operations__tab--active'));
    tabs.classList.add('operations__tab--active');

    // active  content
    tabcontent.forEach(c => c.classList.remove('operations__content--active'));

    // get tab 
    // console.log(tabs.dataset);
    // console.log(`operations__content--${tabs.getAttribute('data-tab')}`);
    const tabc = document.querySelector(`.operations__content--${tabs.getAttribute('data-tab')}`);
    tabc.classList.add('operations__content--active');
  });


});


// sticky navbar

// get initialcord

const getInitial = document.querySelector('header nav').getBoundingClientRect();
// console.log(getInitial);
document.addEventListener('scroll', () => {
  if (window.scrollY > getInitial.top) {
    document.querySelector('header nav').classList.add('stcky')
  } else {
    document.querySelector('header nav').classList.remove('stcky')
  }
});


// make a slider 

const slider = document.querySelector('.slider'),
  slide = document.querySelectorAll('.slider .slide'),
  sliderLeft = document.querySelector('.slider__btn--left'),
  sliderRight = document.querySelector('.slider__btn--right');

let i = 0;

const nextslide = (slid) => {
  // console.log(slid);
}

slide.forEach(slid => {
  // console.log(`translateX(${i}00%)`);
  // console.log(slid);
  slid.style.transform = `translateX(${i}00%)`;
  i++;

  sliderRight.addEventListener('click', nextslide(slid));
});



// intersection onserver

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     console.log(entry);
//     entry.target.classList.toggle('show' , !entry.isIntersecting );
//     if (entry.isIntersecting) observer.unobserve(entry.target);
//   })
// },{
//   threshold: 0.2,
// });

// const sections = document.querySelectorAll('.section');

// sections.forEach(section => {
//   observer.observe(section);
//   // console.log(section);
// });



// advanced dom
// createelement
const newEle = document.createElement('div');

newEle.innerHTML = 'lorem heading <button>Button</button>';

header.append(newEle);

// setattribute 

newEle.setAttribute('data-new' , '2');


console.log(newEle.dataset);

// textContent
console.log(newEle.innerText);
console.log(newEle.innerHTML);
console.log(newEle.textContent);