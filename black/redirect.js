// QR Code: et.nazlisetton.com.br/black → checkout da Hotmart do lote em vigor.
// Antes do lote especial abrir, já aponta para o link dele. Depois do fim da Black (incluindo a prorrogação),
// manda para a página principal. Os links e as datas vêm do mesmo content.js da página.
(function () {
  var C = window.BF_CONTENT;
  var params = new URLSearchParams(location.search);
  var agora = Date.now();
  // teste local: ?agora=2026-11-15T10:00:00-03:00 (só em localhost)
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname) && params.get('agora')) agora = Date.parse(params.get('agora'));
  params.delete('agora');
  var ultimo = C.lotes[C.lotes.length - 1];
  var etapas = [C.especial].concat(C.lotes);
  if (C.prorrogacao) etapas.push({ n: ultimo.n, checkout: ultimo.checkout, fim: C.prorrogacao.fim, prorrogado: true });

  var alvo = null;
  for (var i = 0; i < etapas.length; i++) {
    if (agora < Date.parse(etapas[i].fim)) { alvo = etapas[i]; break; }
  }

  // UTMs do QR Code (se o próprio link do QR trouxer UTMs, elas valem no lugar destas)
  if (!params.has('utm_source')) {
    params.set('utm_source', 'qrcode');
    params.set('utm_medium', 'offline');
    params.set('utm_campaign', 'black-friday');
  }

  var url = '/';
  if (alvo && alvo.checkout) url = alvo.checkout + (alvo.checkout.indexOf('?') >= 0 ? '&' : '?') + params.toString();
  document.getElementById('fallback').href = url;

  var lote = !alvo ? 'encerrada' : alvo === C.especial ? 'especial' : 'lote' + alvo.n + (alvo.prorrogado ? '-prorrogado' : '');
  if (window.fbq) fbq('trackCustom', 'QRCodeScan', { lote: lote });

  // pequena espera para o pixel enviar os eventos antes de sair da página
  setTimeout(function () { location.replace(url); }, 400);
})();
