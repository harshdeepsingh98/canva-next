import dynamic from 'next/dynamic'
import React from 'react'
import { DM_Sans } from 'next/font/google'

const LazyLoadedCredentialsView = dynamic(() => import('views/credentials'), {
  ssr: false
})

const AuthLayout = dynamic(() => import('components/AuthLayout'), {
  ssr: false
})

const dmSans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
})

const CredentialsPage: React.FC = () => {
  return (
    <div className={dmSans.className}>
      <AuthLayout title={'Credentials'}>
        <LazyLoadedCredentialsView />
      </AuthLayout>
    </div>
  )
}

export default CredentialsPage
