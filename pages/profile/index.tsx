import dynamic from 'next/dynamic'
import React from 'react'
import { DM_Sans } from 'next/font/google'

const LazyLoadedProfileView = dynamic(() => import('views/profile'), {
  ssr: false
})

const AuthLayout = dynamic(() => import('components/AuthLayout'), {
  ssr: false
})

const dmSans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
})

const ProfilePage: React.FC = () => {
  return (
    <div className={dmSans.className}>
      <AuthLayout title={'My Profile'} isButtonHidden={true}>
        <LazyLoadedProfileView />
      </AuthLayout>
    </div>
  )
}

export default ProfilePage
