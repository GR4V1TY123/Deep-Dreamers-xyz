document.addEventListener("DOMContentLoaded", () => {
  // General Carousel Logic
  const carousel = document.querySelector(".carousel");
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let autoplayInterval;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    resetAutoplay();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(nextSlide, 3000);
  }

  resetAutoplay();
  carousel.addEventListener("mouseenter", () => clearInterval(autoplayInterval));
  carousel.addEventListener("mouseleave", resetAutoplay);

  // Sports Section Carousel
  const sportsContainer = document.getElementById("sportsContainer");
  const nextButton = document.getElementById("nextSport");
  let sportsPosition = 0;
  const cardWidth = document.querySelector("#sportsContainer > div").offsetWidth;
  const totalSports = 9;
  const visibleSports = 3;

  nextButton.addEventListener("click", () => {
    sportsPosition = (sportsPosition < totalSports - visibleSports) ? sportsPosition + 1 : 0;
    sportsContainer.style.transform = `translateX(-${sportsPosition * cardWidth}px)`;
  });

  // Main Carousel with Pagination
  const mainCarousel = document.getElementById("carousel-container");
  const paginationContainer = document.getElementById("pagination-dots");
  let mainPosition = 0;
  const slideWidth = 33.333;
  const totalMainSlides = 6;
  const visibleMainSlides = 3;
  const maxMainPosition = totalMainSlides - visibleMainSlides;

  function createPaginationDots() {
    paginationContainer.innerHTML = "";
    for (let i = 0; i <= maxMainPosition; i++) {
      const dot = document.createElement("button");
      dot.className = `w-3 h-3 rounded-full transition-colors duration-300 ${i === mainPosition ? "bg-primary" : "bg-gray-300"}`;
      dot.onclick = () => goToMainSlide(i);
      paginationContainer.appendChild(dot);
    }
  }

  function updatePaginationDots() {
    [...paginationContainer.children].forEach((dot, i) => {
      dot.className = `w-3 h-3 rounded-full transition-colors duration-300 ${i === mainPosition ? "bg-primary" : "bg-gray-300"}`;
    });
  }

  function goToMainSlide(position) {
    mainPosition = position;
    updateMainCarousel();
  }

  function updateMainCarousel() {
    mainCarousel.style.transform = `translateX(-${mainPosition * slideWidth}%)`;
    updatePaginationDots();
  }

  function slideMainCarousel(direction) {
    if (direction === "left") {
      mainPosition = mainPosition > 0 ? mainPosition - 1 : maxMainPosition;
    } else {
      mainPosition = mainPosition < maxMainPosition ? mainPosition + 1 : 0;
    }
    updateMainCarousel();
  }

  createPaginationDots();

  // Optimize Video Interactions
  document.querySelectorAll("video").forEach((video) => {
    video.addEventListener("mouseenter", () => video.setAttribute("controls", "true"));
    video.addEventListener("mouseleave", () => video.removeAttribute("controls"));
  });
});
