const gallery = document.getElementById('gallery-grid');

const images = [
  { src: './images/1.jpg', alt: 'Dreamside app screenshot 1' },
  { src: './images/2.jpg', alt: 'Dreamside app screenshot 2' },
  { src: './images/3.jpg', alt: 'Dreamside app screenshot 3' },
  { src: './images/4.jpg', alt: 'Dreamside app screenshot 4' },
  { src: './images/5.jpg', alt: 'Dreamside app screenshot 5' },
  { src: './images/6.jpg', alt: 'Dreamside app screenshot 6' },
  { src: './images/7.jpg', alt: 'Dreamside app screenshot 7' },
  { src: './images/8.jpg', alt: 'Dreamside app screenshot 8' },
];

if (gallery && images.length > 0) {
  gallery.innerHTML = '';
  images.forEach((image) => {
    const card = document.createElement('figure');
    card.className = 'gallery-card';

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.loading = 'lazy';
    img.decoding = 'async';

    card.appendChild(img);
    gallery.appendChild(card);
  });
}

// Animated accordion
document.querySelectorAll('details').forEach(el => {
  const summary = el.querySelector('summary');
  const body = document.createElement('div');
  body.className = 'accordion-body';

  Array.from(el.children).forEach(child => {
    if (child !== summary) body.appendChild(child);
  });
  el.appendChild(body);

  summary.addEventListener('click', e => {
    e.preventDefault();
    if (el.open) {
      body.style.maxHeight = body.scrollHeight + 'px';
      requestAnimationFrame(() => requestAnimationFrame(() => body.style.maxHeight = '0'));
      body.addEventListener('transitionend', () => el.removeAttribute('open'), { once: true });
    } else {
      el.setAttribute('open', '');
      body.style.maxHeight = body.scrollHeight + 'px';
      body.addEventListener('transitionend', () => body.style.maxHeight = 'none', { once: true });
    }
  });
});

// Double space after sentence-ending periods
document.querySelectorAll('p, li').forEach(el => {
  el.innerHTML = el.innerHTML.replace(/([a-z])\. ([A-Z])/g, '$1.&nbsp; $2');
});
