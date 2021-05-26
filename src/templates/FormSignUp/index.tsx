/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import Link from 'next/link'
import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { useMutation } from '@apollo/client'
import { MUTATION_REGISTER } from 'graphql/mutations/register'

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    email: '',
    username: '',
    password: ''
  })
  const [createUser] = useMutation(MUTATION_REGISTER)

  const handeSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    createUser({
      variables: {
        input: {
          email: values.email,
          username: values.username,
          password: values.password
        }
      }
    })
  }
  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  return (
    <FormWrapper>
      <form onSubmit={handeSubmit}>
        <TextField
          onInputChange={(v) => handleInput('username', v)}
          name="username"
          placeholder="Name"
          icon={<AccountCircle />}
        />
        <TextField
          onInputChange={(v) => handleInput('email', v)}
          name="email"
          placeholder="Email"
          icon={<Email />}
        />
        <TextField
          type="password"
          onInputChange={(v) => handleInput('password', v)}
          name="password"
          placeholder="Password"
          icon={<Lock />}
        />
        <TextField
          type="password"
          onInputChange={(v) => handleInput('confirm-password', v)}
          placeholder="Confirm password"
          icon={<Lock />}
        />
        <Button type="submit" size="large" fullWidth>
          Sign up now
        </Button>
      </form>
      <FormLink>
        Already have an account?{' '}
        <Link href="/signin">
          <a>Sign In</a>
        </Link>
      </FormLink>
    </FormWrapper>
  )
}

export default FormSignUp
