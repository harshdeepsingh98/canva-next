import { Button, Input } from 'antd'
import useVerificationLogic from 'utils/customHooks/verification'
import { columns } from 'utils/customHooks/verification/verificationData'
import Table from 'components/Table'
import Search from 'images/svg/Search'
import {
  ButtonContainer,
  HeadingContainer,
  PaginationContainer,
  SearchContainer,
  TableContainer
} from 'styles/views/verification'

const VerificationView: React.FC = () => {
  const {
    handleNextPage,
    handlePrevPage,
    currentPage,
    totalPages,
    rowSelection,
    selectedRowKeys,
    paginatedData
  } = useVerificationLogic()
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
            <Button>{'Verify JSON'}</Button>
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
    </>
  )
}

export default VerificationView
