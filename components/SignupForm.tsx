'use client'

import { registerUser } from '@/actions/auth'
import { Input } from '@nextui-org/react'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import SubmitBtn from './SubmitBtn'

const initialState = { message: null }

const SignupForm = () => {
  const [formState, action] = useFormState<{ message: string | null }>(
    registerUser,
    initialState
  )
  return (
    <form
      action={action}
      className="bg-content1 border border-default-100 shadow-lg rounded-md p-10 flex flex-col gap-2 "
    >
      <h3 className="mb-12 text-xl text-center">Sign up</h3>
      <Input
        className="mb-4"
        fullWidth
        size="lg"
        placeholder="Email"
        name="email"
        required
      />
      <Input
        name="password"
        fullWidth
        size="lg"
        className="mb-8"
        type="password"
        placeholder="Password"
        required
      />
      <SubmitBtn label="Sign up" />
      <div>
        <Link href="/signin">{`Already have an account?`}</Link>
      </div>
      {formState?.message && <p>{formState.message}</p>}
    </form>
  )
}

export default SignupForm
