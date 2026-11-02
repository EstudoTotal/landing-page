/* =====================================================================
   BLACK FRIDAY · ESTUDO TOTAL — conteúdo da página (branch black-friday)
   ---------------------------------------------------------------------
   A fase muda sozinha pela data (horário do servidor, não do aparelho
   da pessoa): esquenta → lote especial → lote 1 → lote 2 → lote 3 →
   encerrada. Não é preciso publicar nada nas viradas.

   A segurança está na Hotmart: cada link de checkout só deve ficar
   habilitado durante o seu lote. Tudo o que está neste arquivo é
   visível para qualquer um que abra o código da página.

   Se um lote estiver sem `preco` ou `checkout`, a página mostra
   "abre em instantes" no lugar da oferta e recarrega sozinha quando
   este arquivo for publicado com os dados.
   ===================================================================== */
window.BF_CONTENT = {

  precoCheio: 997,
  mesesCheio: 12,

  whatsapp: 'https://chat.whatsapp.com/H1TpnKd51X2LCtWywkqLvj',
  videoMetodo: '-ywjjqygiGk',   // "Entender como funciona" (só aparece se videoLive estiver vazio)
  videoLive: 'Bjk-9YN53HE',     // live de lançamento (youtube.com/watch?v=Bjk-9YN53HE)

  // Horário de Brasília
  live: { data: '03/11', hora: '20h', inicio: '2026-11-03T20:00:00-03:00' },

  especial: {
    per: '03/11 20h a 04/11 20h', fim: '2026-11-04T20:00:00-03:00',
    preco: '597', parcela: '61,02', bonusMeses: 3,
    checkout: 'https://pay.hotmart.com/R105136958K?off=9ivbee23'
  },

  lotes: [
    { n: 1, per: '04 a 10/11', virada: '04/11', abre: 'Abre em 04/11 às 20h', fim: '2026-11-10T23:59:59-03:00',
      preco: '697', parcela: '71,24', bonusMeses: 3,
      checkout: 'https://pay.hotmart.com/R105136958K?off=tf2q8ggk' },
    { n: 2, per: '11 a 20/11', virada: '11/11', abre: 'Virada em 11/11 à 00h', fim: '2026-11-20T23:59:59-03:00',
      preco: '797', parcela: '81,46', bonusMeses: 2,
      checkout: 'https://pay.hotmart.com/R105136958K?off=csjkdue3' },
    { n: 3, per: '21 a 30/11', virada: '21/11', abre: 'Virada em 21/11 à 00h', fim: '2026-11-30T23:59:59-03:00',
      preco: '847', parcela: '86,57', bonusMeses: 1,
      checkout: 'https://pay.hotmart.com/R105136958K?off=sz5gr6mr' }
  ]

};
