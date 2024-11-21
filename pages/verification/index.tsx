import dynamic from 'next/dynamic'
import React from 'react'
import { DM_Sans } from 'next/font/google'

const LazyLoadedVerificationView = dynamic(() => import('views/verification'), {
  ssr: false
})

const AuthLayout = dynamic(() => import('components/AuthLayout'), {
  ssr: false
})

const dmSans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
})

const VerificationPage: React.FC = () => {
  return (
    <div className={dmSans.className}>
      <AuthLayout title={'Verification'} isButtonHidden={true}>
        <LazyLoadedVerificationView />
      </AuthLayout>
    </div>
  )
}

export default VerificationPage
