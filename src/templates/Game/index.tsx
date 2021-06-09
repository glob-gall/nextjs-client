import Base from 'templates/Base'
import Gallery, { GalleryProps } from 'components/Gallery'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import GameInfo, { gameInfoProps } from 'components/GameInfo'
import Showcase from 'components/Showcase'
import TextContent from 'components/TextContent'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import * as S from './styles'
import { Divider } from 'components/Divider'

export type GameProps = {
  cover: string
  gameInfoProps: gameInfoProps
  gameDetailsProps: GameDetailsProps
  galleryProps?: GalleryProps
  description: string
  upcomingGames: GameCardProps[]
  upcomingHighlights: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfoProps,
  gameDetailsProps,
  galleryProps,
  description,
  recommendedGames,
  upcomingGames,
  upcomingHighlights
}: GameProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
    <S.SectionGameInfo>
      <GameInfo {...gameInfoProps} />
    </S.SectionGameInfo>

    {!!galleryProps && (
      <S.SectionGallery>
        <Gallery {...galleryProps} />
      </S.SectionGallery>
    )}

    <S.SectionContent>
      <TextContent title="Description" content={description} />
    </S.SectionContent>

    <S.SectionGameDetails>
      <GameDetails {...gameDetailsProps} />
      <Divider />
    </S.SectionGameDetails>

    <Showcase
      title="Upcoming"
      highlight={upcomingHighlights}
      games={upcomingGames}
    />
    <Showcase title="You may like there games" games={recommendedGames} />
  </Base>
)

export default Game
