let currentIndex = 0;  // Start at the first image

const images = document.querySelectorAll('.image-slider img');
const totalImages = images.length;

// Initially, show only the first image
images[currentIndex].classList.add('active');

function slideLeft() {
  // Hide current image
  images[currentIndex].classList.remove('active');
  
  // Move to the previous image
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalImages - 1;  // Loop to the last image
  }

  // Show the new image
  images[currentIndex].classList.add('active');
}

function slideRight() {
  // Hide current image
  images[currentIndex].classList.remove('active');
  
  // Move to the next image
  if (currentIndex < totalImages - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;  // Loop to the first image
  }

  // Show the new image
  images[currentIndex].classList.add('active');
}
