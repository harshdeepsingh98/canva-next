import Image from 'next/image'
import { Button, Input, Modal } from 'antd'
import { Upload } from 'antd'
import useSchemasLogic from 'utils/customHooks/schemas'
import Table from 'components/Table'
import Search from 'images/svg/Search'
import Noschema from 'images/svg/NoSchema'
import Plus from 'images/png/AddCircle.png'
import {
  SearchContainer,
  TableContainer,
  HeadingContainer,
  NoSchemaContainer,
  NoSchemaImageContainer,
  NoSchemaDescriptionContainer,
  NoSchemaButtonContainer,
  DragandDropButtonContainer
} from 'styles/views/schemas'

const { Dragger } = Upload

const SchemasView: React.FC = () => {
  const {
    props,
    currentPage,
    totalPages,
    handlePrevPage,
    handleNextPage,
    paginatedData,
    rowSelection,
    selectedRowKeys,
    columns,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    isFileUploaded
  } = useSchemasLogic()
  return (
    <>
      {paginatedData.length === 0 ? (
        <NoSchemaContainer>
          <NoSchemaImageContainer>
            <Noschema />
          </NoSchemaImageContainer>
          <NoSchemaDescriptionContainer>
            No Schemas Found !
            <span>
              Please Create schemas to create spaces, You can either create
              manually or Import JSON File.
            </span>
          </NoSchemaDescriptionContainer>
          <NoSchemaButtonContainer>
            <Button>{'Create manually'}</Button>
            <Button onClick={handleOpenModal}>{'Import JSON File'}</Button>
          </NoSchemaButtonContainer>
        </NoSchemaContainer>
      ) : (
        <>
          {' '}
          <HeadingContainer>All Schemas</HeadingContainer>
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
      )}
      <Modal
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
        centered
        closable={false}
      >
        <div style={{ fontWeight: '600', marginBottom: '10px' }}>
          Import JSON{' '}
        </div>
        <Dragger {...props} listType="picture">
          <p>
            <Image
              src={Plus}
              alt={`Plus`}
              width={20} // specify width
              height={20} // specify height
            />
          </p>
          <p className="ant-upload-text">
            Drag & Drop files here or <br />
            Click Here to import JSON file
          </p>
        </Dragger>
        <DragandDropButtonContainer>
          <Button onClick={handleCloseModal}>{'Cancel'}</Button>
          <Button disabled={!isFileUploaded}>{'Add Schema'}</Button>
        </DragandDropButtonContainer>
      </Modal>
    </>
  )
}

export default SchemasView
