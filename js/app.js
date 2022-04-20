let menu = document.querySelector('#menu-btn');
let header = document.querySelector('#headerMain');
let hide = document.querySelector('.hide-menu')
// let specialTyped = document.querySelector('#special-typed');

hide.onclick = () => {
    header.classList.remove('active');
}

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

// Typed.js //
let typed = new Typed('.typed', {
    strings: ["Lifelong Learner...", "Front-End Developer...", "Solutions Creator..."],
    loop: true,
    typeSpeed: 80,  
    backSpeed: 50,
    backDelay: 2000
});

let specialTyped = new Typed('.special-typed', {
    strings: ["Nice to meet you!", "Let's build something amazing!"],
    loop: true,
    typeSpeed: 80,  
    backSpeed: 50,
    backDelay: 2000
});


// const typed = select('.typed')
// if (typed) {
//   let typed_strings = typed.getAttribute('data-typed-items')
//   typed_strings = typed_strings.split(',')
//   new Typed('.typed', {
//     strings: typed_strings,
//     loop: true,
//     typeSpeed: 100,
//     backSpeed: 50,
//     backDelay: 2000
//   });
// }