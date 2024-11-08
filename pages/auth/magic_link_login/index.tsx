import dynamic from 'next/dynamic'
import React from 'react'
import { DM_Sans } from 'next/font/google'

const LazyLoadedMagicLinkLoginView = dynamic(
  () => import('@views/auth/magicLinkLogin'),
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

const MagicLinkLogin: React.FC = () => {
  return (
    <div className={dmSans.className}>
      <Layout>
        <LazyLoadedMagicLinkLoginView />
      </Layout>
    </div>
  )
}

export default MagicLinkLogin
