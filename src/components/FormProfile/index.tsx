import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading size="small" lineBottom color="black" lineColor="primary">
      My profile
    </Heading>
    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="Jhon Doe"
      />
      <TextField
        name="email"
        placeholder="E-mail"
        label="E-mail"
        initialValue="example@email.com"
        disabled
      />
      <TextField
        name="password"
        placeholder="Type your password"
        label="Password"
      />
      <TextField
        name="new_password"
        placeholder="New password"
        label="New password"
      />
      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
