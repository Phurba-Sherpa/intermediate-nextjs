'use client'
import { Button } from '@nextui-org/react'
import React from 'react'
import { useFormStatus } from 'react-dom'

export default function SubmitBtn({ label, ...btnProps }) {
  const { pending } = useFormStatus()
  return (
    <Button {...btnProps} type="submit" isLoading={pending} className='bg-blue-500'>
      {label}
    </Button>
  )
}
