# 🎌 AnimeList — Plataforma de Animes

Projeto desenvolvido em **React**, **TypeScript** e **Vite**, com foco em design responsivo **Mobile First**, **HTML Semântico** e estilização via **Variáveis CSS em `:root`**.

---

## 📌 Documentação Completa da Fase 2
Para a explicação detalhada de cada conceito, decisões de arquitetura e estrutura de código, consulte o arquivo dedicado:
👉 **[DOCUMENTACAO_FASE2.md](./DOCUMENTACAO_FASE2.md)**

---

## 🚀 Como Executar o Projeto Localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesse no navegador:**
   Abra [http://localhost:5173/](http://localhost:5173/)

4. **Gerar build de produção:**
   ```bash
   npm run build
   ```

---

## 🎨 Paleta de Cores e Estética
* **Tema:** Dark Mode elegante e imersivo.
* **Lista 1 ("Top 10 Mais Assistidos"):** Acentos e bordas em **Azul Elétrico** (`#3b82f6` / `#60a5fa`).
* **Lista 2 ("Em Alta / Destaques"):** Acentos e bordas em **Roxo Neon** (`#a855f7` / `#c084fc`).

---

## 📱 Responsividade (Mobile First)
* **Mobile (< 768px):** Menu retrátil hambúrguer, carrossel horizontal de animes "Em Alta" e listagem vertical do "Top 10".
* **Tablet (768px - 1023px):** Layout em 2 colunas com cards numerados (1 a 5) e sidebar vertical.
* **Desktop (≥ 1024px):** Grid amplo, barra de navegação completa com busca e rodapé de 4 colunas.
