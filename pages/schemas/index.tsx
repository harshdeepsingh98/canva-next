import dynamic from 'next/dynamic'
import React from 'react'
import { DM_Sans } from 'next/font/google'

const LazyLoadedSchemasView = dynamic(() => import('views/schemas'), {
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
      <AuthLayout title={'Schemas'}>
        <LazyLoadedSchemasView />
      </AuthLayout>
    </div>
  )
}

export default CredentialsPage
