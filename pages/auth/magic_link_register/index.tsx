import dynamic from 'next/dynamic'
import React from 'react'
import { DM_Sans } from 'next/font/google'

const MagicLinkRegisterView = dynamic(
  () => import('@views/auth/magiclLinkRegister'),
  {
    ssr: false
  }
)

const Layout = dynamic(() => import('components/Layout'), {
  ssr: false
})

const dmSans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
})

const MagicLinkRegisterPage: React.FC = () => {
  return (
    <div className={dmSans.className}>
      <Layout>
        <MagicLinkRegisterView />
      </Layout>
    </div>
  )
}

export default MagicLinkRegisterPage
