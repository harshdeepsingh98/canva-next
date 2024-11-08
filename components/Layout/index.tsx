import React, { ReactNode } from 'react'
import Image from 'next/image'
import { Layout } from 'antd'
import {
  LeftContainer,
  RightContainer,
  ImageContainer,
  FooterContainer
} from 'styles/components/Layout'

interface LayoutProps {
  children: ReactNode
}

const { Header, Content } = Layout

const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Layout style={{ background: '#fff', height: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#f1f1f1'
        }}
      >
        <ImageContainer>
          <Image
            src="https://studio.proteanx.io/static/media/brand_main_log_pic.839729f583d4c91f21c31c7cd6fb0e42.svg"
            alt="Main Brand Logo"
            width={150} // specify width
            height={40} // specify height
          />
        </ImageContainer>
      </Header>
      <Content
        style={{
          padding: '48px 0 0 0',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          margin: 'auto'
        }}
      >
        <div style={{ display: 'flex', width: '100%' }}>
          <LeftContainer>
            <Image
              src="https://studio.proteanx.io/static/media/brand_main_log_pic.839729f583d4c91f21c31c7cd6fb0e42.svg"
              alt="Side Brand Logo"
              width={150} // specify width
              height={50} // specify height
            />
          </LeftContainer>
          <RightContainer>{children}</RightContainer>
        </div>
        <FooterContainer>
          <Image
            src="https://studio.proteanx.io/static/media/threedotslogo.a297a3835af2343eee6bd352105c897e.svg"
            alt="Footer Logo"
            width={100} // specify width
            height={30} // specify height
          />
        </FooterContainer>
      </Content>
    </Layout>
  )
}

export default LayoutComponent
