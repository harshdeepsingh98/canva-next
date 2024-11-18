import React from 'react'
import { Tabs, Input, Button } from 'antd'
import useCredentialsLogic from 'utils/customHooks/credentials'
import Table from 'components/Table'
import Search from 'images/svg/Search'
import {
  DescriptionContainer,
  Description,
  Number,
  Title,
  TabContainer,
  SearchContainer,
  TableContainer
} from 'styles/views/credentials'

const CredentialsView: React.FC = () => {
  const {
    detail,
    currentPage,
    totalPages,
    handlePrevPage,
    handleNextPage,
    paginatedData,
    rowSelection,
    selectedRowKeys,
    columns
  } = useCredentialsLogic()

  return (
    <>
      <DescriptionContainer>
        {detail.map((detail, i) => (
          <Description key={i}>
            <Number>{detail.number}</Number>
            <Title>{detail.title}</Title>
          </Description>
        ))}
      </DescriptionContainer>
      <TabContainer>
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: 'Spaces',
              key: '1'
            },

            {
              label: 'Archive',
              key: '2'
            }
          ]}
        />
      </TabContainer>
      <SearchContainer>
        <Input
          size="large"
          placeholder="Search for spaces"
          prefix={<Search />}
        />
        <div style={{ flex: 1, textAlign: 'end' }}>
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
      </SearchContainer>
      <TableContainer>
        <Table
          selectedRowKeys={selectedRowKeys}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={paginatedData}
        />
      </TableContainer>
    </>
  )
}

export default CredentialsView
