type HeaderProps = {
  menuOpen: boolean
  onToggleMenu: () => void
  onCloseMenu: () => void
  searchQuery: string
  onSearchChange: (value: string) => void
  favoritesCount: number
  showOnlyFavorites: boolean
  onToggleShowFavorites: () => void
}

export function Header({
  menuOpen,
  onToggleMenu,
  onCloseMenu,
  searchQuery,
  onSearchChange,
  favoritesCount,
  showOnlyFavorites,
  onToggleShowFavorites,
}: HeaderProps) {
  return (
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

          <button
            type="button"
            className={`favorites-filter-btn ${showOnlyFavorites ? 'active' : ''}`}
            onClick={onToggleShowFavorites}
            aria-pressed={showOnlyFavorites}
          >
            <span>{showOnlyFavorites ? '♥ Favoritos' : '♡ Favoritos'}</span>
            <span className="favorites-count-badge">{favoritesCount}</span>
          </button>

          <div className="nav-search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar animes..."
              aria-label="Buscar animes"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </nav>

        <button
          type="button"
          className="menu-toggle-btn"
          onClick={onToggleMenu}
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
          <div className="mobile-search-box">
            <input
              type="text"
              placeholder="Buscar animes..."
              aria-label="Buscar animes no mobile"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          <a href="#inicio" className="mobile-nav-link active" onClick={onCloseMenu}>
            Início
          </a>
          <a href="#ranking" className="mobile-nav-link" onClick={onCloseMenu}>
            Top 5 Mais Assistidos
          </a>
          <a href="#em-alta" className="mobile-nav-link" onClick={onCloseMenu}>
            Animes Em Alta
          </a>
          <button
            type="button"
            className={`mobile-nav-link mobile-fav-btn ${showOnlyFavorites ? 'active' : ''}`}
            onClick={() => {
              onToggleShowFavorites()
              onCloseMenu()
            }}
          >
            {showOnlyFavorites ? '♥ Mostrar Todos' : `♡ Meus Favoritos (${favoritesCount})`}
          </button>
          <a href="#sobre" className="mobile-nav-link" onClick={onCloseMenu}>
            Sobre Nós
          </a>
        </nav>
      )}
    </header>
  )
}

