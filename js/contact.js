const CONTACT_EMAIL = 'aidarous1143@gmail.com';

const initContactForm = () => {
  const form = document.querySelector('#contactForm');
  const note = document.querySelector('#contactFormNote');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      note.textContent = 'Please fill in every field before sending.';
      note.classList.add('contact__form__note--error');
      return;
    }

    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    note.classList.remove('contact__form__note--error');
    note.textContent = 'Opening your email client...';
  });
};

export default initContactForm;
