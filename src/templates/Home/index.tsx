import { BannerProps } from 'components/Banner'
import { gameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import Container from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import Heading from 'components/Heading'

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
import GameCardSlider from 'components/GameCardSlider'

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
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>
    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>
        <GameCardSlider items={newGames} />
      </Container>
    </S.SectionNews>
    <S.SectionMostPopular>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </Container>
    </S.SectionMostPopular>
    <S.SectionUpcoming>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Upcoming
        </Heading>
        <GameCardSlider items={upcommingGames} />
        <Highlight {...upcommingHighligth} />
        <GameCardSlider items={upcommingMoreGames} />
      </Container>
    </S.SectionUpcoming>
    <S.SectionFreeGames>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Free games
        </Heading>
        <Highlight {...freeHighligth} />
        <GameCardSlider items={freeGames} />
      </Container>
    </S.SectionFreeGames>
    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
