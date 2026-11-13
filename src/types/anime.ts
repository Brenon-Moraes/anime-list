// Tipo para os itens da lista "Em Alta"
export type TrendingAnime = {
  id: number
  rankBadge: string
  title: string
  alt: string
  imageUrl: string
  genre: string
  score: string
}

// Tipo para os itens da lista "Top 5 Mais Assistidos"
export type RankingAnime = {
  id: number
  position: number
  title: string
  alt: string
  imageUrl: string
  synopsis: string
  score: string
  category: string
  tags: string[]
}

// Tipo para o anime em destaque no banner principal
export type HeroAnime = {
  id: number
  tag: string
  title: string
  alt: string
  imageUrl: string
  description: string
  score: string
  members: string
}
