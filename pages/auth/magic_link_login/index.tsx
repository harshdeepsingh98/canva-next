import dynamic from 'next/dynamic'
import React from 'react'
import { DM_Sans } from '@next/font/google'

const LazyLoadedMagicLinkView = dynamic(() => import('views/auth/login'), {
  ssr: false
})

const Layout = dynamic(() => import('components/Layout'), {
  ssr: false
})

const dmSans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
})

const MagicLinkLogin: React.FC = () => {
  return (
    <div className={dmSans.className}>
      <Layout>
        <LazyLoadedMagicLinkView />
      </Layout>
    </div>
  )
}

export default MagicLinkLogin
