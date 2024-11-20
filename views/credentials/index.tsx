import React from 'react'
import { Tabs, Input, Button, Space, Select, Drawer, Form } from 'antd'
import useCredentialsLogic from 'utils/customHooks/credentials'
import Table from 'components/Table'
import Search from 'images/svg/Search'
import Dot from 'images/svg/Dot'
import {
  DescriptionContainer,
  Description,
  Number,
  Title,
  TabContainer,
  SearchContainer,
  TableContainer,
  HeadingContainer,
  SelectContainer,
  PaginationContainer,
  DrawerTitle,
  DrawerContainer,
  DrawerButtonContainer,
  StyledTag
} from 'styles/views/credentials'

interface CredentialsViewProps {
  isDetailView: boolean
  onRowClick: () => void
}

const CredentialsView: React.FC<CredentialsViewProps> = ({
  isDetailView,
  onRowClick
}) => {
  const {
    detail,
    currentPage,
    totalPages,
    handlePrevPage,
    handleNextPage,
    paginatedData,
    rowSelection,
    selectedRowKeys,
    columns,
    handleChange,
    selectValues,
    secondSelectedRowKeys,
    secondRowSelection,
    secondcolumns,
    secondPaginatedData,
    handleSecondNextPage,
    handleSecondPrevPage,
    secondCurrentPage,
    secondTotalPages,
    drawerVisible,
    handleRowClick,
    handleCloseDrawer,
    form,
    formLayout,
    onFormLayoutChange
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
      {isDetailView ? (
        <HeadingContainer>All Credentials</HeadingContainer>
      ) : (
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
      )}

      <SearchContainer>
        <Input
          size="large"
          placeholder="Search for spaces"
          prefix={<Search />}
        />
        <PaginationContainer>
          <div>
            <Button
              onClick={isDetailView ? handleSecondPrevPage : handlePrevPage}
              disabled={
                isDetailView ? secondCurrentPage === 1 : currentPage === 1
              }
            >
              {'<'}
            </Button>
            <span>
              {isDetailView ? secondCurrentPage : currentPage} /
              {isDetailView ? secondTotalPages : totalPages}
            </span>
            <Button
              onClick={isDetailView ? handleSecondNextPage : handleNextPage}
              disabled={
                isDetailView
                  ? secondCurrentPage === secondTotalPages
                  : currentPage === totalPages
              }
            >
              {'>'}
            </Button>
          </div>
          {isDetailView && (
            <SelectContainer>
              <Space wrap>
                <Select
                  defaultValue="Credentails"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={selectValues}
                />
              </Space>
            </SelectContainer>
          )}
        </PaginationContainer>
      </SearchContainer>
      <TableContainer>
        <Table
          selectedRowKeys={
            isDetailView ? secondSelectedRowKeys : selectedRowKeys
          }
          rowSelection={isDetailView ? secondRowSelection : rowSelection}
          columns={isDetailView ? secondcolumns : columns}
          dataSource={isDetailView ? secondPaginatedData : paginatedData}
          onRowClick={isDetailView ? handleRowClick : onRowClick}
          isDetailView={isDetailView}
        />
      </TableContainer>
      <Drawer
        closable={false}
        destroyOnClose
        title={
          <>
            <SelectContainer style={{ marginLeft: 0, marginBottom: '20px' }}>
              <Space wrap>
                <Select
                  defaultValue="Credentails"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={selectValues}
                />
              </Space>
            </SelectContainer>
            <DrawerTitle className="title">
              Experience Letter
              <StyledTag color="fail" icon={<Dot />}>
                success
              </StyledTag>
            </DrawerTitle>
          </>
        }
        placement="right"
        open={drawerVisible}
      >
        <DrawerContainer>
          <Form
            layout={formLayout}
            form={form}
            initialValues={{ layout: formLayout }}
            onValuesChange={onFormLayoutChange}
            style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
          >
            <Form.Item label="Name">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Email ID">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Employee ID">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Subject ID">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Issued On">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <DrawerButtonContainer>
              <Button onClick={handleCloseDrawer}>{'Cancel'}</Button>
              <Button onClick={handleCloseDrawer}>{'Edit'}</Button>
            </DrawerButtonContainer>
          </Form>
        </DrawerContainer>
      </Drawer>
    </>
  )
}

export default CredentialsView
