import Image from 'next/image'
import { Avatar, Button, Input, Modal, Select, Space, Tabs } from 'antd'
import useProfileLogic from 'utils/customHooks/profile'
import { columns, options } from 'utils/customHooks/profile/profileData'
import Table from 'components/Table'
import AvatarIcon from 'images/png/Avatar.png'
import {
  AvatarContainer,
  BorderBottom,
  BotttomButtonContainer,
  ButtonContainer,
  ContentContainer,
  HeadingContainer,
  ModalContainer,
  ModalHeadingContainer,
  OrganizationContainer,
  TabContainer,
  TableContainer,
  UserContainer,
  UserTabs
} from 'styles/views/profile'

const { TextArea } = Input

const ProfileView: React.FC = () => {
  const {
    activeTab,
    selectedValue,
    handleTabChange,
    handleSelectChange,
    updatedDataSource,
    isModalVisible,
    handleCancel,
    handleConfirm
  } = useProfileLogic()
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
                <Space wrap>
                  <Select
                    defaultValue="Issuer ( View, Issue, Revoke, Download)"
                    style={{ width: 250 }}
                    onChange={handleSelectChange}
                    options={options}
                    value={selectedValue}
                  />
                </Space>
              </ContentContainer>
              <ButtonContainer style={{ width: 'auto' }}>
                <Button>{'Add New User'}</Button>
              </ButtonContainer>
            </UserTabs>
            <TableContainer>
              <Table
                selectedRowKeys={[]}
                rowSelection={null}
                columns={columns}
                dataSource={updatedDataSource}
              />
            </TableContainer>
          </UserContainer>
          <BotttomButtonContainer>
            <Button>{'Cancel'}</Button>
            <Button>{'Save'}</Button>
          </BotttomButtonContainer>
          <Modal
            visible={isModalVisible}
            centered
            closable={false}
            footer={null}
          >
            <ModalContainer>
              <ModalHeadingContainer>
                Delete Profile
                <span>Are you sure you want to Delete Amar Salve ?</span>
              </ModalHeadingContainer>
              <BotttomButtonContainer className="modal-button">
                <Button onClick={handleCancel}>{'Cancel'}</Button>
                <Button onClick={handleConfirm}>{'Confirm'}</Button>
              </BotttomButtonContainer>
            </ModalContainer>
          </Modal>
        </>
      )}
    </>
  )
}

export default ProfileView
