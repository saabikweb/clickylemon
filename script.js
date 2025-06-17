// Contact form handler
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
    form.reset();
  });
}

// FAQ accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.parentElement;
    item.classList.toggle('active');
  });
});

// Category filter (placeholder, no real filtering since all are placeholders)
const categoryButtons = document.querySelectorAll('.categories button');
categoryButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    categoryButtons.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    // Filtering logic would go here if real images/categories were used
  });
});
