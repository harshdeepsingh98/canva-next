import React, { useState } from 'react'
import dynamic from 'next/dynamic'
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
  const [isVerifyJsonView, setIsVerifyJsonView] = useState(false)
  const [title, setTitle] = useState('Verification')

  const handleVerifyJsonClick = () => {
    setIsVerifyJsonView(true)
    setTitle('Verify JSON Credential')
  }

  const handleBackClick = () => {
    setIsVerifyJsonView(false)
    setTitle('Verification')
  }

  return (
    <div className={dmSans.className}>
      <AuthLayout
        title={title}
        isButtonHidden={true}
        isbackIconVisible={isVerifyJsonView}
        handleBackClick={handleBackClick}
      >
        <LazyLoadedVerificationView
          isVerifyJsonView={isVerifyJsonView}
          handleVerifyJsonClick={handleVerifyJsonClick}
          handleBackClick={handleBackClick}
        />
      </AuthLayout>
    </div>
  )
}

export default VerificationPage
