/* eslint-disable react/no-unescaped-entities */
import { Email, Lock } from '@styled-icons/material-outlined'

import Link from 'next/link'

import Button from 'components/Button'
import { FormWrapper, FormLink } from 'components/Form'
import TextField from 'components/TextField'
import * as S from './styles'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField placeholder="Email" icon={<Email />} />
      <TextField placeholder="Password" icon={<Lock />} />
      <S.ForgotPassword href="/">Forgot your password?</S.ForgotPassword>
      <Button fullWidth>Sign in Now</Button>
    </form>
    <FormLink>
      Don't have an account?{' '}
      <Link href="/signup">
        <a>Sign Up</a>
      </Link>
    </FormLink>
  </FormWrapper>
)

export default FormSignIn
