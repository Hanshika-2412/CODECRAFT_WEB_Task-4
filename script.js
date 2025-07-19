// Select the <nav> element
const nav = document.querySelector("nav");

// Add scroll event
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");  // Add class to change background
  } else {
    nav.classList.remove("scrolled");  // Remove class when at top
  }
});

// Contact form submit handler
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = form.elements[0].value;
  const email = form.elements[1].value;
  const message = form.elements[2].value;

  // Display confirmation or simulate submission
  alert(`Thank you, ${name}! Your message has been received.`);

  // Optionally clear the form
  form.reset();
});
