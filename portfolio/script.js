let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = function () {
    let top = window.scrollY;

    sections.forEach(function(sec) {
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset - 150 && top < offset + height - 150) {  // Adjusted for better visibility
            navLinks.forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

menuIcon.onclick = function () {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}