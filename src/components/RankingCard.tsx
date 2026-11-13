import type { RankingAnime } from '../types/anime'

type RankingCardProps = {
  anime: RankingAnime
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
}

export function RankingCard({ anime, isFavorite, onToggleFavorite }: RankingCardProps) {
  return (
    <article className={`card-ranking ${isFavorite ? 'is-favorited' : ''}`}>
      <div className="rank-badge-wrap">
        <span className="rank-number">{anime.position}.</span>
        <span className="rank-position-label">Lugar</span>
      </div>
      <div className="ranking-card-body">
        <div className="ranking-card-thumb-container">
          <img
            src={anime.imageUrl}
            alt={anime.alt}
            className="ranking-card-thumb"
            loading="lazy"
          />
        </div>
        <div className="ranking-card-content">
          <div className="ranking-card-top">
            <div className="ranking-title-row">
              <h3 className="ranking-card-title">{anime.title}</h3>
              <button
                type="button"
                className={`ranking-fav-btn ${isFavorite ? 'favorited' : ''}`}
                onClick={() => onToggleFavorite(anime.id)}
                aria-label={isFavorite ? `Remover ${anime.title} dos favoritos` : `Adicionar ${anime.title} aos favoritos`}
              >
                {isFavorite ? '♥ Favoritado' : '♡ Favoritar'}
              </button>
            </div>
            <p className="ranking-card-synopsis">{anime.synopsis}</p>
          </div>
          <div className="ranking-card-footer">
            <div className="rating-badge">
              <span className="rating-star">★</span>
              <span>Avaliação: {anime.score}</span>
            </div>
            <div className="card-meta-tags">
              {anime.tags.map((tag) => (
                <span key={tag} className="meta-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

