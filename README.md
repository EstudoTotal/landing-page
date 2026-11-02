# landing-page

## Branch `black-friday`

Esta branch contém só a página da Black Friday 2026 na raiz. O site principal continua intacto na `main`.

- **Colocar no ar:** Settings → Pages → Source "Deploy from a branch" → `black-friday` / `(root)`.
- **Voltar ao site principal depois da Black:** a mesma tela, trocando para `main` / `(root)`.
- **Conteúdo (preços, links, datas):** `content.js`. A página troca de lote sozinha pela data (hora do servidor).
- **Teste local:** `python3 -m http.server 8080` e abrir `http://localhost:8080/?agora=2026-11-15T10:00:00-03:00` para simular um horário.
- Ajustes durante a campanha são commitados nesta branch, não na `main`. Se mudar `app.js`, `styles.css` ou `content.js`, troque o `?v=` no `index.html` para evitar cache antigo.
