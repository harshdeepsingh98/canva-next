import dynamic from 'next/dynamic'
import React from 'react'
import { DM_Sans } from 'next/font/google'

const ChangeEmailView = dynamic(() => import('@views/auth/changeEmail'), {
  ssr: false
})

const Layout = dynamic(() => import('components/Layout'), {
  ssr: false
})

const dmSans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
})

const ChangeEmailPage: React.FC = () => {
  return (
    <div className={dmSans.className}>
      <Layout>
        <ChangeEmailView />
      </Layout>
    </div>
  )
}

export default ChangeEmailPage
