import { BannerProps } from 'components/Banner'
import { gameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import Container from 'components/Container'
import Base from '../Base'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: gameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: gameCardProps[]
  upcommingGames: gameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: gameCardProps[]
  freeGames: gameCardProps[]
  freeHighligth: HighlightProps
}

import * as S from './styles'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

const Home = ({
  banners,
  freeGames,
  freeHighligth,
  mostPopularGames,
  mostPopularHighlight,
  newGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>
    <S.SectionNews>
      <Showcase title="News" games={newGames} />
    </S.SectionNews>
    <Showcase
      title="Most popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />
    <S.SectionUpcoming>
      <Showcase
        title="Upcoming"
        highlight={upcommingHighligth}
        games={upcommingGames}
      />
      <Showcase highlight={upcommingHighligth} games={upcommingMoreGames} />
    </S.SectionUpcoming>

    <Showcase title="Free games" highlight={freeHighligth} games={freeGames} />
  </Base>
)

export default Home
