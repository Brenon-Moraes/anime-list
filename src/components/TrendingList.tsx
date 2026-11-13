import type { TrendingAnime } from '../types/anime'
import { TrendingCard } from './TrendingCard'

type TrendingListProps = {
  animes: TrendingAnime[]
  favorites: number[]
  onToggleFavorite: (id: number) => void
}

export function TrendingList({ animes, favorites, onToggleFavorite }: TrendingListProps) {
  return (
    <section className="trending-section" id="em-alta" aria-labelledby="trending-heading">
      <header className="section-header">
        <div className="section-title-wrap">
          <span className="section-indicator indicator-purple" aria-hidden="true"></span>
          <h2 className="section-title" id="trending-heading">Em Alta</h2>
        </div>
        <span className="section-subtext">Destaques da Semana</span>
      </header>

      {animes.length === 0 ? (
        <p className="empty-list-msg">Nenhum anime em alta encontrado para este filtro.</p>
      ) : (
        <div className="trending-cards-wrapper">
          {animes.map((anime) => (
            <TrendingCard
              key={anime.id}
              anime={anime}
              isFavorite={favorites.includes(anime.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  )
}

