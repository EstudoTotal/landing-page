(() => {
  const C = window.BF_CONTENT;
  const qs = new URLSearchParams(location.search);

  // ---------- relógio ----------
  // Usa a hora do servidor (cabeçalho Date da resposta), não a do aparelho, para que um relógio
  // errado ou alterado não mude o lote exibido. Enquanto a resposta não chega, usa a hora local.
  // Teste local: ?agora=2026-11-10T23:59:50-03:00 simula o horário (só em localhost).
  const isLocal = ['localhost', '127.0.0.1'].includes(location.hostname);
  let offset = 0;
  const now = () => Date.now() + offset;
  if (isLocal && qs.get('agora')) {
    offset = Date.parse(qs.get('agora')) - Date.now();
  } else {
    fetch(location.pathname + '?t=' + Date.now(), { method: 'HEAD', cache: 'no-store' })
      .then(r => { const d = Date.parse(r.headers.get('Date')); if (d) { offset = d - Date.now(); tick(); } })
      .catch(() => {});
  }

  // ---------- etapas ----------
  // k = -2 esquenta · -1 live no ar (antes do lote especial abrir) · 0 lote especial · 1..3 lotes
  //     · 4 Lote 3 prorrogado (se houver prorrogação) · etapas.length encerrada
  const LIVE = Date.parse(C.live.inicio);
  const ESP_ABRE = Date.parse(C.especial.inicio);
  const P = C.prorrogacao;
  const ultimo = C.lotes[C.lotes.length - 1];
  const etapas = [{ ...C.especial, especial: true }, ...C.lotes];
  if (P) etapas.push({ ...ultimo, prorrogado: true, fim: P.fim, per: `Prorrogado até ${P.data}` });
  const etapaEm = t => {
    if (t < LIVE) return -2;
    if (t < ESP_ABRE) return -1;
    const i = etapas.findIndex(e => t < Date.parse(e.fim));
    return i < 0 ? etapas.length : i;
  };
  const quando = `${C.live.data} às ${C.live.hora}`;
  const fimBlack = P ? `${P.data} às ${P.hora}` : ultimo.per.split(' a ')[1];
  const nomeDe = e => e.especial ? 'Lote especial' : `Lote ${e.n}`;
  const temOferta = e => !!(e && e.preco && e.checkout);
  const desconto = e => Math.round((1 - Number(e.preco) / C.precoCheio) * 100);

  const brl = v => v.toFixed(2).replace('.', ',');
  const pad = n => String(n).padStart(2, '0');
  const partes = ms => ({
    d: pad(Math.floor(ms / 864e5)),
    h: pad(Math.floor(ms / 36e5) % 24),
    m: pad(Math.floor(ms / 6e4) % 60),
    s: pad(Math.floor(ms / 1e3) % 60)
  });

  // ---------- UTM ----------
  // Preserva os parâmetros de campanha no link do checkout (Hotmart), já que ele fica em domínio externo.
  // fbclid vai junto para o pixel da Hotmart atribuir a compra ao anúncio (cookie _fbc não cruza domínios).
  const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid'];
  const utm = {};
  UTM_KEYS.forEach(k => { if (qs.has(k)) utm[k] = qs.get(k); });
  if (Object.keys(utm).length) {
    sessionStorage.setItem('utm_params', JSON.stringify(utm));
  } else {
    const stored = sessionStorage.getItem('utm_params');
    if (stored) Object.assign(utm, JSON.parse(stored));
    else { utm.utm_source = 'et-black'; utm.utm_medium = 'referral'; }
  }
  const comUtm = url => url + (url.includes('?') ? '&' : '?') + new URLSearchParams(utm).toString();

  // ---------- estado de cada etapa ----------
  const estado = k => {
    const espera = k < 0;
    const aoVivo = k === -1;
    const encerrada = k >= etapas.length;
    const atual = !espera && !encerrada ? etapas[k] : null;
    const especial = k === 0;
    const prorrogado = !!atual && !!atual.prorrogado;
    const seguinte = atual ? etapas[k + 1] : null;
    const prox = seguinte && !seguinte.prorrogado ? seguinte : null;   // a prorrogação não é anunciada antes
    const vendendo = temOferta(atual);
    const revelando = !!atual && !vendendo;   // lote começou, mas os dados ainda não foram publicados

    const f = {
      espera, vendendo,
      aberta: !espera,
      bonusAberto: vendendo,
      loteFechado: revelando || encerrada,
      aguardando: revelando,
      temCta: espera || vendendo,
      contando: espera || vendendo,
      espAtual: especial && vendendo,
      espFuturo: espera || (especial && revelando),
      espPassado: k > 0
    };

    // vídeo da live em todas as fases (antes dela o player do YouTube mostra a contagem); o do método é só reserva
    const live = !!C.videoLive;
    const t = {
      precoCheio: String(C.precoCheio),
      eyebrow: espera ? `Live de lançamento · ${quando}` : especial ? 'Lote especial · só 24 horas'
        : prorrogado ? `Black Friday prorrogada até ${P.data}`
        : atual ? `Lote ${atual.n} de 3 · ${atual.per}` : 'Black Friday · encerrada',
      liveTag: aoVivo ? 'Live de lançamento · no ar agora' : `Live de lançamento · ${quando}`,
      espAbre: `Abre durante a live, em ${C.live.data} às ${C.especial.hora}, e vai até ${C.especial.per.split(' a ')[1]}.`,
      suporteTxt: k === -2 ? 'Fórum para tirar suas dúvidas sobre o método.' : 'Fórum + Grupo de WhatsApp para tirar suas dúvidas sobre o método.',
      bonusRevela: `Revelados na live de lançamento, em ${quando}.`,
      headerCta: espera ? 'Entrar no grupo' : 'Garantir desconto',
      barCta: espera ? 'Entrar no grupo' : 'Garantir →',
      videoId: live ? C.videoLive : C.videoMetodo,
      videoTitulo: !live ? 'Entender como funciona' : aoVivo ? 'A live está no ar' : espera ? 'Live de lançamento da Black Friday'
        : especial ? 'Assista à live de lançamento' : 'Assista ao replay da live',
      videoSub: !live ? 'Assista ao vídeo para entender a lógica do Estudo Total!'
        : aoVivo ? 'Assista agora à live de lançamento da Black Friday.'
        : espera ? `${quando}, ao vivo no YouTube.`
        : especial ? 'A live de lançamento da Black Friday, ao vivo e depois na íntegra.' : 'A live de lançamento da Black Friday, na íntegra.',
      faq1Q: espera ? 'Quando a oferta será revelada?' : 'Até quando vale a oferta?',
      faq1A: espera
        ? `Na live de lançamento, em ${quando}. O lote especial abre às ${C.especial.hora}, durante a live, e o link é enviado no grupo do WhatsApp.`
        : encerrada ? `A Black Friday terminou em ${fimBlack}, no horário de Brasília.`
        : prorrogado
          ? `A Black Friday foi prorrogada até ${fimBlack}, no horário de Brasília, nas condições do Lote 3.`
          : `A Black Friday vai até ${ultimo.per.split(' a ')[1]}, em três lotes. Cada lote vira às 20h do último dia, no horário de Brasília.`
    };

    if (espera) {
      Object.assign(t, {
        stripLabel: aoVivo ? 'Live de lançamento no ar · o lote especial abre em' : 'Live de lançamento da Black Friday começa em',
        cdLabel: aoVivo ? 'O lote especial abre em' : 'A live começa em',
        heroReveal: aoVivo ? `A live está no ar! O lote especial abre às ${C.especial.hora}.` : `A oferta será revelada na live de lançamento, em ${C.live.data}.`,
        ctaFinal: 'Entrar no grupo do WhatsApp →',
        ctaFinalLinha: aoVivo ? `O lote especial abre às ${C.especial.hora}, durante a live.` : `A oferta será revelada na live de lançamento, em ${quando}.`,
        barTop: aoVivo ? 'Live no ar agora' : `Live ${C.live.data} · ${C.live.hora}`
      });
    } else if (vendendo) {
      const meses = C.mesesCheio + atual.bonusMeses;
      const mes = Number(atual.preco) / meses;
      const mesBase = C.precoCheio / C.mesesCheio;
      const pct = `${desconto(atual)}% OFF`;
      const cta = especial ? 'Garantir o lote especial →' : `Garantir o Lote ${atual.n} →`;
      const bonus = `+${atual.bonusMeses} ${atual.bonusMeses === 1 ? 'mês' : 'meses'}`;
      Object.assign(t, {
        stripLabel: especial ? 'Lote especial de 24 horas · termina em'
          : prorrogado ? 'Black Friday prorrogada · termina em'
          : prox ? `Black Friday · virada para o Lote ${prox.n} em` : 'Black Friday · último lote · termina em',
        cdLabel: especial ? 'O lote especial termina em'
          : prorrogado ? `Prorrogada até ${P.data} às ${P.hora}`
          : prox ? `Virada para o Lote ${prox.n} em ${prox.virada}` : 'A Black Friday termina em',
        loteTag: especial ? 'Lote especial · 24h' : prorrogado ? `Lote ${atual.n} · prorrogado` : `Lote ${atual.n} de 3`,
        lotePer: prorrogado ? `até ${P.data} às ${P.hora}` : atual.per,
        precoTxt: `R$ ${atual.preco}`,
        parcTxt: `ou 12x de R$ ${atual.parcela}`,
        pctTxt: pct,
        mesTxt: `R$ ${brl(mes)} por mês`,
        mesPct: `${Math.round((1 - mes / mesBase) * 100)}% a menos`,
        mesSub: `por mês de acesso (antes R$ ${brl(mesBase)})`,
        acessoTotal: `${meses} meses de acesso`,
        acessoDet: `(12 meses + ${bonus.slice(1)} de bônus Black Friday)`,
        bonusCurto: `${bonus} de acesso`,
        bonusMesesTit: `${bonus} de acesso`,
        bonusMesesTxt: `Acesso às aulas e aos materiais por ${meses} meses após a inscrição, em vez de 12, incluindo todas as atualizações do conteúdo.`,
        ctaOferta: cta,
        ctaFinal: cta,
        ctaFinalLinha: `De R$ ${C.precoCheio} por R$ ${atual.preco} ou 12x de R$ ${atual.parcela}`,
        barTop: `R$ ${atual.preco} · ${pct}`
      });
    } else {
      const nome = atual ? nomeDe(atual) : '';
      Object.assign(t, {
        stripLabel: atual ? `${nome} · abre em instantes` : 'A Black Friday do Estudo Total terminou',
        heroReveal: atual ? `${nome} abre em instantes.` : 'A Black Friday terminou.',
        fechadoTag: atual ? nome : 'Black Friday · encerrada',
        fechadoTitulo: atual ? `${nome} abre em instantes` : 'A Black Friday terminou',
        fechadoTexto: atual ? 'Atualize a página em alguns minutos para ver as condições.' : `As condições da Black Friday foram até ${fimBlack}. Obrigado por acompanhar!`,
        barTop: atual ? `${nome} em instantes` : 'Black Friday encerrada',
        barSub: atual ? 'Atualize em alguns minutos' : 'Obrigado por acompanhar!'
      });
      t.ctaFinalLinha = t.fechadoTexto;
    }

    // número do lote em andamento (0 antes do Lote 1, 4 depois do fim) para os cards
    const loteNum = encerrada ? C.lotes.length + 1 : atual && !especial ? atual.n : 0;
    return { f, t, k, atual, prox, loteNum, ctaHref: espera ? C.whatsapp : vendendo ? comUtm(atual.checkout) : '#' };
  };

  // ---------- cards dos lotes ----------
  const cardLote = (l, s) => {
    if (l.n === s.loteNum && s.f.vendendo) return `
      <div class="lote lote-now">
        <div class="lote-head"><b>Lote ${l.n}</b><span class="pill-black">Agora</span></div>
        <div class="lote-per">${s.atual.per}</div>
        <div class="lote-price">R$ ${l.preco}</div>
        <div class="lote-parc">ou 12x de R$ ${l.parcela}</div>
        <a class="btn-lote" href="${s.ctaHref}" target="_blank" rel="noopener">Garantir o Lote ${l.n} →</a>
      </div>`;
    if (l.n < s.loteNum) return `
      <div class="lote lote-done">
        <div class="lote-head"><b>Lote ${l.n}</b></div>
        <div class="lote-per">${l.per}</div>
        <div class="lote-closed">Encerrado</div>
      </div>`;
    return `
      <div class="lote lote-soon">
        <div class="lote-head"><b>Lote ${l.n}</b><span class="lote-badge">Em breve</span></div>
        <div class="lote-per">${l.per}</div>
        <div class="lock lock-56"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></div>
        <div class="lote-open">${l.abre}</div>
      </div>`;
  };

  // ---------- render ----------
  const thumb = document.getElementById('videoThumb');
  let s = null;
  const render = k => {
    s = estado(k);
    const { f, t } = s;
    document.querySelectorAll('[data-if]').forEach(el => {
      const key = el.dataset.if;
      el.hidden = key.startsWith('!') ? !!f[key.slice(1)] : !f[key];
    });
    document.querySelectorAll('[data-bf]').forEach(el => {
      const key = el.dataset.bf;
      if (key in t) el.textContent = t[key];
    });
    document.querySelectorAll('[data-cta]').forEach(a => { a.href = s.ctaHref; });
    document.getElementById('lotes').innerHTML = C.lotes.map(l => cardLote(l, s)).join('');
    thumb.dataset.fallback = '';
    thumb.src = `https://i.ytimg.com/vi/${t.videoId}/maxresdefault.jpg`;
    if (f.aguardando) vigiarDeploy();
  };
  thumb.addEventListener('error', () => {
    if (thumb.dataset.fallback) return;
    thumb.dataset.fallback = '1';
    thumb.src = thumb.src.replace('maxresdefault.jpg', 'hqdefault.jpg');
  });

  // ---------- contagem e troca automática de etapa ----------
  const barSub = document.querySelector('[data-bf="barSub"]');
  function tick() {
    const agora = now();
    const k = etapaEm(agora);
    if (!s || k !== s.k) render(k);
    if (!s.f.contando) return;
    const fim = s.k === -2 ? LIVE : s.k === -1 ? ESP_ABRE : Date.parse(s.atual.fim);
    const p = partes(Math.max(0, fim - agora));
    document.querySelectorAll('[data-cd]').forEach(el => { el.textContent = p[el.dataset.cd]; });
    document.querySelectorAll('[data-cd-txt]').forEach(el => { el.textContent = `${p.d}d ${p.h}h ${p.m}m ${p.s}s`; });
    const rotulo = s.k === -2 ? 'Começa em' : s.k === -1 ? 'Lote especial abre em' : s.prox && s.k > 0 ? 'Virada em' : 'Termina em';
    barSub.textContent = `${rotulo} ${p.d}d ${p.h}h ${p.m}m`;
  }

  // Se um lote começou sem dados publicados, confere o content.js a cada 30s e recarrega quando mudar.
  let vigiando = false;
  function vigiarDeploy() {
    if (vigiando) return;
    vigiando = true;
    let original = null;
    const conferir = () => fetch('content.js?t=' + Date.now(), { cache: 'no-store' })
      .then(r => r.text())
      .then(src => { if (original === null) original = src; else if (src !== original) location.reload(); })
      .catch(() => {});
    conferir();
    setInterval(conferir, 30000);
  }

  tick();
  setInterval(tick, 1000);

  document.querySelectorAll('[data-reload]').forEach(b => b.addEventListener('click', () => location.reload()));

  // ---------- Meta Pixel ----------
  // Se o fbpixel.js expõe loadFacebookPixel (versão com consentimento de cookies), chama; senão ele já iniciou sozinho.
  if (typeof window.loadFacebookPixel === 'function') window.loadFacebookPixel();

  // CheckoutClick é evento personalizado (e não InitiateCheckout) porque a própria Hotmart já
  // dispara InitiateCheckout ao abrir o checkout. Entrada no grupo de esquenta conta como Lead.
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || !window.fbq) return;
    const lote = s.k === 0 ? 'especial' : s.atual && s.atual.prorrogado ? 'lote3-prorrogado' : `lote${s.k}`;
    if (a.href.includes('pay.hotmart.com')) fbq('trackCustom', 'CheckoutClick', { placement: 'black', lote });
    else if (a.href.includes('chat.whatsapp.com')) fbq('track', 'Lead', { content_name: 'grupo-whatsapp-black' });
  });

  // ---------- vídeo (modal) ----------
  const modal = document.getElementById('videoModal');
  const frame = document.getElementById('videoFrame');
  const abrirVideo = () => {
    const { videoId, videoTitulo } = s.t;
    if (window.fbq) fbq('trackCustom', 'WatchVideo', { placement: 'black', video: videoId === C.videoMetodo ? 'metodo' : 'live' });
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.title = videoTitulo;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    frame.replaceChildren(iframe);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };
  const fecharVideo = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    frame.replaceChildren();
  };
  document.getElementById('videoRow').addEventListener('click', abrirVideo);
  modal.addEventListener('click', e => { if (e.target === modal) fecharVideo(); });
  modal.querySelector('[data-modal-close]').addEventListener('click', fecharVideo);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) fecharVideo(); });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
