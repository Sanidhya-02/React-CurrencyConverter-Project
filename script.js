document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const recommendationForm = document.getElementById('recommendation-form');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
    
    recommendationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        
        // Add new recommendation
        const recommendationsContainer = document.querySelector('.recommendations-container');
        const newRecommendation = document.createElement('div');
        newRecommendation.className = 'recommendation';
        newRecommendation.innerHTML = `
            <p>"${message}"</p>
            <p>- ${name}</p>
        `;
        
        recommendationsContainer.appendChild(newRecommendation);
        
        // Show popup
        popup.style.display = 'flex';
        
        // Reset form
        recommendationForm.reset();
    });
    
    // Close popup
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });
    
    // Close popup when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});