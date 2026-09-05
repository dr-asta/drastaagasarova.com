const iconPaths = [
  '<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/></svg>',
  '<svg viewBox="0 0 24 24"><path d="M21 11.6a8.8 8.8 0 0 1-13.05 7.7L3 21l1.64-4.78A8.8 8.8 0 1 1 21 11.6z"/><path d="M8.3 7.5c.6 4.2 4 7.6 8.2 8.2l1.2-1.5-2.8-1.3-.9 1a8.7 8.7 0 0 1-3.9-3.9l1-.9-1.3-2.8z"/></svg>',
  '<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  '<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>'
];

document.querySelectorAll('.contact-icon').forEach((element, index) => {
  element.innerHTML = iconPaths[index];

  if (index === 1) {
    element.classList.add('whatsapp-icon');
  }
});

document
  .querySelectorAll(
    'a[href="https://www.phorest.com/salon/drastaagasarova"], a[href="https://wa.me/353851239437"]'
  )
  .forEach((link) => {
    link.removeAttribute('target');
    link.removeAttribute('rel');
  });

const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  links.style.display = open ? 'none' : 'flex';

  if (!open) {
    Object.assign(links.style, {
      position: 'absolute',
      top: '70px',
      left: '0',
      right: '0',
      padding: '24px',
      background: '#fffdf9',
      flexDirection: 'column',
      borderBottom: '1px solid #d8d0c4'
    });
  }
});
