/* eslint-disable react/no-unescaped-entities */
import { Email, Lock } from '@styled-icons/material-outlined'
import { signIn } from 'next-auth/client'
import Link from 'next/link'

import Button from 'components/Button'
import { FormWrapper, FormLink } from 'components/Form'
import TextField from 'components/TextField'
import * as S from './styles'
import { useState } from 'react'
import { useRouter } from 'next/router'

type signInType = {
  email: string
  password: string
}

const FormSignIn = () => {
  const { push } = useRouter()
  const [values, setValues] = useState<signInType>({
    email: '',
    password: ''
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callback: '/'
    })

    if (result?.url) {
      return push(result.url)
    }

    console.error('email ou senha invalidos')
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          onInputChange={(v) => handleInput('email', v)}
          placeholder="Email"
          icon={<Email />}
        />
        <TextField
          type="password"
          onInputChange={(v) => handleInput('password', v)}
          placeholder="Password"
          icon={<Lock />}
        />
        <S.ForgotPassword href="/">Forgot your password?</S.ForgotPassword>
        <Button type="submit" fullWidth size="large">
          Sign in Now
        </Button>
      </form>
      <FormLink>
        Don't have an account?{' '}
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </FormLink>
    </FormWrapper>
  )
}

export default FormSignIn
