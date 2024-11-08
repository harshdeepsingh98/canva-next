import dynamic from 'next/dynamic'
import React from 'react'
import { DM_Sans } from '@next/font/google'

const LazyLoadedLoginView = dynamic(() => import('views/auth/login'), {
  ssr: false
})

const Layout = dynamic(() => import('components/Layout'), {
  ssr: false
})

const dmSans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
})

const LoginPage: React.FC = () => {
  return (
    <div className={dmSans.className}>
      <Layout>
        <LazyLoadedLoginView />
      </Layout>
    </div>
  )
}

export default LoginPage
