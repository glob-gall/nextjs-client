import Container from 'components/Container'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import { gameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'

export type WishlistTemplateProps = {
  games?: gameCardProps[]
  recommendedGames: gameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedGamesTtitle?: string
}

const WishList = ({
  recommendedGamesTtitle = 'You may like these games',
  recommendedGames,
  recommendedHighlight,
  games
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Wish List
      </Heading>
      {games ? (
        <Grid>
          {games.map((props, index) => (
            <GameCard {...props} key={`wishlist-${index}`} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your Wishlist is empty"
          description="find amazing games and add to your Wishlist to they appear here"
          hasLink
        />
      )}
      <Divider />
    </Container>
    <Showcase
      title={recommendedGamesTtitle}
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default WishList
