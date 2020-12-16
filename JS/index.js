const home = document.querySelector('.home');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');

home.addEventListener('click', (e) => {
  if (!home.classList.contains('active')) {
    home.classList.add('active');
  }

  if (about.classList.contains('active')) {
    about.classList.remove('active');
  }

  if (contact.classList.contains('active')) {
    contact.classList.remove('active');
  }
});

about.addEventListener('click', (e) => {
  if (!about.classList.contains('active')) {
    about.classList.add('active');
  }

  if (home.classList.contains('active')) {
    home.classList.remove('active');
  }

  if (contact.classList.contains('active')) {
    contact.classList.remove('active');
  }
});

contact.addEventListener('click', (e) => {
  if (!contact.classList.contains('active')) {
    contact.classList.add('active');
  }

  if (about.classList.contains('active')) {
    about.classList.remove('active');
  }

  if (home.classList.contains('active')) {
    home.classList.remove('active');
  }
});
