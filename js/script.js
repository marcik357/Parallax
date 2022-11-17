let header = document.querySelector('#header');
let page = document.querySelector('.page');
let nav = document.querySelector('.nav');
let logo = document.querySelector('.logo');


page.addEventListener('scroll', () =>{
    if (page.scrollTop !== 0) {
        header.classList.add('scroll-down');
    } else {
        header.classList.remove('scroll-down');
    }
})

nav.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link')) {   
        e.preventDefault();
        scrollToId(e.target.hash)
    }
})

logo.addEventListener('click', (e) => {
        e.preventDefault();
        page.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
})

function scrollToId(id) {
    let target = document.querySelector(id);

    if (target) {
        page.scrollTo({
            top: Math.floor(page.scrollTop + target.getBoundingClientRect().top),
            behavior: 'smooth'
        })
    }
}