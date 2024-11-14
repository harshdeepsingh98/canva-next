import React from 'react'
import { Tabs, Input, Button, Drawer } from 'antd'
import useDashboardLogic from 'utils/customHooks/dashboard'
import Table from 'components/Table'
import Search from 'images/svg/Search'
import {
  DescriptionContainer,
  Description,
  Number,
  Title,
  TabContainer,
  SearchContainer,
  TableContainer,
  DrawerTitle,
  DrawerContainer,
  DrawerButtonContainer
} from 'styles/views/dashboard'

const DashboardView: React.FC = () => {
  const {
    open,
    setOpen,
    loading,
    detail,
    currentPage,
    totalPages,
    handlePrevPage,
    handleNextPage,
    paginatedData,
    rowSelection,
    selectedRowKeys,
    columns
  } = useDashboardLogic()

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
              key: '3'
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
      <Drawer
        closable={false}
        destroyOnClose
        title={<DrawerTitle>Add Record</DrawerTitle>}
        placement="right"
        open={open}
        loading={loading}
      >
        <DrawerContainer>
          <p>Some contents...</p>
          <DrawerButtonContainer>
            <Button onClick={() => setOpen(false)}>{'Cancel'}</Button>
            <Button>{'Add Record'}</Button>
          </DrawerButtonContainer>
        </DrawerContainer>
      </Drawer>
    </>
  )
}

export default DashboardView
