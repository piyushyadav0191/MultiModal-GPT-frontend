"use client"
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const ClientProvider = (props: Props) => {
  return (
      <ClerkProvider>
        {props.children}
    </ClerkProvider>
  )
}

export default ClientProvider