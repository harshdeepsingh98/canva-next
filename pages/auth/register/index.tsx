import dynamic from 'next/dynamic'
import React from 'react'
import { DM_Sans } from 'next/font/google'

const LazyLoadedRegisterView = dynamic(() => import('views/auth/register'), {
  ssr: false
})

const Layout = dynamic(() => import('components/Layout'), {
  ssr: false
})

const dmSans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
})

const RegisterPage: React.FC = () => {
  return (
    <div className={dmSans.className}>
      <Layout>
        <LazyLoadedRegisterView />
      </Layout>
    </div>
  )
}

export default RegisterPage
