import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { DM_Sans } from 'next/font/google'

const LazyLoadedCredentialsView = dynamic(() => import('views/credentials'), {
  ssr: false
})

const AuthLayout = dynamic(() => import('components/AuthLayout'), {
  ssr: false
})

const dmSans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
})

const CredentialsPage: React.FC = () => {
  const [isDetailView, setIsDetailView] = useState(false)
  const [title, setTitle] = useState('Credentials')

  const handleRowClick = () => {
    setIsDetailView(true)
    setTitle('Experience Letter')
  }

  const handleBackClick = () => {
    setIsDetailView(false)
    setTitle('Credentials')
  }

  return (
    <div className={dmSans.className}>
      <AuthLayout
        title={title}
        isbackIconVisible={isDetailView}
        handleBackClick={handleBackClick}
      >
        <LazyLoadedCredentialsView
          isDetailView={isDetailView}
          onRowClick={handleRowClick}
        />
      </AuthLayout>
    </div>
  )
}

export default CredentialsPage
