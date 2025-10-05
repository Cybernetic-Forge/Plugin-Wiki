/**
 * Tab functionality for Plugin-Wiki
 * Handles switching between tab content panels
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all tab containers
  const tabContainers = document.querySelectorAll('.tab-container');
  
  tabContainers.forEach(container => {
    const buttons = container.querySelectorAll('.tab-button');
    const contents = container.querySelectorAll('.tab-content');
    
    // Set first tab as active by default
    if (buttons.length > 0 && contents.length > 0) {
      buttons[0].classList.add('active');
      contents[0].classList.add('active');
    }
    
    // Add click handlers to buttons
    buttons.forEach((button, index) => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons and contents
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        if (contents[index]) {
          contents[index].classList.add('active');
        }
      });
    });
  });
});
