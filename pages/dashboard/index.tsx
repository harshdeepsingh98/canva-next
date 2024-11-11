import dynamic from 'next/dynamic'
import React from 'react'
import { DM_Sans } from 'next/font/google'

const LazyLoadedDashboardView = dynamic(() => import('views/dashboard'), {
  ssr: false
})

const AuthLayout = dynamic(() => import('components/AuthLayout'), {
  ssr: false
})

const dmSans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
})

const LoginPage: React.FC = () => {
  return (
    <div className={dmSans.className}>
      <AuthLayout title={'Dashboard'}>
        <LazyLoadedDashboardView />
      </AuthLayout>
    </div>
  )
}

export default LoginPage
