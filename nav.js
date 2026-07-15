/* nav.js — injects shared nav and footer, sets active link */
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const pages = [
    { href: 'index.html',       label: 'Home' },
    { href: 'news-events.html', label: 'News & Events' },
    { href: 'executive.html',   label: 'Executive' },
    { href: 'facilities.html',  label: 'Facilities' },
    { href: 'nature-trail.html',label: 'Nature Trail' },
    { href: 'photo-archive.html',label:'Photo Archive' },
    { href: 'contact.html',     label: 'Contact' },
  ];

  const navHTML = `
  <nav>
    <a href="index.html" class="nav-brand">
      <img class="nav-logo-img" src="NBCC_logo.png" alt="NCC Logo" />
      <div class="nav-brand-text">Nauwigewauk<small>Community Club Inc.</small></div>
    </a>
    <ul class="nav-links" id="navLinks">
      ${pages.map(p => `<li><a href="${p.href}" class="${path===p.href?'active':''}">${p.label}</a></li>`).join('')}
    </ul>
    <button class="nav-toggle" onclick="document.getElementById('navLinks').classList.toggle('open')">
      <span></span><span></span><span></span>
    </button>
  </nav>`;

  const footerHTML = `
  <div class="contact-strip">
    <div class="contact-inner">
      <div>
        <h2>Be Part of the <em>Community</em></h2>
        <p>Whether a longtime resident or new to the area — everyone is welcome.</p>
      </div>
      <a href="contact.html" class="btn btn-navy">Get In Touch</a>
    </div>
  </div>
  <footer>
    <img src="NBCC_logo.png" alt="NCC" />
    <div class="footer-text">© 2024 Nauwigewauk Community Club Inc. · Route 100, Southern New Brunswick, Canada</div>
    <div class="footer-links">
      <a href="contact.html">Contact</a>
      <a href="facilities.html">Facilities</a>
      <a href="nature-trail.html">Nature Trail</a>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 90);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
