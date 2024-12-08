export function setupSequence(imageElement, textElement, sequences) {
    let currentIndex = 0;
  
    const updateSequence = () => {
      currentIndex = (currentIndex + 1) % sequences.length;
      const currentSequence = sequences[currentIndex];
      
      // Update image
      imageElement.src = currentSequence.src;
      imageElement.alt = currentSequence.alt;
      textElement.textContent = currentSequence.text;
    };
  
    imageElement.addEventListener('click', updateSequence);
    
    // Set initial sequence
    imageElement.src = sequences[currentIndex].src;
    imageElement.alt = sequences[currentIndex].alt;
    textElement.textContent = sequences[currentIndex].text;
  }