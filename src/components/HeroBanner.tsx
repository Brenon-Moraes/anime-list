import type { HeroAnime } from '../types/anime'

type HeroBannerProps = {
  anime: HeroAnime
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
}

export function HeroBanner({ anime, isFavorite, onToggleFavorite }: HeroBannerProps) {
  return (
    <article className="hero-highlight-card">
      <div className="hero-banner-media">
        <img
          src={anime.imageUrl}
          alt={anime.alt}
          className="hero-banner-image"
        />
        <div className="hero-banner-overlay" aria-hidden="true"></div>
      </div>
      <div className="hero-banner-content">
        <span className="hero-banner-tag">{anime.tag}</span>
        <h2 className="hero-banner-title">{anime.title}</h2>
        <p className="hero-banner-desc">{anime.description}</p>
        <div className="hero-banner-actions">
          <button type="button" className="btn-blue-primary">
            <span>▶ Assistir Agora</span>
          </button>
          <button
            type="button"
            className={`btn-fav-outline ${isFavorite ? 'active' : ''}`}
            onClick={() => onToggleFavorite(anime.id)}
          >
            <span>{isFavorite ? '♥ Na Minha Lista' : '♡ Minha Lista'}</span>
          </button>
          <div className="rating-badge">
            <span className="rating-star">★</span>
            <span>
              {anime.score} • {anime.members}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

