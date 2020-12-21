/* eslint-disable react/no-unescaped-entities */
import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined'

import Link from 'next/link'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField placeholder="Name" icon={<AccountCircle />} />
      <TextField placeholder="Email" icon={<Email />} />
      <TextField placeholder="Password" icon={<Lock />} />
      <TextField placeholder="Confirm password" icon={<Lock />} />
      <Button fullWidth>Sign up now</Button>
    </form>
    <FormLink>
      Already have an account?{' '}
      <Link href="/signin">
        <a>Sign In</a>
      </Link>
    </FormLink>
  </FormWrapper>
)

export default FormSignIn
