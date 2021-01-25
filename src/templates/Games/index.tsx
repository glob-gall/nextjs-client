import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'
import ExploreSidebar, { ExploreSidebarProps } from 'components/ExploreSideBar'
import GameCard, { gameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'

import Base from 'templates/Base'
import * as S from './styles'

export type GamesTemplateProps = {
  games?: gameCardProps[]
  sideBarProps: ExploreSidebarProps
}

const GamesTemplate = ({ games = [], sideBarProps }: GamesTemplateProps) => {
  return (
    <Base>
      <S.Main>
        <ExploreSidebar {...sideBarProps} onFilter={() => console.log('')} />

        <section>
          <Grid>
            {games.map((game, index) => (
              <GameCard {...game} key={index} />
            ))}
          </Grid>
          <S.ShowMore role="button">
            <p>Show more</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
