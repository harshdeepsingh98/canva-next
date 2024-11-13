/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { theme } from 'styles/theme'
import { Avatar } from 'antd'
import type { MenuProps } from 'antd'
import { Layout, Menu, Dropdown } from 'antd'
import ProjectLogo from 'images/png/Protean X logo.png'
import Dashboard from 'images/png/Dashboard.png'
import Cred from 'images/png/Cred.png'
import Schemas from 'images/png/Schemas.png'
import Designer from 'images/png/Designer.png'
import Verification from 'images/png/Verification.png'
import Activity from 'images/png/Activity.png'
import Subscription from 'images/png/Subscription.png'
import Help from 'images/png/Help.png'
import Plus from 'images/png/Add.png'
import AvatarIcon from 'images/png/Avatar.png'
import {
  TitleContainer,
  ButtonContainer,
  ProfileContainer,
  StyledSpace
} from 'styles/components/AuthLayout'

const { Header, Content, Sider } = Layout

interface LayoutProps {
  children: ReactNode
  title: string
}

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.colors.secondary,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable'
}

const menuItems: MenuProps['items'] = [
  { key: '/dashboard', label: 'Dashboard', iconSrc: Dashboard },
  { key: '/credentials', label: 'Credentials', iconSrc: Cred },
  { key: '/schemas', label: 'Schemas', iconSrc: Schemas },
  { key: '/designers', label: 'Designers', iconSrc: Designer },
  { key: '/verification', label: 'Verification', iconSrc: Verification },
  { key: '/activity', label: 'Activity', iconSrc: Activity },
  { key: '/subscription', label: 'Your Plan', iconSrc: Subscription },
  { key: '/help', label: 'Help', iconSrc: Help }
].map(item => ({
  key: item.key,
  label: item.label,
  icon: (
    <Image
      src={item.iconSrc}
      alt={`${item.label} icon`}
      width={20} // specify width
      height={20} // specify height
    />
  )
}))

const AuthLayout: React.FC<LayoutProps> = ({ children, title }) => {
  const router = useRouter()

  const logoutMenu = (
    <Menu
      items={[
        {
          key: 'logout',
          label: 'Logout',
          onClick: () => router.push('/') // Redirect to the homepage
        }
      ]}
    />
  )

  const handleMenuClick: MenuProps['onClick'] = e => {
    router.push(e.key) // Navigate to the route based on the clicked item
  }

  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div style={{ padding: '22px 4px' }}>
          <Image src={ProjectLogo} alt="Project Logo" />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ background: theme.colors.secondary }}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout style={{ marginInlineStart: 200 }}>
        <Header
          style={{
            padding: '20px',
            background: theme.colors.background,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: `1px solid ${theme.colors.secondary}`
          }}
        >
          <TitleContainer>{title}</TitleContainer>
          <ProfileContainer>
            <ButtonContainer>
              <Image
                src={Plus}
                alt="Plus"
                width={20} // specify width
                height={20} // specify height
              />
              New Space
            </ButtonContainer>
            <StyledSpace>
              <Dropdown overlay={logoutMenu} trigger={['click']}>
                <Avatar
                  src={
                    <Image
                      src={AvatarIcon}
                      alt="avatar"
                      width={20} // specify width
                      height={20} // specify height
                    />
                  }
                  style={{ cursor: 'pointer' }}
                />
              </Dropdown>
            </StyledSpace>
          </ProfileContainer>
        </Header>
        <Content
          style={{
            overflow: 'initial',
            background: theme.colors.background,
            padding: '20px'
          }}
        >
          {children}
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  )
}

export default AuthLayout
