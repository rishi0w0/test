import { IMAGES, MESSAGES, ANIMATION } from './constants.js';
import { preloadImages } from './imageLoader.js';

export async function setupImageToggle(imageElement, textElement) {
  let isGiftBox = true;

  // Preload images before setting up the toggle functionality
  try {
    await preloadImages([IMAGES.GIFT_BOX, IMAGES.FLOWERS]);
  } catch (error) {
    console.error('Failed to load images:', error);
    return;
  }

  function toggleImage() {
    imageElement.style.opacity = '0';
    textElement.style.opacity = '0';

    setTimeout(() => {
      if (isGiftBox) {
        imageElement.src = IMAGES.FLOWERS;
        textElement.textContent = MESSAGES.FLOWERS;
      } else {
        imageElement.src = IMAGES.GIFT_BOX;
        textElement.textContent = MESSAGES.GIFT;
      }
      
      imageElement.style.opacity = '1';
      textElement.style.opacity = '1';
      isGiftBox = !isGiftBox;
    }, ANIMATION.DURATION);
  }

  // Set initial state
  imageElement.src = IMAGES.GIFT_BOX;
  textElement.textContent = MESSAGES.GIFT;
  imageElement.addEventListener('click', toggleImage);
}