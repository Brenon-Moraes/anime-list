import { useState } from 'react'
import './App.css'
import { heroAnime, rankingAnimes, trendingAnimes } from './data/animes'
import { Header } from './components/Header'
import { TrendingList } from './components/TrendingList'
import { RankingList } from './components/RankingList'
import { Footer } from './components/Footer'

const CATEGORIES = ['Todos', 'Ação', 'Drama', 'Fantasia']

export default function App() {
  // Estados de navegação, filtros e favoritos
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [favorites, setFavorites] = useState<number[]>([5049])
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)

  // Adiciona ou remove o anime da lista de favoritos
  function handleToggleFavorite(id: number) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const normalizedQuery = searchQuery.trim().toLowerCase()

  // Filtra o Top 5 por categoria, texto buscado e favoritos
  const filteredRankingAnimes = rankingAnimes.filter((anime) => {
    const matchesCategory =
      selectedCategory === 'Todos' || anime.category === selectedCategory
    const matchesSearch =
      normalizedQuery === '' ||
      anime.title.toLowerCase().includes(normalizedQuery) ||
      anime.synopsis.toLowerCase().includes(normalizedQuery)
    const matchesFavorite = !showOnlyFavorites || favorites.includes(anime.id)

    return matchesCategory && matchesSearch && matchesFavorite
  })

  // Filtra a lista Em Alta por texto buscado e favoritos
  const filteredTrendingAnimes = trendingAnimes.filter((anime) => {
    const matchesSearch =
      normalizedQuery === '' ||
      anime.title.toLowerCase().includes(normalizedQuery) ||
      anime.genre.toLowerCase().includes(normalizedQuery)
    const matchesFavorite = !showOnlyFavorites || favorites.includes(anime.id)

    return matchesSearch && matchesFavorite
  })

  return (
    <div className="app-container">
      <Header
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
        onCloseMenu={() => setMenuOpen(false)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        favoritesCount={favorites.length}
        showOnlyFavorites={showOnlyFavorites}
        onToggleShowFavorites={() => setShowOnlyFavorites((prev) => !prev)}
      />

      <main className="main-content" id="inicio">
        <TrendingList
          animes={filteredTrendingAnimes}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />

        <RankingList
          heroAnime={heroAnime}
          animes={filteredRankingAnimes}
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>

      <Footer copyrightYear={2026} />
    </div>
  )
}
