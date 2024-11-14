import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tabs, Input, Button, Drawer } from 'antd'
import { hideOpen } from 'reduxStore/slices/loadingSlice'
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
  const dispatch = useDispatch()
  const loading = useSelector(
    (state: { loading: { loading: boolean } }) => state.loading.loading
  )
  const {
    open,
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

  const handleCloseDrawer = () => {
    // Dispatch hideOpen action to close the drawer
    dispatch(hideOpen())
  }

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
            <Button onClick={handleCloseDrawer}>{'Cancel'}</Button>
            <Button>{'Add Record'}</Button>
          </DrawerButtonContainer>
        </DrawerContainer>
      </Drawer>
    </>
  )
}

export default DashboardView
