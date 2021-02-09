import {
  KeyboardArrowDown as ArrowDown,
  VideogameAsset
} from '@styled-icons/material-outlined'
import ExploreSidebar, { ExploreSidebarProps } from 'components/ExploreSideBar'
import GameCard, { gameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import { useQueryGames } from 'graphql/queries/games'

import Base from 'templates/Base'
import * as S from './styles'

export type GamesTemplateProps = {
  games?: gameCardProps[]
  sideBarProps: ExploreSidebarProps
}

const GamesTemplate = ({ sideBarProps }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: { limit: 12 }
  })

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 12, start: data?.games.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar {...sideBarProps} onFilter={() => console.log('')} />
        {loading ? (
          <S.Loading>
            <VideogameAsset />
            <p>CARREGANDO...</p>
          </S.Loading>
        ) : (
          <section>
            <Grid>
              {data?.games.map((game, index) => (
                <GameCard
                  key={index}
                  title={game.name}
                  developer={game.developers[0].name}
                  img={
                    game.cover?.url ||
                    'https://source.unsplash.com/user/willianjusten/300x140'
                  }
                  price={game.price}
                  slug={game.slug}
                />
              ))}
            </Grid>
            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show more</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
