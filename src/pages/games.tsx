import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import ExploreSideBarMock from '__mocks__/ExploreSideBar'
import GameCardsMock from '__mocks__/GameCardsMock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: GameCardsMock,
      sideBarProps: {
        items: ExploreSideBarMock
      }
    }
  }
}
