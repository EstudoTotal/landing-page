// Preenche os textos a partir do content.js (se presente)
  if (window.SITE_CONTENT) {
    document.querySelectorAll('[data-content]').forEach(el => {
      const k = el.getAttribute('data-content');
      if (k in window.SITE_CONTENT) el.innerHTML = window.SITE_CONTENT[k];
    });
  }

  // ano dinâmico
  document.getElementById('year').textContent = new Date().getFullYear();

  // menu mobile
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

  // carrossel de depoimentos
  const track = document.getElementById('track');
  const dotsWrap = document.getElementById('dots');
  const cards = [...track.querySelectorAll('.quote')];
  const stepSize = () => cards[0] ? cards[0].offsetWidth + 24 : 400;
  cards.forEach((c, i) => {
    const d = document.createElement('button');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', 'Ir para depoimento ' + (i + 1));
    d.addEventListener('click', () => track.scrollTo({left: i * stepSize(), behavior: 'smooth'}));
    dotsWrap.appendChild(d);
  });
  const dots = [...dotsWrap.children];
  const setActive = () => {
    const idx = Math.min(Math.round(track.scrollLeft / stepSize()), dots.length - 1);
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  };
  track.addEventListener('scroll', () => window.requestAnimationFrame(setActive), {passive: true});
  document.getElementById('nextBtn').addEventListener('click', () => track.scrollBy({left: stepSize(), behavior: 'smooth'}));
  document.getElementById('prevBtn').addEventListener('click', () => track.scrollBy({left: -stepSize(), behavior: 'smooth'}));

  // modal de vídeo (lightbox)
  const videoModal = document.getElementById('videoModal');
  const watchBtn = document.getElementById('watchVideoBtn');
  if (videoModal && watchBtn) {
    const modalIframe = videoModal.querySelector('iframe');
    const heroSrc = document.querySelector('#metodo iframe').getAttribute('src');
    const autoplaySrc = heroSrc + (heroSrc.includes('?') ? '&' : '?') + 'autoplay=1';

    const openModal = (e) => {
      e.preventDefault();
      modalIframe.setAttribute('src', autoplaySrc);
      videoModal.classList.add('open');
      videoModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    };
    const closeModal = () => {
      videoModal.classList.remove('open');
      videoModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      modalIframe.setAttribute('src', '');
    };

    watchBtn.addEventListener('click', openModal);
    videoModal.querySelectorAll('[data-modal-close]').forEach(el => el.addEventListener('click', closeModal));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && videoModal.classList.contains('open')) closeModal(); });
  }

  // faq — accordion com animação suave ao abrir/fechar (mantém só uma pergunta aberta)
  class FaqAccordion {
    constructor(item, group) {
      this.item = item;
      this.group = group;
      this.summary = item.querySelector('summary');
      this.content = item.querySelector('.ans');
      this.animation = null;
      this.isClosing = false;
      this.isExpanding = false;
      this.summary.addEventListener('click', e => this.onClick(e));
    }
    onClick(e) {
      e.preventDefault();
      this.item.style.overflow = 'hidden';
      if (this.isClosing || !this.item.open) this.open();
      else if (this.isExpanding || this.item.open) this.shrink();
    }
    open() {
      this.group.forEach(other => { if (other !== this && other.item.open) other.shrink(); });
      this.item.style.height = this.item.offsetHeight + 'px';
      this.item.open = true;
      window.requestAnimationFrame(() => this.expand());
    }
    shrink() {
      this.isClosing = true;
      const startHeight = this.item.offsetHeight + 'px';
      const endHeight = this.summary.offsetHeight + 'px';
      if (this.animation) this.animation.cancel();
      this.animation = this.item.animate({height: [startHeight, endHeight]}, {duration: 280, easing: 'ease-out'});
      this.animation.onfinish = () => this.onFinish(false);
      this.animation.oncancel = () => { this.isClosing = false; };
    }
    expand() {
      this.isExpanding = true;
      const startHeight = this.item.offsetHeight + 'px';
      const endHeight = (this.summary.offsetHeight + this.content.offsetHeight) + 'px';
      if (this.animation) this.animation.cancel();
      this.animation = this.item.animate({height: [startHeight, endHeight]}, {duration: 280, easing: 'ease-out'});
      this.animation.onfinish = () => this.onFinish(true);
      this.animation.oncancel = () => { this.isExpanding = false; };
    }
    onFinish(open) {
      this.item.open = open;
      this.animation = null;
      this.isClosing = false;
      this.isExpanding = false;
      this.item.style.height = this.item.style.overflow = '';
    }
  }
  const faqGroup = [];
  document.querySelectorAll('.faq-item').forEach(item => faqGroup.push(new FaqAccordion(item, faqGroup)));

  // reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.12});
  document.querySelectorAll('[data-reveal]').forEach((el,i) => {
    el.style.transitionDelay = (i % 3) * 0.08 + 's';
    io.observe(el);
  });
