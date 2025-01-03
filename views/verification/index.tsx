import Image from 'next/image'
import { Button, Drawer, Input, Upload } from 'antd'
import useVerificationLogic from 'utils/customHooks/verification'
import {
  columns,
  historyColumns
} from 'utils/customHooks/verification/verificationData'
import Table from 'components/Table'
import { Table as AntTable } from 'antd'
import Search from 'images/svg/Search'
import Plus from 'images/png/AddCircle.png'
import CloseIcon from 'images/png/CloseIcon.png'
import ArrowUp from 'images/png/ArrowUp.png'
import ArrowDown from 'images/png/ArrowDown.png'
import Qrcode from 'images/png/Qrcode.png'
import {
  Border,
  BorderContainer,
  ButtonContainer,
  DrawerButtonContainer,
  DrawerContainer,
  DrawerTitle,
  ExpandableRowUrlContainer,
  ExpandedRowContent,
  HeadingContainer,
  PaginationContainer,
  SearchContainer,
  TableContainer,
  TitleRow,
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
    handleDrawerClose,
    rowHistorySelection,
    paginatedHistoryData,
    handleHistoryNextPage,
    handleHistoryPrevPage,
    currentHistoryPage,
    totalHistoryPages
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
        title={
          <TitleRow>
            <DrawerTitle>History</DrawerTitle>
            <SearchContainer style={{ marginTop: 0 }}>
              <PaginationContainer>
                <div style={{ width: '100%', textAlign: 'end' }}>
                  <Button
                    onClick={handleHistoryPrevPage}
                    disabled={currentHistoryPage === 1}
                  >
                    {'<'}
                  </Button>
                  <span>
                    {currentHistoryPage} / {totalHistoryPages}
                  </span>
                  <Button
                    onClick={handleHistoryNextPage}
                    disabled={currentHistoryPage === totalHistoryPages}
                  >
                    {'>'}
                  </Button>
                </div>
              </PaginationContainer>
            </SearchContainer>
          </TitleRow>
        }
        placement="right"
        open={isDrawerVisible}
        width="50%"
        className="drawer"
      >
        <DrawerContainer>
          <TableContainer className="table">
            <AntTable
              rowSelection={rowHistorySelection}
              columns={historyColumns}
              dataSource={paginatedHistoryData}
              scroll={{ x: true }}
              expandable={{
                expandedRowRender: () => (
                  <div
                    style={{
                      padding: '10px',
                      display: 'flex',
                      alignItems: 'start',
                      justifyContent: 'start',
                      gap: '10px'
                    }}
                  >
                    <Image src={Qrcode} alt="Logo" />
                    <ExpandedRowContent>
                      <div>
                        The design trip
                        <span>d896393c-7ad4-44b8-a44a-32bd3635</span>
                      </div>
                      <ExpandableRowUrlContainer>
                        URL{' '}
                        <Input size="large" placeholder="Credential Password" />
                      </ExpandableRowUrlContainer>
                    </ExpandedRowContent>
                  </div>
                ),
                expandIcon: ({ expanded, onExpand, record }) => (
                  <span
                    onClick={e => onExpand(record, e)}
                    style={{ cursor: 'pointer', fontSize: 16 }}
                  >
                    <Image
                      src={expanded ? ArrowDown : ArrowUp}
                      alt="Project Logo"
                      style={{ height: '15px', width: '15px' }}
                    />
                  </span>
                )
              }}
              pagination={false}
            />
          </TableContainer>
          <DrawerButtonContainer style={{ marginTop: '20px' }}>
            <Button onClick={handleDrawerClose}>{'Cancel'}</Button>
            <Button onClick={handleDrawerClose}>{'Add Record'}</Button>
          </DrawerButtonContainer>
        </DrawerContainer>
      </Drawer>
    </>
  )
}

export default VerificationView
