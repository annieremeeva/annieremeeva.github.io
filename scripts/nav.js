function showMenu() {
  const navigation = document.querySelector('.dropdown-item');
  if (navigation.classList.contains('responsive')) {
    navigation.classList.remove('responsive');
  } else {
    navigation.classList.add('resposive');
  }
}

const menuIcon = document.querySelector('.js-menu-icon');

menuIcon.addEventListener('click', showMenu);