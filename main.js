const liNavEmail = document.querySelector('li.navbar-email');
let divDesktopMenu = document.querySelector('.desktop-menu');

liNavEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {

  divDesktopMenu.classList.toggle('inactive');
}