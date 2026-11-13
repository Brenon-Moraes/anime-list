import type { TrendingAnime } from '../types/anime'

type TrendingCardProps = {
  anime: TrendingAnime
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
}

export function TrendingCard({ anime, isFavorite, onToggleFavorite }: TrendingCardProps) {
  return (
    <article className={`card-trending ${isFavorite ? 'is-favorited' : ''}`}>
      <div className="trending-thumb-container">
        <img
          src={anime.imageUrl}
          alt={anime.alt}
          className="trending-thumb"
          loading="lazy"
        />
        <span className="trending-badge">{anime.rankBadge}</span>
        <button
          type="button"
          className={`card-fav-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={() => onToggleFavorite(anime.id)}
          aria-label={isFavorite ? `Remover ${anime.title} dos favoritos` : `Adicionar ${anime.title} aos favoritos`}
          title={isFavorite ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
        >
          {isFavorite ? '♥' : '♡'}
        </button>
      </div>
      <div className="trending-info">
        <h3 className="trending-title">{anime.title}</h3>
        <div className="trending-meta">
          <span>{anime.genre}</span>
          <span className="trending-score">★ {anime.score}</span>
        </div>
      </div>
    </article>
  )
}

