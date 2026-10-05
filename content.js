/* =====================================================================
   ESTUDO TOTAL — Conteúdo do site
   ---------------------------------------------------------------------
   COMO EDITAR:
   - Altere SOMENTE o texto entre as crases (`...`) de cada linha.
   - O nome antes dos dois-pontos (a "chave") indica a que campo do site
     aquele texto pertence — está descrito no comentário ao lado.
   - Para quebrar linha ou destacar, pode usar HTML simples: <br>, <b>, <em>.
   - Não apague vírgulas, crases ou os <span class="g"> do logo.
   ===================================================================== */

window.SITE_CONTENT = {

  /* ---------- MARCA / LOGO (aparece no cabeçalho e no rodapé) ---------- */
  logo: `<span class="g">E</span>studo <span class="g">T</span>otal`, // Mantenha os <span class="g"> para deixar E e T em verde. O CSS deixa em CAIXA-ALTA.

  /* ---------- MENU (cabeçalho) ---------- */
  nav_metodo: `O método`,            // Link do menu
  nav_mentora: `A Nazli`,          // Link do menu
  nav_conteudo: `Conteúdo`,           // Link do menu
  nav_depoimentos: `Depoimentos`,        // Link do menu
  nav_faq: `FAQ`,                // Link do menu
  nav_cta: `Quero o Estudo Total`,      // Botão verde do cabeçalho
  nav_login: `Área do aluno`,      // Botão de login no cabeçalho (desktop) — a URL fica no index.html
  nav_login_menu: `Área do aluno`,      // Mesmo login, dentro do menu (mobile)

  /* ---------- HERO (primeira tela) ---------- */
  hero_eyebrow: `O MÉTODO POR TRÁS DE 12 APROVAÇÕES NO TOPO DAS LISTAS`,                          // Texto pequeno acima do título
  hero_title: `Construa um sistema de estudo autônomo e eficiente.<br><em> Estruture sua preparação em um sistema previsível e adaptado à sua realidade. Aumente seu percentual de acertos sem ficar refém de cronogramas engessados.</em>`, // Título principal — o que estiver em <em> fica verde
  hero_lead: `Assista ao vídeo para entender a lógica do Estudo Total!`, // Parágrafo de apoio
  hero_btn_primary: `Quero o Estudo Total →`,        // Botão principal (verde)
  hero_btn_ghost: `Entender como funciona`,        // Botão secundário (contornado)
  hero_stat1_num: `+5.000`,                        // Número da estatística 1
  hero_stat1_label: `alunos preparados`,             // Rótulo da estatística 1
  hero_stat2_num: `8`,                             // Número da estatística 2
  hero_stat2_label: `módulos completos`,             // Rótulo da estatística 2
  hero_stat3_num: `4,9★`,                          // Número da estatística 3
  hero_stat3_label: `avaliação média`,              // Rótulo da estatística 3
  hero_video_tag: `▶ Apresentação completa do curso`, // Etiqueta sobre o vídeo

  /* ---------- MENTORA ---------- */
  mentor_photo_placeholder: `[ Foto da mentora Nazli ]`,  // Texto exibido enquanto não houver foto
  mentor_badge: `Mentora <b>Nazli</b>`,                 // Selo sobre a foto
  mentor_eyebrow: `Quem vai te guiar`,                    // Texto pequeno acima do título
  mentor_title: `Conheça a Nazli`,                      // Título da seção
  mentor_role: `01 da área fiscal e de controle <br> Mentora e especialista em métodos de estudo`, // Cargo / especialidade
  mentor_p1: `🏆 1º lugar TCU <br> 🏆 1º lugar SEFAZ-SP <br> 🏆 1º lugar ISS-SP <br> 🏆 3º lugar CGU <br> 🏆 6º lugar RFB  <br> 🏆 5º lugar TCDF <br> 🏆  6º lugar TCE-RJ <br> 🏆 1º lugar ISS Guarulhos <br> 🏆 6º lugar ISS Campinas <br> 🏆 14º lugar ISS Campo Grande <br> 🏆 1º lugar ISS Valinhos <br> 🏆 3º lugar ISS Itapevi`, // 1º parágrafo
  mentor_p2: `Engenheira de formação. Auditora de profissão. Mais de 8 anos de experiência em concursos públicos. 
<br><br>
Mais do que acumular aprovações, dediquei anos para entender o que realmente faz um candidato evoluir até a aprovação.
<br><br>
Ao longo da minha preparação, desenvolvi um sistema para decidir o que estudar, quando revisar e como medir o progresso — sem depender de cronogramas rígidos ou métodos genéricos.
<br><br>
Esse sistema me levou a 12 aprovações no topo das listas e deu origem ao Estudo Total.

Agora estou aqui para te ensinar a construir o seu próprio sistema de estudos, adaptado à sua realidade.`, // 2º parágrafo
  mentor_cred1: `Método validado com milhares de alunos`,                  // Item da lista de credenciais
  mentor_cred2: `Foco em diagnóstico e plano de estudo individual`,        // Item da lista de credenciais
  mentor_cred3: `Conteúdo direto, sem enrolação e aplicável desde a primeira aula`, // Item da lista de credenciais

  /* ---------- CONTEÚDO / TABELA COMPARATIVA ---------- */
  modules_eyebrow: `Tudo o que você precisa para a aprovação em termos de técnica e método`,             // Texto pequeno acima do título
  modules_title: `O que é o Estudo Total?`,     // Título da seção
  modules_subtitle: `Um método para você aprender a estudar com autonomia e tomar melhores decisões na sua preparação.
  <br><br>
  É o sistema que desenvolvi para conquistar 12 aprovações no topo das listas. Ele nasceu da minha busca por entender o que faz um candidato evoluir, aumentar seu percentual de acertos e construir uma preparação consistente.
  <br><br>
  <strong>Aqui você encontra um método lógico, estruturado passo a passo, para aprender a decidir o que estudar, quando revisar, como acompanhar sua evolução e adaptar sua estratégia à sua realidade.</strong>`, // Subtítulo
  modules_highlight_lead: `O que você recebe no Estudo Total`, // Texto verde de destaque ao lado do subtítulo
  modules_hl1_title: `Método completo`,                                                                  // Título do destaque 1
  modules_hl1_desc: `Aprenda o método passo a passo e comece a aplicar um sistema de estudos mais estratégico desde já.`,             // Descrição do destaque 1
  modules_hl2_title: `12 meses de acesso`,                                                              // Título do destaque 2
  modules_hl2_desc: `Acesso às aulas e aos materiais por 12 meses após a inscrição, incluindo todas as atualizações do conteúdo.`,          // Descrição do destaque 2
  modules_hl3_title: `Suporte e garantia`,                                                             // Título do destaque 3
  modules_hl3_desc: `Fórum para tirar suas dúvidas sobre o método e garantia incondicional de 7 dias.`,                       // Descrição do destaque 3

  th_modulo: `Módulos`,    // Cabeçalho da coluna 1
  th_curso: `Curso`,     // Cabeçalho da coluna de marcações

  // Cada módulo tem um NOME e uma DESCRIÇÃO (as marcações ✓ / — são editadas direto no index.html)
  mod1_name: `1 · Fases do estudo (novo, sólido e final)`, mod1_desc: `Como estudar no pré e no pós-edital, como revisar de modo eficiente e eficaz, como aumentar seu percentual de acertos, como avaliar se está pronto(a) para uma prova, como ser aprovado(a) sem estudar tudo, como estudar o que realmente cai.`,
  mod2_name: `2 · Planejamento`, mod2_desc: `Como montar e evoluir um ciclo de estudos realmente personalizado para você, como estabelecer metas desafiadoras e realistas.`,
  mod3_name: `3 · Disciplina e Foco`, mod3_desc: `Como criar e manter a disciplina e o foco necessários para a aprovação, aplicativos e ferramentas úteis, como maximizar o tempo de estudo, como diminuir e se recuperar de distrações, como mudar seus hábitos, como parar de procrastinar.`,
  mod4_name: `4 · Métricas e Acompanhamento`, mod4_desc: `Quais são as poucas métricas que realmente importam, como acompanhar e agir a partir dessas métricas.`,
  mod5_name: `5 · Discursivas`, mod5_desc: `Como estudar para discursivas, receitas de bolo que funcionam, como corrigir suas próprias discursivas.`,
  mod6_name: `6 · Recursos`, mod6_desc: `Como fazer bons recursos de provas objetivas e discursivas (isso economiza muito dinheiro – acredite!).`,
  mod7_name: `7 · Estudo com IA`, mod7_desc: `Como usar a inteligência artificial para alavancar seus estudos de modo seguro.`,
  mod8_name: `8 · Como voltar a estudar depois de muito tempo`, mod8_desc: `Como retomar os estudos depois de um tempo parado(a) sem recomeçar do zero.`,
  mod9_name: `9 · Migrando de área`, mod9_desc: `Como avaliar se faz sentido mudar de área, como fazê-lo de modo inteligente e eficiente.`,
  mod10_name: `10 · Bem-estar nos estudos`, mod10_desc: `Como manter a saúde física e mental durante os estudos com tempo tão limitado.`,

  // Rótulos das categorias que dividem a tabela comparativa (faixas cinza)
  cat1_label: `Conteúdo do Estudo Total`,                          // Categoria 1
  cat2_label: `Suporte e acesso`,                           // Categoria 2

  // Itens da categoria "Suporte e acesso" (valores e marcações são editados direto no index.html)
  sup1_name: `Período de acesso às aulas e aos materiais`,
  sup2_name: `Suporte no fórum de dúvidas (dúvidas sobre o método)`,

  // Linha de investimento (rodapé da tabela)
  price_label: `Investimento`,                       // Rótulo da linha
  price_desc: `Acesso completo por 12 meses`,          // Descrição da linha
  price_value: `R$ 997<small>ou 12x de R$ 103,11</small>`, // Valor do CURSO (o <small> é a observação menor abaixo)
  price_btn_curso: `Entrar agora`,                    // Botão de compra do curso

  /* ---------- DEPOIMENTOS ---------- */
  testi_eyebrow: `Depoimentos`,                              // Texto pequeno acima do título
  testi_title: `O que dizem os alunos`,                    // Título da seção
  testi_subtitle: `Histórias reais de Estudantes Totais.`, // Subtítulo

  // Cada depoimento: _text = frase | _initial = letra do avatar | _name = nome | _role = profissão/contexto
  t1_text: `A Nazli foi fundamental na minha trajetória. <br><br>
  Segui a metodologia dela à risca para discursivas e os resultados vieram: hoje sou Auditor do TCU e fui nomeado na SEFAZ-CE. <br><br>
  Podem confiar de olhos fechados.`,
  t1_initial: `A`, t1_name: `Luiz Leão`, t1_role: `Aprovado para Auditor do TCU e da SEFAZ-CE`,

  t2_text: `Os ensinamentos da Nazli foram fundamentais na minha preparação. Aprendi a estudar com menos quantidade e mais qualidade, a estruturar revisões e a usar planilha para entender meus erros e ajustar a preparação. Com metas realistas, mantive a motivação sem perder o ritmo. Não recebi só orientação — construí uma bagagem que vai me acompanhar nos próximos concursos.`,
  t2_initial: `B`, t2_name: `Eduardo`, t2_role: `Aprovado para Escrevente no TJ-SP`,

  t3_text: `Com a ajuda da Nazli, consegui montar um planejamento de estudos e adaptá-lo ao longo do tempo, focando nas matérias que eu mais precisava e deixando minha rotina mais produtiva e direcionada. Ela também me ajudou com dicas de como organizar minhas anotações e criar meu próprio material para a revisão final pré-prova.`,
  t3_initial: `C`, t3_name: `Fabio`, t3_role: `Aprovado para Técnico Bancário na Caixa Econômica Federal`,

  t4_text: `Já percebi uma melhora significativa em decorrência do ET!! Consegui uns 10 pontos acima da média que vinha fazendo.`,
  t4_initial: `D`, t4_name: `Geraldo Rodeiguez`, t4_role: `Aluno da Turma 0, com menos de 2 meses de ET`,

  t5_text: `Melhorei 1000% os meus horários e estou rendendo muito mais. Agora eu consigo terminar de estudar bem mais cedo (cumprindo todas as metas). Estou muito mais seguro com seu método e seguindo o que você ensina. É bizarro como eu não tinha segurança alguma no jeito que eu estava estudando. Tenho certeza que sem isso, eu "bateria cabeça" em diversos pontos. Estou aprendendo muito agora.`,
  t5_initial: `D`, t5_name: `Antenor`, t5_role: `Aluno da Turma 0`,

  t6_text: `Esse curso ET está sendo o divisor de águas pra mim. Agora estou estudando com direção e sabendo o passo a passo. Muito obrigado, Nazli.`,
  t6_initial: `D`, t6_name: `José Emerson`, t6_role: `Aluno da Turma 0`,

  t7_text: `Os vídeos dela explodem a mente da gente. Só dá vontade de agradecer enquanto assisto.`,
  t7_initial: `D`, t7_name: `Audy`, t7_role: `Aluno da Turma 0`,

  t8_text: `Top demais viu!! Conheço muitas mentorias, mas ninguém apresentou um material como o seu!! Muito feliz com o investimento!`,
  t8_initial: `D`, t8_name: `Karla`, t8_role: `Aluna da Turma 0`,

  t9_text: `Simplesmente FAN-TÁS-TI-CO! AMEI!`,
  t9_initial: `D`, t9_name: `Aparício Geraldes`, t9_role: `Aluno da Turma 0`,

  t10_text: `O curso é MARAVILHOSO ❤️❤️. <br><br> São detalhes que fazem muita diferença. Tenho certeza de que, com as suas instruções e muitas horas de estudo, alcançarei meu objetivo de ser Auditora. Muito obrigada por dividir tanto conhecimento. Estou amando o curso ❤️!`,
  t10_initial: `D`, t10_name: `Nayanny Cruz`, t10_role: `Aluna da Turma 0`,

  t11_text: `Não é à toa que você é o “Pelé dos concursos”. Tem tantos detalhes que eu sei que vou rever mais de uma vez com calma, porque cada vírgula ali importa muito, ensinamentos de um mestre. Pessoas que já estão há anos na mesma metodologia sabem o quanto é difícil confiar e mudar baseado em outro método, corrigir vícios antigos, manias, desconstruir, mas você é literalmente de outro planeta (ET). Já admirava. Após o cuidado e profissionalismo com que você fez o curso, admiro mais ainda.`,
  t11_initial: `D`, t11_name: `Ricardo`, t11_role: `Aluno da Turma 0`,

  t12_text: `Só passando pra dar o feedback que assisti todos os vídeos liberados e dizer que AMEI o conteúdo. Muito obrigada por tanta informação! Simplesmente IMPECÁVEL! Pra cima 👏🏻😍🚀🚀`,
  t12_initial: `D`, t12_name: `Georgia`, t12_role: `Aluna da Turma 0`,

  t13_text: `Suas aulas são excelentes e sua técnica é absurda de boa!`,
  t13_initial: `D`, t13_name: `Thais`, t13_role: `Aluna da Turma 0`,

  /* ---------- PERGUNTAS FREQUENTES (FAQ) ---------- */
  faq_eyebrow: `Tire suas dúvidas`,       // Texto pequeno acima do título
  faq_title: `Perguntas frequentes`,    // Título da seção

  // Cada item: _q = pergunta | _a = resposta
  faq1_q: `Para quem é o Estudo Total?`,
  faq1_a: `Para qualquer pessoa que esteja estudando para concursos públicos, do iniciante absoluto a quem já estuda, mas não alcança os resultados desejados.
           <br><br> O Estudo Total NÃO é para quem sente que está no caminho certo e que conseguirá atingir a aprovação desejada mantendo seus estudos atual. Nesse caso, continue o que está fazendo.`,
  faq2_q: `Sou bem iniciante. O Estudo Total é para mim?`,
  faq2_a: `Sem dúvidas! O Estudo Total é ideal para você, começando agora. Você aprenderá como organizar seus estudos de modo eficiente e independente, do zero, antes de ter vícios de estudo. <br><br> 
  Inclusive, vou contar uma curiosidade sobre mim. Decidi estudar para concursos em 2017, no último ano da faculdade. Mas eu tinha decidido começar os estudos mesmo em 2018, quando me formasse, pois em 2017 estava conciliando estudo, trabalho e TCC. <br><br> 
  De qualquer forma, tive alguns meses entre a decisão de estudar e o início dos estudos de fato. Nesse período, fiquei só pesquisando e aprendendo sobre técnicas de estudo, para já começar do modo certo. Isso me ajudou muito a ganhar velocidade no início dos estudos, pois evitei muitos erros comuns. Depois, ao longo da trajetória, fui aperfeiçoando essas técnicas e construí o método que me trouxe mais de 10 aprovações em concursos públicos. <br><br>
  Você também tem essa oportunidade agora. 😊`,
  faq3_q: `Já estudo há algum tempo. O Estudo Total é para mim?`,
  faq3_a: `<strong>Depende!</strong> Preciso ser transparente com você. O Estudo Total pode ou não ser para você, a depender da sua bagagem e dos seus resultados até agora. <br><br>
  <strong>Se você estuda há algum tempo, mas se sente perdido(a), acha que está cometendo erros ou ainda não conseguiu aprovações, sim</strong>, o Estudo Total vai ajudá-lo(a) muito a corrigir os desvios de percurso e melhorar seu rendimento! <br><br>
  Porém, <strong>se você estuda há algum tempo e já conseguiu algumas aprovações, vamos pensar em dois cenários:</strong> <br><br>
  • <strong>Você tem aprovações, como para cargos de técnicos e analista, mas precisa levar seu estudo para o próximo nível para ser aprovado(a) em concursos que exigem mais ainda (auditor, carreiras jurídicas, etc) e não sabe como fazer isso: o Estudo Total irá ajudá-lo(a) dar esse upgrade nos estudos.</strong> Vale comentar que o conteúdo será bem dividido em módulos e assuntos, de modo que você poderá priorizar suas deficiências maiores de modo fácil. <br><br>
  • <strong>Você sente que está no caminho certo e que conseguirá atingir suas metas mantendo seus estudos atual: nesse caso, o Estudo Total NÃO é para você.</strong> Mantenha-se fazendo o que já está dando resultado e funcionou para você, ok?`,
  faq4_q: `O Estudo Total serve para qualquer concurso?`,
  faq4_a: `<strong>Com certeza!</strong> Apesar de eu ter focado na área fiscal e de controle, o conteúdo é aplicável para qualquer área de concurso público. Eu já ajudei concurseiros a serem aprovados não só nas áreas fiscal e de controle, mas também nas áreas bancária, de tribunais e de TI, por exemplo.`,
  faq5_q: `Já fiz vários cursos e/ou mentorias. O que o Estudo Total tem de diferente?`,
  faq5_a: `O Estudo Total sai do padrão dos cursos e mentorias atuais, no conteúdo, no modo de ensinar e no modo de pensar a preparação para concursos.
           <br><br> Diferentemente de mentorias/consultorias que desejam que você se torne dependente e seja aluno por muito tempo, meu foco é te ensinar a estudar de modo autônomo e independente. Não quero ficar pescando por você até a sua aprovação - quero te ensinar a pescar! 
           Meu objetivo é que, em 6 meses, você tenha segurança de caminhar com as próprias pernas e não precise mais de mim ou de outro serviço de mentoria/consultoria.
           Veja o que alguns alunos que passaram por outros cursos/mentorias/consultorias disseram:<br><br>
           • “Top demais viu!! Conheço muitas mentorias mas ninguém apresentou um material como o seu!! Muito feliz com o investimento!!” (Karla, aluna da T0)<br><br>
           • “Você consegue me trazer clareza e segurança, resolver meus anseios e inseguranças. Todas as outras mentorias que eu fiz não entregaram um décimo do que você entrega.” (Veronica Bocalon, aluna da T0)<br><br>
           • “O curso é MARAVILHOSO ❤️❤️. São detalhes que fazem muita diferença. Muito obrigada por dividir tanto conhecimento. ❤️ Estou amando o curso!” (Nayanny Cruz, aluna da T0)`,
  faq6_q: `Eu não ia bem na escola/faculdade. Ainda tenho esperança de ser aprovado(a)?`,
  faq6_a: `<strong>Com certeza!</strong> O que veremos não depende do seu histórico até aqui. Colocando em prática o que aprenderemos, você terá condições de ser aprovado(a) nos concursos dos seus sonhos!`,
  faq7_q: `Por quanto tempo terei acesso?`,
  faq7_a: `O acesso às aulas e ao material é liberado por 12 meses após a inscrição, incluindo todas as atualizações do conteúdo.`,
  faq8_q: `Como acesso as aulas?`,
  faq8_a: `Assim que se tornar aluno(a), você receberá um login e senha por e-mail (cheque o spam). <br><br>
            As aulas são acessadas pelo site <u><strong><a href="https://www.nazlisetton.com.br/" target="_blank" rel="noopener">nazlisetton.com.br</a></strong></u>. Você também pode acessar pelo botão <strong>Área do aluno</strong> no topo desta página.`,
  faq9_q: `Como funciona a garantia?`,
  faq9_a: `Você tem 7 dias para testar o Estudo Total. Se não gostar, o valor integral é devolvido sem burocracia. Basta solicitar seu reembolso <u><strong><a href="https://refund.hotmart.com/" target="_blank" rel="noopener">neste link</a></strong></u>.`,

  /* ---------- CHAMADA FINAL (CTA) ---------- */
  cta_eyebrow: `A APROVAÇÃO COMEÇA COM MÉTODO`,                 // Texto pequeno acima do título
  cta_title: `Construa um sistema de estudo que funciona`,        // Título
  cta_text: `Pare de “bater cabeça” nos estudos e construa uma preparação com autonomia, clareza e eficiência.
  <br><br>
  Aprenda o método. Construa sua preparação. Conquiste a aprovação.`, // Apoio
  // cta_text:    `Junte-se aos alunos que passaram a estudar de modo eficiente e com segurança.`, // Apoio
  cta_btn: `Quero me inscrever no Estudo Total desde já →`,    // Botão
  cta_guarantee: `Garantia incondicional de 7 dias. Comece agora sem risco.`, // Texto de garantia abaixo do botão

  /* ---------- RODAPÉ ---------- */
  footer_tagline: `Desempenho de outro mundo`, // Frase abaixo do logo
  footer_nav_title: `Navegação`,   // Título da coluna de links
  footer_nav_metodo: `O método`,
  footer_nav_mentora: `A Nazli`,
  footer_nav_conteudo: `Conteúdo`,
  footer_nav_depoimentos: `Depoimentos`,
  footer_nav_faq: `FAQ`,
  footer_contact_title: `Contato`,     // Título da coluna de contato
  footer_contact_1: `Instagram`,
  footer_contact_2: `YouTube`,
  footer_contact_3: `Newsletter`,
  footer_contact_4: `E-mail`,
  footer_copy: `Estudo Total · Nazli. Todos os direitos reservados.`, // O ano é preenchido automaticamente antes deste texto
  footer_made: `Feito com tecnologia alienígena.`

};
