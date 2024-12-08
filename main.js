import { config } from './src/config/imageConfig.js';
import { setupSequence } from './src/js/sequenceManager.js';

const imageElement = document.getElementById('sequenceImage');
const textContainer = document.getElementById('textContainer');

// Apply text styles
textContainer.style.fontSize = config.text.fontSize;
textContainer.style.marginTop = config.text.marginTop;

// Setup sequence
setupSequence(imageElement, textContainer, config.images);