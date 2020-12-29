import Container from 'components/Container'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import { gameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'

// import * as S from './styles'

export type WishlistTemplateProps = {
  games?: gameCardProps[]
  recommendedGames: gameCardProps[]
  recommendedHighlight: HighlightProps
}

const WishList = ({
  recommendedGames,
  recommendedHighlight,
  games
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Wish List
      </Heading>
      <Grid>
        {!!games &&
          games.map((props, index) => (
            <GameCard {...props} key={`wishlist-${index}`} />
          ))}
      </Grid>
    </Container>
    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default WishList
