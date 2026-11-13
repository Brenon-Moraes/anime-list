# 📖 Guia Completo da Fase 3 — Explicado do Zero (Para Iniciantes)

Este documento explica **tudo o que foi feito na Fase 3** do projeto **AnimeList**, usando uma linguagem simples e comparações do dia a dia — pensado para quem está começando ou mesmo para quem nunca programou na vida, mas também trazendo os nomes técnicos certos para você usar na apresentação para o professor.

---

## 🧩 1. Qual era o "problema" da Fase 2 e o que mudou na Fase 3?

Na **Fase 2**, todo o nosso site estava escrito dentro de um único arquivo gigante (`App.tsx`), com quase 500 linhas. Se havia 6 animes "Em Alta" e 5 animes no "Top 5", nós copiamos e colamos a estrutura de cada cartão várias vezes manualmente.

Imagine que você está montando um catálogo de uma loja:
* **Na Fase 2:** Você desenhou à mão cada página e cada caixinha de produto, uma por uma, na mesma folha de papel. Se quisesse mudar o botão de lugar, teria que apagar e redesenhar em todas as caixinhas.
* **Na Fase 3:** Nós dividimos o site em **peças de LEGO independentes (Componentes)** e separamos as informações dos animes em uma **lista organizada (Vetor de Objetos)**. Agora criamos apenas **um molde de cartão**, e o computador preenche automaticamente quantos animes existirem na lista!

---

## 🏗️ 2. Os 5 Conceitos Principais (Explicados com Analogias)

### A. O que é um **Componente** (`src/components/`)?
Pense em um site como uma casa feita de **blocos de LEGO**. Em vez de construir a casa inteira como um bloco único de cimento, nós separamos em peças menores onde cada uma tem uma função clara:
* **`Header.tsx` (Cabeçalho):** É a fachada da loja, onde fica a logo, a barra de pesquisa e o botão de menu.
* **`HeroBanner.tsx` (Banner Principal):** É a vitrine principal no topo, mostrando o anime número 1 (*Fullmetal Alchemist*).
* **`TrendingCard.tsx` (Cartão Em Alta):** É o "molde" de **um único** cartão roxo da lista "Em Alta".
* **`TrendingList.tsx` (Lista Em Alta):** É a prateleira que pega vários `TrendingCard` e coloca um ao lado do outro.
* **`RankingCard.tsx` (Cartão do Top 5):** É o "molde" de **um único** cartão azul da lista dos mais assistidos.
* **`RankingList.tsx` (Lista do Top 5):** É a estante principal que exibe o banner, os botões de filtro por gênero e a lista com os cartões `RankingCard`.
* **`Footer.tsx` (Rodapé):** É a parte final da página, com informações de contato e direitos autorais.

---

### B. O que é um **`type`** (`src/types/anime.ts`)?
No TypeScript, um `type` (tipo) funciona como uma **ficha cadastral em branco** ou um **contrato**.
Antes de cadastrar os animes, nós dizemos ao computador:
> *"Olha, todo anime da lista Top 5 obrigatoriamente precisa ter: um número de identificação (`id`), uma posição no ranking (`position`), um título (`title`), uma foto (`imageUrl`), uma sinopse (`synopsis`), uma nota (`score`), uma categoria (`category`) e etiquetas (`tags`)."*

Para que serve isso?
Se alguém tentar cadastrar um anime e esquecer de colocar o título ou colocar um texto onde deveria ser um número, o código avisa na hora antes mesmo de o site abrir!

No arquivo [`src/types/anime.ts`](./src/types/anime.ts), criamos 3 fichas cadastrais:
1. `TrendingAnime` (ficha dos animes da lista Em Alta).
2. `RankingAnime` (ficha dos animes do Top 5 Mais Assistidos).
3. `HeroAnime` (ficha do anime do banner principal).

---

### C. O que é um **Vetor de Objetos** (`src/data/animes.ts`)?
* Um **Objeto** (entre chaves `{ ... }`) é **uma ficha preenchida** de um anime (ex: os dados de *Hunter x Hunter*).
* Um **Vetor** ou *Array* (entre colchetes `[ ... ]`) é uma **pasta/gaveta com várias fichas dentro**, organizadas em fila.

No arquivo [`src/data/animes.ts`](./src/data/animes.ts), guardamos duas pastas:
* `trendingAnimes`: uma lista com os 6 objetos dos animes em alta.
* `rankingAnimes`: uma lista com os 5 objetos dos animes mais assistidos.

---

### D. O que são **`map`** e **`key`**?
* **`.map()` (A fábrica em série):** Em vez de escrevermos 6 cartões na mão, usamos o comando `.map()`. Ele pega a nossa pasta de fichas (`trendingAnimes`), lê ficha por ficha e fabrica automaticamente um componente `<TrendingCard />` para cada anime!
* **`key` (O CPF / RG de cada cartão):** Quando o React cria vários cartões em sequência usando `.map()`, ele pede que cada um tenha uma etiqueta de identificação única chamada `key` (usamos `key={anime.id}`). Assim, se você favoritar ou filtrar um anime, o React sabe exatamente qual cartão mexer sem confundir um com o outro.

---

### E. O que são **`Props`** (Propriedades) e **`useState`** (Estado)?
* **`useState` (A memória do site):** Um site estático é como uma folha de jornal impressa — nada muda quando você clica. O `useState` dá **memória** ao site. Quando você clica em um botão de filtro ou no coração de "Favoritar", o `useState` guarda essa nova informação e manda a tela se redesenhar instantaneamente!
* **`Props` (Os cabos de comunicação):** Como toda a memória fica guardada no arquivo chefe (`App.tsx`), ele precisa enviar essas informações para os componentes filhos (como o `Header` ou a `RankingList`). Ele faz isso passando **Props** (propriedades), que funcionam como encomendas entregues de um componente pai para um componente filho.

---

## ⚡ 3. Quais interações visuais com `useState` existem no nosso site?

O nosso [`src/App.tsx`](./src/App.tsx) guarda **5 memórias (`useState`)** que mudam o visual da página ao vivo:

1. **Filtro por Gênero (`selectedCategory`):**
   * Na seção *Top 5 Mais Assistidos*, existem botões para **"Todos"**, **"Ação"**, **"Drama"** e **"Fantasia"**.
   * Ao clicar em "Ação", por exemplo, o botão fica azul iluminado e a lista mostra na hora apenas os animes de ação (*Fullmetal Alchemist* e *Hunter x Hunter*).

2. **Sistema de Favoritos (`favorites`):**
   * Todos os cartões (tanto no *Em Alta* quanto no *Top 5* e no *Banner*) têm um botão de coração (`♡` / `♥`).
   * Ao clicar, o coração fica preenchido (`♥`), a borda do cartão brilha e o número no contador **`♥ Favoritos`** lá no topo do cabeçalho aumenta ou diminui automaticamente!

3. **Filtro "Mostrar Apenas Favoritos" (`showOnlyFavorites`):**
   * Clicando no botão **`♡ Favoritos`** no topo da página, o site esconde todos os outros animes e mostra na tela apenas aqueles que você marcou com coração.

4. **Busca em Tempo Real (`searchQuery`):**
   * Digitando qualquer palavra na barra *"Buscar animes..."* (ex: `"Frieren"` ou `"Apotecária"`), as duas listas são filtradas instantaneamente enquanto você digita.

5. **Menu Mobile (`menuOpen`):**
   * Em telas de celular, clicar no botão "Menu" abre e fecha a gaveta de navegação.

---

## 🗂️ 4. Mapa dos Arquivos (Onde está cada coisa?)

```text
src/
├── types/
│   └── anime.ts              # As "fichas em branco" (type TrendingAnime, RankingAnime, HeroAnime)
├── data/
│   └── animes.ts             # Os vetores de objetos com os dados reais dos animes
├── components/
│   ├── Header.tsx            # Cabeçalho com busca, botão de favoritos e menu mobile
│   ├── HeroBanner.tsx        # Banner de destaque (#1 Fullmetal Alchemist)
│   ├── TrendingCard.tsx      # Molde de 1 cartão roxo da lista "Em Alta"
│   ├── TrendingList.tsx      # Seção "Em Alta" que usa .map() para desenhar os TrendingCard
│   ├── RankingCard.tsx       # Molde de 1 cartão azul da lista "Top 5"
│   ├── RankingList.tsx       # Seção "Top 5" com botões de categoria e .map() dos RankingCard
│   └── Footer.tsx            # Rodapé da página
├── App.tsx                   # O "Maestro": guarda os useState e junta todos os componentes
└── App.css                   # Todos os estilos visuais (cores, tamanhos, responsivo)
```

---

## 🎯 5. Resumo Rápido para Responder ao Professor

Se o professor perguntar qualquer um dos itens da avaliação, aqui está a resposta pronta na ponta da língua:

* **"Onde estão os componentes?"**
  👉 *"Dentro da pasta `src/components/`. Dividimos em `Header`, `HeroBanner`, `TrendingList`, `TrendingCard`, `RankingList`, `RankingCard` e `Footer`."*
* **"Onde estão os `type` e os vetores de objetos?"**
  👉 *"Os tipos `TrendingAnime` e `RankingAnime` estão em `src/types/anime.ts`, e os vetores de objetos estão em `src/data/animes.ts`."*
* **"Onde você usou `.map()` e `key`?"**
  👉 *"No `TrendingList.tsx` (para renderizar a lista Em Alta) e no `RankingList.tsx` (para renderizar o Top 5 e os botões de filtro), usando `key={anime.id}`."*
* **"Qual interação com `useState` você criou?"**
  👉 *"Criamos no `App.tsx` o sistema de favoritar animes com contador no topo, filtro por botões de categoria (Todos, Ação, Drama, Fantasia), filtro de apenas favoritos e busca por texto em tempo real."*

