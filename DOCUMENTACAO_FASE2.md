# 📖 Documentação Técnica — Fase 2: Página no `App.tsx`
**Projeto:** AnimeList  
**Etapa:** Fase 2 — Construção da Interface com JSX e CSS (Peso: 2,5 pontos)  
**Tecnologias:** React 19, TypeScript, Vite, CSS Vanilla (Mobile First)

---

## 1. Visão Geral e Objetivo da Fase 2

O objetivo central desta fase foi transformar os wireframes aprovados do projeto (**Mobile**, **Tablet** e **Desktop**) em uma interface web funcional, moderna e semântica, utilizando **JSX** e **CSS**, com foco no paradigma **Mobile First** e estilização via **variáveis CSS (`:root`)**.

### Critérios de Avaliação Atendidos:
| Critério | Peso | Como foi implementado |
| :--- | :---: | :--- |
| **a. Fidelidade aos wireframes** | 0,5 | Reprodução exata dos componentes, posições e hierarquias presentes em `wireframe-mobile.jpeg`, `wireframe-tablet.jpeg` e `wireframe-desktop.jpeg`. |
| **b. Duas listagens completas** | 0,5 | **Lista 1:** "Top 10 Mais Assistidos" (com numeração 1 a 5, posters, títulos, sinopses, avaliações e tags) e **Lista 2:** "Em Alta" (com 6 cards em destaque, posters, títulos, categorias e notas). |
| **c. CSS organizado e consistente** | 0,5 | Declaração de *Design Tokens* em `:root` (cores, espaçamentos, tipografia, bordas e sombras). Classes semânticas e BEM-like. |
| **d. Responsividade Mobile First** | 0,5 | Estilos base desenvolvidos para smartphones (< 768px), adaptando-se progressivamente para tablets (`@media (min-width: 768px)`) e desktops (`@media (min-width: 1024px)`). |
| **e. Estrutura semântica do JSX** | 0,5 | Uso rigoroso de tags HTML5 estruturais (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). |

> **Nota Pedagógica sobre a Repetição dos Cards:**  
> Nesta Fase 2, **não foram utilizados arrays de dados nem funções de repetição como `.map()`**. Os cards de ambas as listas foram escritos manualmente um a um no JSX. Essa abordagem tem como propósito didático evidenciar o custo de manutenção do código estático repetido, preparando o terreno para a **Fase 3**, na qual esses cards serão refatorados em componentes reutilizáveis e dados estruturados.

---

## 2. Estrutura de Diretórios e Arquivos

```text
anime-list/
├── public/
│   └── images/                     # Ativos visuais (posters e banners)
│       ├── hero-banner.jpg         # Banner do anime em destaque da temporada
│       ├── blue-shadow.jpg         # Poster #1 (Shadow Monarch) - Lista 1
│       ├── blue-ninja.jpg          # Poster #2 (Shinobi Raijin) - Lista 1
│       ├── blue-dragon.jpg         # Poster #3 (Azure Dragon) - Lista 1
│       ├── blue-abyss.svg          # Poster #4 (Echoes of Abyss) - Lista 1
│       ├── blue-titan.svg          # Poster #5 (Cyber Titan) - Lista 1
│       ├── purple-mage.jpg         # Poster Em Alta #1 (Arcana Eternal) - Lista 2
│       ├── purple-cyber.jpg        # Poster Em Alta #2 (Cyberpunk Nights) - Lista 2
│       ├── purple-valkyrie.svg     # Poster Em Alta #3 (Valkyrie Requiem) - Lista 2
│       ├── purple-phantom.svg      # Poster Em Alta #4 (Phantom Blade) - Lista 2
│       ├── purple-astral.svg       # Poster Em Alta #5 (Astral Nexus) - Lista 2
│       └── purple-alchemist.svg    # Poster Em Alta #6 (Midnight Alchemy) - Lista 2
├── src/
│   ├── App.css                     # Estilos completos, variáveis :root e media queries
│   ├── App.tsx                     # Componente principal contendo toda a página em JSX
│   ├── index.css                   # Reset global e normalização básica
│   └── main.tsx                    # Ponto de entrada React montando a aplicação na div #root
├── DOCUMENTACAO_FASE2.md           # Este documento explicativo
├── index.html                      # Documento HTML com Google Fonts, SEO e idioma pt-BR
├── package.json                    # Dependências e scripts do projeto Vite
├── tsconfig.json                   # Configurações do compilador TypeScript
└── vite.config.ts                  # Configuração do Vite
```

---

## 3. Conceitos e Decisões de Design

### 3.1. Tema Escuro (Dark Mode) com Paleta Azul & Roxa
Conforme especificação solicitada:
* **Fundo e Superfícies:** Cores frias e escuras (`#07090e`, `#0f1422`, `#131828`) com acabamentos de desfoque de vidro (*glassmorphism*) usando `backdrop-filter: blur(14px)`.
* **Lista 1 — "Top 10 Mais Assistidos" (Detalhes em Azul):**
  * Uso de tons `#3b82f6` e `#60a5fa`.
  * Bordas e sombras com brilho azul (*blue glow*).
  * Números de ranking (`1.`, `2.`, `3.`...) e tags de avaliação em destaque azul elétrico.
* **Lista 2 — "Em Alta / Destaques" (Detalhes em Roxo):**
  * Uso de tons `#a855f7` e `#c084fc`.
  * Bordas com neon roxo e badges `#1 HOT` a `#6 HOT`.
  * Categorias e destaques em gradiente roxo.

### 3.2. Metodologia Mobile First & Breakpoints
O código CSS foi estruturado do menor para o maior dispositivo:
1. **Estilos Base (Mobile - `< 768px`):**
   * Hierarquia definida pelo wireframe mobile:
     * O Cabeçalho exibe o **LOGO** e o botão **Menu (☰)**.
     * A seção **"Em Alta"** possui `order: 1` no Flexbox, aparecendo **antes** do ranking, em formato de carrossel de rolagem horizontal com encaixe suave (`scroll-snap-type: x mandatory`).
     * A seção **"Top 10 Mais Assistidos"** possui `order: 2`, exibindo o card banner e os cards em coluna vertical única.
2. **Tablet (`@media (min-width: 768px)`):**
   * O container principal transforma-se em um **CSS Grid com 2 colunas**:
     * Coluna 1 (esquerda): "Top 10 Mais Assistidos" com numeração de ranking à esquerda de cada card.
     * Coluna 2 (direita): "Em Alta" passa a se comportar como uma barra lateral vertical com cards compactos.
   * O cabeçalho exibe o identificador visual "Catálogo Oficial".
   * O rodapé organiza-se em 3 colunas (*Sobre Nós*, *Termos*, *Redes Sociais*).
3. **Desktop (`@media (min-width: 1024px)`):**
   * Grid principal alargado com espaçamento generoso (`gap: 36px` e sidebar de `340px`).
   * A navegação desktop entra em ação: exibe links completos (*Início*, *Lista de Animes*, *Em Alta*, *Sobre*) e barra de busca integrada; o botão hambúrguer é ocultado via `display: none`.
   * Cards horizontais mais amplos com botões de ação e efeitos visuais no hover (elevação e intensificação do brilho).
   * Rodapé completo dividido em 4 colunas.

---

## 4. Estrutura dos Códigos e Componentes

### 4.1. `index.html`
* **Língua:** Definida como `pt-BR`.
* **SEO & Metadados:** Título otimizado e `meta description` para indexação.
* **Fontes Externas:** Importação das famílias tipográficas **Outfit** (para títulos e rankings marcantes) e **Plus Jakarta Sans** (para textos corridos, sinopses e metadados com alta legibilidade).

### 4.2. `src/App.css`
O arquivo CSS é segmentado nas seguintes seções:
1. **`:root` (Design Tokens):**
   * Cores de superfície, texto e bordas.
   * Variáveis `--blue-*` e `--purple-*` para os componentes de cada lista.
   * Escala de espaçamentos (`--spacing-1` a `--spacing-16`).
   * Escala tipográfica (`--font-size-xs` a `--font-size-3xl`).
2. **`site-header` e `desktop-nav` / `mobile-nav-drawer`:**
   * Cabeçalho fixo (*sticky*) com suporte a transparência translúcida.
   * Estilização do menu mobile com animação `slideDown`.
3. **`trending-section` e `card-trending` (Lista 2 - Roxo):**
   * Rolagem horizontal nativa com barra de rolagem customizada e snap no mobile.
   * Transição fluida de elevação no hover com bordas em `--purple-light`.
4. **`ranking-section` e `card-ranking` (Lista 1 - Azul):**
   * Card em destaque (*hero highlight*) representando o bloco em destaque do wireframe.
   * Elemento de numeração de posição (`.rank-badge-wrap`).
   * Tags de metadados (resolução, episódios, dublagem) e nota de avaliação (`.rating-badge`).
5. **`site-footer`:**
   * Grid responsivo que se adapta de 1 coluna (mobile) para 3 colunas (tablet) e 4 colunas (desktop).

### 4.3. `src/App.tsx`
Todo o JSX foi montado de forma semântica e pura:
* **Estado de UI:**
  ```tsx
  const [menuOpen, setMenuOpen] = useState(false);
  ```
  Permite que o usuário clique no botão **Menu** em dispositivos móveis e tablets para alternar a exibição da gaveta de navegação.
* **Seções Semânticas:**
  * `<header className="site-header">`: Navegação e identidade.
  * `<main className="main-content">`: Engloba as duas seções principais.
  * `<section className="trending-section">`: Seção "Em Alta" contendo 6 `<article className="card-trending">` repetidos manualmente.
  * `<section className="ranking-section">`: Seção "Top 10 Mais Assistidos" contendo o card banner e 5 `<article className="card-ranking">` detalhados com sinopse, nota e tags.
  * `<footer className="site-footer">`: Links institucionais, redes sociais e direitos autorais.

---

## 5. Como Executar e Testar o Projeto

1. **Instalação das dependências (caso seja clonado em outra máquina):**
   ```bash
   npm install
   ```

2. **Executar em ambiente local (desenvolvimento):**
   ```bash
   npm run dev
   ```
   A aplicação estará acessível em: **`http://localhost:5173/`**

3. **Verificação da compilação e TypeScript:**
   ```bash
   npm run build
   ```
   Gera a versão de produção otimizada na pasta `dist/`.

4. **Testando a Responsividade no Navegador:**
   * Abra a página no Google Chrome, Edge ou Firefox.
   * Pressione `F12` para abrir o **Inspecionar Elemento** e clique no ícone de dispositivos (`Ctrl + Shift + M`).
   * Teste as três larguras:
     * **Mobile:** Menor que `768px` (ex: 390px ou 412px).
     * **Tablet:** Entre `768px` e `1023px` (ex: 768px ou 820px).
     * **Desktop:** `1024px` ou superior (ex: 1280px ou 1440px).

---

## 6. Próximos Passos (Fase 3)
Na próxima fase, o código deste `App.tsx` será refatorado:
* Extração dos cards repetidos para **Componentes React reutilizáveis** (ex: `<AnimeCard />` e `<TrendingCard />`).
* Separação das informações em **arquivos de dados estruturados** (`animes.json` ou `data/animes.ts`).
* Utilização da função `.map()` para renderizar dinamicamente as listas, eliminando a duplicação de código.
