import { useState } from 'react'
import './App.css'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app-container">
      {/* Header */}
      <header className="site-header">
        <div className="header-inner">
          <a href="#" className="logo-container" aria-label="AnimeList Início">
            <div className="logo-symbol">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="logo-text">
              ANIME<span className="logo-accent">LIST</span>
            </span>
          </a>


          <span className="header-badge">Catálogo Oficial</span>


          <nav className="desktop-nav" aria-label="Navegação Principal Desktop">
            <div className="nav-links">
              <a href="#inicio" className="nav-link active">Início</a>
              <a href="#ranking" className="nav-link">Lista de Animes</a>
              <a href="#em-alta" className="nav-link">Em Alta</a>
              <a href="#sobre" className="nav-link">Sobre</a>
            </div>
            <div className="nav-search">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input type="text" placeholder="Buscar animes..." aria-label="Buscar animes" />
            </div>
          </nav>


          <button
            type="button"
            className="menu-toggle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Alternar menu de navegação"
          >
            <span>Menu</span>
            <div className="hamburger-icon" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <nav className="mobile-nav-drawer" aria-label="Menu Mobile">
            <a href="#inicio" className="mobile-nav-link active" onClick={() => setMenuOpen(false)}>Início</a>
            <a href="#ranking" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Top 5 Mais Assistidos</a>
            <a href="#em-alta" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Animes Em Alta</a>
            <a href="#sobre" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Sobre Nós</a>
          </nav>
        )}
      </header>

      {/* Conteúdo principal */}
      <main className="main-content" id="inicio">

        {/* Animes em alta */}
        <section className="trending-section" id="em-alta" aria-labelledby="trending-heading">
          <header className="section-header">
            <div className="section-title-wrap">
              <span className="section-indicator indicator-purple" aria-hidden="true"></span>
              <h2 className="section-title" id="trending-heading">Em Alta</h2>
            </div>
            <span className="section-subtext">Destaques da Semana</span>
          </header>

          <div className="trending-cards-wrapper">
            <article className="card-trending">
              <div className="trending-thumb-container">
                <img
                  src="https://assets.aniquim.com.br/animes/20237/large-19383639bfc7.webp"
                  alt="Poster do anime Diários de uma Apotecária (3ª Temporada)"
                  className="trending-thumb"
                  loading="lazy"
                />
                <span className="trending-badge">#1 HOT</span>
              </div>
              <div className="trending-info">
                <h3 className="trending-title">Diários de uma Apotecária</h3>
                <div className="trending-meta">
                  <span>Drama</span>
                  <span className="trending-score">★ 9.1</span>
                </div>
              </div>
            </article>

            <article className="card-trending">
              <div className="trending-thumb-container">
                <img
                  src="https://assets.aniquim.com.br/animes/5580/large-cd19ff7442eb.webp"
                  alt="Poster do anime Black Clover (2ª Temporada)"
                  className="trending-thumb"
                  loading="lazy"
                />
                <span className="trending-badge">#2 HOT</span>
              </div>
              <div className="trending-info">
                <h3 className="trending-title">Black Clover</h3>
                <div className="trending-meta">
                  <span>Ação</span>
                  <span className="trending-score">★ 9.1</span>
                </div>
              </div>
            </article>

            <article className="card-trending">
              <div className="trending-thumb-container">
                <img
                  src="https://assets.aniquim.com.br/animes/21561/large-46495104dd07.webp"
                  alt="Poster do anime Bleach: Thousand-Year Blood War - A Calamidade"
                  className="trending-thumb"
                  loading="lazy"
                />
                <span className="trending-badge">#3 HOT</span>
              </div>
              <div className="trending-info">
                <h3 className="trending-title">Bleach: TYBW</h3>
                <div className="trending-meta">
                  <span>Ação</span>
                  <span className="trending-score">★ 9.1</span>
                </div>
              </div>
            </article>

            <article className="card-trending">
              <div className="trending-thumb-container">
                <img
                  src="https://assets.aniquim.com.br/animes/12905/large-e08b8d2e8bd3.webp"
                  alt="Poster do anime Dragon Ball Super: Beerus"
                  className="trending-thumb"
                  loading="lazy"
                />
                <span className="trending-badge">#4 HOT</span>
              </div>
              <div className="trending-info">
                <h3 className="trending-title">Dragon Ball Super: Beerus</h3>
                <div className="trending-meta">
                  <span>Ação</span>
                  <span className="trending-score">★ 8.7</span>
                </div>
              </div>
            </article>

            <article className="card-trending">
              <div className="trending-thumb-container">
                <img
                  src="https://assets.aniquim.com.br/animes/5578/large-379c664ddc33.webp"
                  alt="Poster do anime Cyberpunk: Mercenários (Edgerunners 2)"
                  className="trending-thumb"
                  loading="lazy"
                />
                <span className="trending-badge">#5 HOT</span>
              </div>
              <div className="trending-info">
                <h3 className="trending-title">Cyberpunk: Mercenários</h3>
                <div className="trending-meta">
                  <span>Sci-Fi</span>
                  <span className="trending-score">★ 8.2</span>
                </div>
              </div>
            </article>

            <article className="card-trending">
              <div className="trending-thumb-container">
                <img
                  src="https://assets.aniquim.com.br/animes/24861/large-b82a19078884.webp"
                  alt="Poster do anime Tempal: Item no Chikara"
                  className="trending-thumb"
                  loading="lazy"
                />
                <span className="trending-badge">#6 HOT</span>
              </div>
              <div className="trending-info">
                <h3 className="trending-title">Tempal: Item no Chikara</h3>
                <div className="trending-meta">
                  <span>Fantasia</span>
                  <span className="trending-score">★ 7.9</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Top 5 mais assistidos */}
        <section className="ranking-section" id="ranking" aria-labelledby="ranking-heading">
          <header className="section-header">
            <div className="section-title-wrap">
              <span className="section-indicator indicator-blue" aria-hidden="true"></span>
              <h1 className="section-title" id="ranking-heading">Top 5 Mais Assistidos</h1>
            </div>
            <span className="section-subtext">Atualizado diariamente</span>
          </header>

          {/* Banner destaque */}
          <article className="hero-highlight-card">
            <div className="hero-banner-media">
              <img
                src="https://assets.aniquim.com.br/animes/5049/large.webp"
                alt="Banner principal do anime Fullmetal Alchemist: Brotherhood"
                className="hero-banner-image"
              />
              <div className="hero-banner-overlay" aria-hidden="true"></div>
            </div>
            <div className="hero-banner-content">
              <span className="hero-banner-tag">★ #1 no Ranking ANIQuim</span>
              <h2 className="hero-banner-title">Fullmetal Alchemist: Brotherhood</h2>
              <p className="hero-banner-desc">
                Dois irmãos, Edward e Alphonse Elric, pagam um preço alto ao tentarem a transmutação humana proibida. Para recuperar o que perderam, lançam-se em busca da Pedra Filosofal, enfrentando conspirações e forças que operam nas sombras.
              </p>
              <div className="hero-banner-actions">
                <button type="button" className="btn-blue-primary">
                  <span>▶ Assistir Agora</span>
                </button>
                <div className="rating-badge">
                  <span className="rating-star">★</span>
                  <span>9.4 / 10 • 1091 Membros</span>
                </div>
              </div>
            </div>
          </article>

          <div className="ranking-cards-list">

            <article className="card-ranking">
              <div className="rank-badge-wrap">
                <span className="rank-number">1.</span>
                <span className="rank-position-label">Lugar</span>
              </div>
              <div className="ranking-card-body">
                <div className="ranking-card-thumb-container">
                  <img
                    src="https://assets.aniquim.com.br/animes/5049/large.webp"
                    alt="Poster do anime Fullmetal Alchemist: Brotherhood"
                    className="ranking-card-thumb"
                    loading="lazy"
                  />
                </div>
                <div className="ranking-card-content">
                  <div>
                    <h3 className="ranking-card-title">Fullmetal Alchemist: Brotherhood</h3>
                    <p className="ranking-card-synopsis">
                      Dois irmãos, Edward e Alphonse Elric, que cresceram aprendendo alquimia, pagam um preço alto ao tentarem a transmutação humana proibida. Para recuperar o que perderam, lançam-se em busca da lendária Pedra Filosofal.
                    </p>
                  </div>
                  <div className="ranking-card-footer">
                    <div className="rating-badge">
                      <span className="rating-star">★</span>
                      <span>Avaliação: 9.4 / 10</span>
                    </div>
                    <div className="card-meta-tags">
                      <span className="meta-pill">Ação & Fantasia</span>
                      <span className="meta-pill">64 Eps</span>
                      <span className="meta-pill">Dublado & Legendado</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="card-ranking">
              <div className="rank-badge-wrap">
                <span className="rank-number">2.</span>
                <span className="rank-position-label">Lugar</span>
              </div>
              <div className="ranking-card-body">
                <div className="ranking-card-thumb-container">
                  <img
                    src="https://assets.aniquim.com.br/animes/14620/large-e7c08d5d82ba.webp"
                    alt="Poster do anime Frieren e a Jornada para o Além"
                    className="ranking-card-thumb"
                    loading="lazy"
                  />
                </div>
                <div className="ranking-card-content">
                  <div>
                    <h3 className="ranking-card-title">Frieren e a Jornada para o Além</h3>
                    <p className="ranking-card-synopsis">
                      Por dez anos, a maga élfica Frieren viajou ao lado de Himmel, o herói. Após a vitória sobre o Rei Demônio e a separação do grupo, Frieren percebe que mal conhecia seus companheiros e decide refazer a jornada para entender os laços humanos.
                    </p>
                  </div>
                  <div className="ranking-card-footer">
                    <div className="rating-badge">
                      <span className="rating-star">★</span>
                      <span>Avaliação: 9.2 / 10</span>
                    </div>
                    <div className="card-meta-tags">
                      <span className="meta-pill">Fantasia & Drama</span>
                      <span className="meta-pill">28 Eps</span>
                      <span className="meta-pill">Dublado & Legendado</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="card-ranking">
              <div className="rank-badge-wrap">
                <span className="rank-number">3.</span>
                <span className="rank-position-label">Lugar</span>
              </div>
              <div className="ranking-card-body">
                <div className="ranking-card-thumb-container">
                  <img
                    src="https://assets.aniquim.com.br/animes/13662/large-650f5803ef00.webp"
                    alt="Poster do anime Hunter x Hunter (2011)"
                    className="ranking-card-thumb"
                    loading="lazy"
                  />
                </div>
                <div className="ranking-card-content">
                  <div>
                    <h3 className="ranking-card-title">Hunter x Hunter (2011)</h3>
                    <p className="ranking-card-synopsis">
                      Gon Freecss é um garoto de doze anos que mora numa ilha isolada e sempre acreditou que o pai havia morrido. Ao descobrir que ele é um lendário Hunter, Gon parte em busca do pai e de se tornar um Hunter também.
                    </p>
                  </div>
                  <div className="ranking-card-footer">
                    <div className="rating-badge">
                      <span className="rating-star">★</span>
                      <span>Avaliação: 9.3 / 10</span>
                    </div>
                    <div className="card-meta-tags">
                      <span className="meta-pill">Ação & Aventura</span>
                      <span className="meta-pill">148 Eps</span>
                      <span className="meta-pill">Dublado & Legendado</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="card-ranking">
              <div className="rank-badge-wrap">
                <span className="rank-number">4.</span>
                <span className="rank-position-label">Lugar</span>
              </div>
              <div className="ranking-card-body">
                <div className="ranking-card-thumb-container">
                  <img
                    src="https://assets.aniquim.com.br/animes/4331/large-d626fc392287.webp"
                    alt="Poster do anime Diários de uma Apotecária (2ª Temporada)"
                    className="ranking-card-thumb"
                    loading="lazy"
                  />
                </div>
                <div className="ranking-card-content">
                  <div>
                    <h3 className="ranking-card-title">Diários de uma Apotecária (2ª Temporada)</h3>
                    <p className="ranking-card-synopsis">
                      Maomao está de volta com Gyokuyou para ajudar a consorte em sua segunda gravidez, enquanto amplia sua atuação como detetive-farmacêutica e descobre intrigas mais perigosas no interior do palácio imperial.
                    </p>
                  </div>
                  <div className="ranking-card-footer">
                    <div className="rating-badge">
                      <span className="rating-star">★</span>
                      <span>Avaliação: 9.3 / 10</span>
                    </div>
                    <div className="card-meta-tags">
                      <span className="meta-pill">Drama & Mistério</span>
                      <span className="meta-pill">24 Eps</span>
                      <span className="meta-pill">Legendado</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="card-ranking">
              <div className="rank-badge-wrap">
                <span className="rank-number">5.</span>
                <span className="rank-position-label">Lugar</span>
              </div>
              <div className="ranking-card-body">
                <div className="ranking-card-thumb-container">
                  <img
                    src="https://assets.aniquim.com.br/animes/20317/large-f7be6b08fbfd.webp"
                    alt="Poster do anime Diários de uma Apotecária (1ª Temporada)"
                    className="ranking-card-thumb"
                    loading="lazy"
                  />
                </div>
                <div className="ranking-card-content">
                  <div>
                    <h3 className="ranking-card-title">Diários de uma Apotecária (1ª Temporada)</h3>
                    <p className="ranking-card-synopsis">
                      A apotecária Maomao foi sequestrada e levada ao harém imperial como serva. Usando seu vasto conhecimento em farmácia e venenos, ela começa a resolver mistérios que ninguém mais consegue decifrar no palácio.
                    </p>
                  </div>
                  <div className="ranking-card-footer">
                    <div className="rating-badge">
                      <span className="rating-star">★</span>
                      <span>Avaliação: 9.2 / 10</span>
                    </div>
                    <div className="card-meta-tags">
                      <span className="meta-pill">Drama & Romance</span>
                      <span className="meta-pill">24 Eps</span>
                      <span className="meta-pill">Dublado & Legendado</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="site-footer" id="sobre">
        <div className="footer-inner">
          <div className="footer-columns">
            <div className="footer-col">
              <h3 className="footer-col-title">Sobre Nós</h3>
              <p className="footer-text">
                O AnimeList é a plataforma definitiva desenvolvida para os entusiastas da cultura dos animes. Acompanhe lançamentos em tempo real, avaliações da comunidade e as tendências mais assistidas da temporada com alta fidelidade visual.
              </p>
            </div>

            <div className="footer-col">
              <h3 className="footer-col-title">Termos de Uso</h3>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Termos de Serviço</a></li>
                <li><a href="#" className="footer-link">Diretrizes da Comunidade</a></li>
                <li><a href="#" className="footer-link">Aviso de Direitos Autorais</a></li>
                <li><a href="#" className="footer-link">Licenças de Conteúdo</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-col-title">Privacidade</h3>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Política de Privacidade</a></li>
                <li><a href="#" className="footer-link">Gerenciamento de Cookies</a></li>
                <li><a href="#" className="footer-link">Segurança e Proteção</a></li>
                <li><a href="#" className="footer-link">Preferências de Dados</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-col-title">Redes Sociais & Contato</h3>
              <p className="footer-text">
                Fale conosco pelo suporte técnico ou conecte-se com nossa comunidade nas redes:
              </p>
              <div className="footer-social-links">
                <a href="#" className="social-btn" aria-label="Discord da Comunidade" title="Discord">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
                <a href="#" className="social-btn" aria-label="Twitter / X" title="X (Twitter)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="social-btn" aria-label="Canal do YouTube" title="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copyright">
              © 2026 AnimeList. Todos os direitos reservados.
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
