import type { RankingAnime, HeroAnime } from '../types/anime'
import { HeroBanner } from './HeroBanner'
import { RankingCard } from './RankingCard'

type RankingListProps = {
  heroAnime: HeroAnime
  animes: RankingAnime[]
  categories: string[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
  favorites: number[]
  onToggleFavorite: (id: number) => void
}

export function RankingList({
  heroAnime,
  animes,
  categories,
  selectedCategory,
  onSelectCategory,
  favorites,
  onToggleFavorite,
}: RankingListProps) {
  return (
    <section className="ranking-section" id="ranking" aria-labelledby="ranking-heading">
      <header className="section-header">
        <div className="section-title-wrap">
          <span className="section-indicator indicator-blue" aria-hidden="true"></span>
          <h1 className="section-title" id="ranking-heading">Top 5 Mais Assistidos</h1>
        </div>
        <span className="section-subtext">Atualizado diariamente</span>
      </header>

      {/* Banner destaque */}
      <HeroBanner
        anime={heroAnime}
        isFavorite={favorites.includes(heroAnime.id)}
        onToggleFavorite={onToggleFavorite}
      />

      {/* Filtro por categoria */}
      <div className="category-filter-bar" role="group" aria-label="Filtrar por gênero">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Lista de cards */}
      {animes.length === 0 ? (
        <div className="empty-list-box">
          <p className="empty-list-msg">Nenhum anime encontrado com os filtros selecionados.</p>
          <button
            type="button"
            className="filter-pill active"
            onClick={() => onSelectCategory('Todos')}
          >
            Limpar Filtros
          </button>
        </div>
      ) : (
        <div className="ranking-cards-list">
          {animes.map((anime) => (
            <RankingCard
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

