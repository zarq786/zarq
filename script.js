const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;

prevBtn.addEventListener('click', () => {
  slideIndex--;
  showSlide();
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  showSlide();
});

function showSlide() {
  const slides = document.querySelectorAll('.slider img');

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

showSlide();

