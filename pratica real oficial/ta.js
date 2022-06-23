let ul = document.querySelector('nav ul');
let menu = document.querySelector('.menu button');

function showMenu() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else {
        ul.classList.add('open');
    }
}