export function setupSequence(imageElement, textElement, sequences) {
    let currentIndex = 0;
  
    const updateSequence = () => {
      currentIndex = (currentIndex + 1) % sequences.length;
      const currentSequence = sequences[currentIndex];
      
      // Update image
      imageElement.src = currentSequence.src;
      imageElement.alt = currentSequence.alt;
      
      // Update text with fade effect
      textElement.style.opacity = '0';
      setTimeout(() => {
        imageElement.src = currentSequence.src;
        imageElement.alt = currentSequence.alt;
        imageElement.style.opacity = '1';
        imageElement.style.opacity = '1';
        textElement.textContent = currentSequence.text;
        textElement.style.opacity = '1';
      }, 250);
    };
  
    imageElement.addEventListener('click', updateSequence);
    
    // Set initial sequence
    imageElement.src = sequences[currentIndex].src;
    imageElement.alt = sequences[currentIndex].alt;
    textElement.textContent = sequences[currentIndex].text;
  }