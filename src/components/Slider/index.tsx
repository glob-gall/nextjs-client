import * as S from './styles'
import SlickSlider, { Settings } from 'react-slick'

export type SlickSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SlickSettings
}

const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

export default Slider
