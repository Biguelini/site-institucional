document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slides img");
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  
  setInterval(nextSlide, 3000); // Altere 3000 para o intervalo desejado em milissegundos (3 segundos neste caso)
  
  showSlide(currentIndex);
});
