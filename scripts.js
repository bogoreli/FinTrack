let side_menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.topbar-center');

side_menu.onclick = () => {
    side_menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('open');
}