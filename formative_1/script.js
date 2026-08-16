const body = document.body;
const currentPage = body.dataset.page || "home";

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach((link) => {
  const href = link.getAttribute('href');
  const pageName = href ? href.replace('.html', '').replace('./', '').replace('/', '') : '';
  if (pageName === currentPage || (currentPage === 'home' && pageName === 'index')) {
    link.classList.add('active');
  }
});

const menuToggle = document.querySelector('.nav-toggle');
const navLinksMenu = document.querySelector('.nav-links');

if (menuToggle && navLinksMenu) {
  menuToggle.addEventListener('click', () => {
    navLinksMenu.classList.toggle('open');
  });
}

const enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!enquiryForm.checkValidity()) {
      enquiryForm.reportValidity();
      return;
    }

    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message');
    const formMessage = document.getElementById('form-message');

    if (message) {
      formMessage.textContent = `Thank you, ${name || 'friend'}! Your enquiry has been submitted successfully. Our team will contact you soon.`;
    }

    enquiryForm.reset();
  });
}

const yearText = document.getElementById('year');
if (yearText) {
  yearText.textContent = new Date().getFullYear();
}
