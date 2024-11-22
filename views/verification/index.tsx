import { Button, Drawer, Input, Upload } from 'antd'
import useVerificationLogic from 'utils/customHooks/verification'
import { columns } from 'utils/customHooks/verification/verificationData'
import Table from 'components/Table'
import Search from 'images/svg/Search'
import Image from 'next/image'
import Plus from 'images/png/AddCircle.png'
import CloseIcon from 'images/png/CloseIcon.png'
import {
  Border,
  BorderContainer,
  ButtonContainer,
  DrawerButtonContainer,
  DrawerContainer,
  DrawerTitle,
  HeadingContainer,
  PaginationContainer,
  SearchContainer,
  TableContainer,
  UrlContainer,
  VerifyJsonContainer
} from 'styles/views/verification'

interface VerificationViewProps {
  isVerifyJsonView: boolean
  handleVerifyJsonClick: () => void
  handleBackClick: () => void
}

const VerificationView: React.FC<VerificationViewProps> = ({
  isVerifyJsonView,
  handleVerifyJsonClick,
  handleBackClick
}) => {
  const { Dragger } = Upload
  const {
    handleNextPage,
    handlePrevPage,
    currentPage,
    totalPages,
    rowSelection,
    selectedRowKeys,
    paginatedData,
    props,
    isDrawerVisible,
    handleDrawerClose
  } = useVerificationLogic()

  if (isVerifyJsonView) {
    return (
      <>
        <VerifyJsonContainer>
          <Dragger
            {...props}
            listType="picture"
            showUploadList={{
              removeIcon: (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <Image src={CloseIcon} alt="Remove" width={16} height={16} />
                </span>
              )
            }}
          >
            <p>
              <Image
                src={Plus}
                alt={`Plus`}
                width={20} // specify width
                height={20} // specify height
              />
            </p>
            <p>
              Drag & Drop files here or <br />
              Click Here to import CSV file
            </p>
          </Dragger>
          <BorderContainer>
            <Border />
            <p>OR</p>
            <Border />
          </BorderContainer>
          <UrlContainer>
            Import from URL <Input size="large" placeholder="{...}" />{' '}
          </UrlContainer>
        </VerifyJsonContainer>
        <ButtonContainer className="verifyjson-button">
          <Button onClick={handleBackClick}>{'Cancel'}</Button>
          <Button>{'Verify'}</Button>
        </ButtonContainer>
      </>
    )
  }

  return (
    <>
      <HeadingContainer>All Templates</HeadingContainer>
      <SearchContainer>
        <Input
          size="large"
          placeholder="Search for spaces"
          prefix={<Search />}
        />
        <PaginationContainer>
          <div style={{ width: '100%', textAlign: 'end' }}>
            <Button onClick={handlePrevPage} disabled={currentPage === 1}>
              {'<'}
            </Button>
            <span>
              {currentPage} / {totalPages}
            </span>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              {'>'}
            </Button>
          </div>
          <ButtonContainer>
            <Button onClick={handleVerifyJsonClick}>{'Verify JSON'}</Button>
            <Button>{'Create Template'}</Button>
          </ButtonContainer>
        </PaginationContainer>
      </SearchContainer>
      <TableContainer>
        <Table
          selectedRowKeys={selectedRowKeys}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={paginatedData}
          isMessageModalNotShown={true}
        />
      </TableContainer>
      <Drawer
        closable={false}
        destroyOnClose
        title={<DrawerTitle>History</DrawerTitle>}
        placement="right"
        open={isDrawerVisible}
      >
        <DrawerContainer>
          Data
          <DrawerButtonContainer>
            <Button onClick={handleDrawerClose}>{'Cancel'}</Button>
            <Button onClick={handleDrawerClose}>{'Add Record'}</Button>
          </DrawerButtonContainer>
        </DrawerContainer>
      </Drawer>
    </>
  )
}

export default VerificationView
