import { useState } from 'react'
import Image from 'next/image'
import { Avatar, Button, Input, Tabs } from 'antd'
import AvatarIcon from 'images/png/Avatar.png'
import {
  AvatarContainer,
  BorderBottom,
  ButtonContainer,
  ContentContainer,
  HeadingContainer,
  OrganizationContainer,
  TabContainer,
  UserContainer,
  UserTabs
} from 'styles/views/profile'

const { TextArea } = Input

const ProfileView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('1')

  const handleTabChange = (key: string) => {
    setActiveTab(key)
  }

  return (
    <>
      <TabContainer>
        <Tabs
          defaultActiveKey="1"
          onChange={handleTabChange}
          items={[
            {
              label: 'Organisation Profile',
              key: '1'
            },

            {
              label: 'User',
              key: '2'
            }
          ]}
        />
      </TabContainer>
      {activeTab === '1' ? (
        <>
          <HeadingContainer>Basic Detail</HeadingContainer>
          <AvatarContainer>
            <Avatar
              src={
                <Image
                  src={AvatarIcon}
                  alt="avatar"
                  width={50} // specify width
                  height={50} // specify height
                />
              }
              style={{ cursor: 'pointer' }}
            />
            <span>You can upload images up to 256×256</span>
          </AvatarContainer>
          <OrganizationContainer>
            <div>
              <ContentContainer>
                Organisation Name <Input size="small" placeholder="IBM" />
              </ContentContainer>
              <ContentContainer>
                URL
                <Input size="small" placeholder="https://www.ibm.com/in-en" />
              </ContentContainer>
            </div>
            <ContentContainer>
              Description
              <TextArea
                placeholder="Scale productivity across your enterprise."
                autoSize={{ minRows: 2, maxRows: 6 }}
              />
            </ContentContainer>
          </OrganizationContainer>
          <BorderBottom />
          <HeadingContainer>Address Detail</HeadingContainer>
          <OrganizationContainer>
            <div>
              <ContentContainer>
                Communication Address{' '}
                <TextArea
                  placeholder="Shop No. 5, Opp IBM,, Yerwada, Pune, Maharashtra 411006"
                  autoSize={{ minRows: 2, maxRows: 6 }}
                />
              </ContentContainer>
              <ContentContainer>
                Billing Address
                <TextArea
                  placeholder="Shop No. 5, Opp IBM,, Yerwada, Pune, Maharashtra 411006"
                  autoSize={{ minRows: 2, maxRows: 6 }}
                />
              </ContentContainer>
            </div>
            <ContentContainer>
              GST Number
              <Input size="small" placeholder="SS36TFG456739086735889" />
            </ContentContainer>
          </OrganizationContainer>
          <ButtonContainer>
            <Button>{'Update Profile'}</Button>
          </ButtonContainer>
        </>
      ) : (
        <>
          <UserContainer>
            <UserTabs>
              <ContentContainer>
                Enter Name <Input size="large" placeholder="Amar Salve" />
              </ContentContainer>
              <ContentContainer>
                Enter Email Address{' '}
                <Input size="large" placeholder="Amarsalve2143@gmail.com" />
              </ContentContainer>
              <ContentContainer>
                Permissions
                <Input
                  size="large"
                  placeholder="Issuer ( View, Issue, Revoke, Download)"
                />
              </ContentContainer>
              <ButtonContainer style={{ width: 'auto' }}>
                <Button>{'Add New User'}</Button>
              </ButtonContainer>
            </UserTabs>
          </UserContainer>
        </>
      )}
    </>
  )
}

export default ProfileView
