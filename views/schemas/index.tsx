import Image from 'next/image'
import { Button, Checkbox, Input, Modal, Select, Space } from 'antd'
import { Upload } from 'antd'
import useSchemasLogic from 'utils/customHooks/schemas'
import Table from 'components/Table'
import SearchIcon from 'images/svg/Search'
import Noschema from 'images/svg/NoSchema'
import Plus from 'images/png/AddCircle.png'
import CloseIcon from 'images/png/CloseIcon.png'
import Trash from 'images/png/Trash.png'
import AddField from 'images/png/AddField.png'
import FeatureIcon from 'images/png/FeaturedIcon.png'
import {
  SearchContainer,
  TableContainer,
  HeadingContainer,
  NoSchemaContainer,
  NoSchemaImageContainer,
  NoSchemaDescriptionContainer,
  NoSchemaButtonContainer,
  DragandDropButtonContainer,
  CreateCredentialsSchema,
  ContentContainer,
  CreateSchemaDescriptionContainer,
  InputContainer,
  DragandDropContainer,
  CredentialContainerAttribute,
  BorderBottom,
  AddFieldContainer,
  TitleContainer,
  BottomButtonContainer,
  PublishModalContainer,
  PublishModalHeadingContainer,
  PublishButtonContainer
} from 'styles/views/schemas'

const { Dragger } = Upload

const { TextArea } = Input

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
    isFileUploaded,
    isCreatingManually,
    handleBackToSchemas,
    handleCreateManually,
    showManualSchema,
    handleCreateSchemaManuallyClick,
    handleSelectChange,
    checkboxOnChange,
    fileInputRef,
    handleUploadJsonClick,
    handleFileChange,
    isPublishModalOpen,
    handleClosePublishModal,
    handlePublish,
    isIssueSchemaModalOpen,
    handleConfirmPublishModalModal
  } = useSchemasLogic()

  if (isCreatingManually) {
    return (
      <>
        <CreateCredentialsSchema>
          <HeadingContainer>Create a Credential schema</HeadingContainer>
          <ContentContainer>
            <CreateSchemaDescriptionContainer>
              Schema Name
              <span>
                Schema name is the name for the template. Everyone who views the
                credential can see it.
              </span>
            </CreateSchemaDescriptionContainer>
            <InputContainer>
              <Input placeholder="Experience letter" />
            </InputContainer>
          </ContentContainer>
          <ContentContainer>
            <CreateSchemaDescriptionContainer>
              Schema Description
              <span>
                A description of space’s purpose. Although not required, doing
                this is advised.
              </span>
            </CreateSchemaDescriptionContainer>
            <InputContainer>
              <TextArea
                placeholder="Schema will be use to create experience letter credential"
                autoSize={{ minRows: 2, maxRows: 6 }}
              />
            </InputContainer>
          </ContentContainer>
          <ContentContainer>
            <CreateSchemaDescriptionContainer>
              Credential Attributes
              <span>Add attributes that is required in schema.</span>
            </CreateSchemaDescriptionContainer>
            <DragandDropContainer>
              {showManualSchema ? (
                <>
                  <div
                    style={{
                      display: 'flex',
                      padding: '20px',
                      flexDirection: 'column',
                      gap: '10px'
                    }}
                  >
                    <CredentialContainerAttribute>
                      <InputContainer>
                        <Input placeholder="Name" />
                      </InputContainer>
                      <InputContainer>
                        <Space wrap>
                          <Select
                            defaultValue="lucy"
                            style={{ width: 120 }}
                            onChange={handleSelectChange}
                            options={[
                              { value: 'jack', label: 'Jack' },
                              { value: 'lucy', label: 'Lucy' },
                              { value: 'Yiminghe', label: 'yiminghe' },
                              {
                                value: 'disabled',
                                label: 'Disabled',
                                disabled: true
                              }
                            ]}
                          />
                        </Space>
                      </InputContainer>
                      <Image
                        src={Trash}
                        alt="Remove"
                        width={16}
                        height={16}
                        style={{
                          height: '18px',
                          width: '18px',
                          position: 'absolute',
                          right: '-20px'
                        }}
                      />
                    </CredentialContainerAttribute>
                    <InputContainer>
                      <TextArea
                        placeholder="Schema will be use to create experience letter credential"
                        autoSize={{ minRows: 2, maxRows: 6 }}
                      />
                    </InputContainer>
                    <Checkbox onChange={checkboxOnChange}>
                      Request Info
                    </Checkbox>
                    <BorderBottom />
                  </div>
                  <AddFieldContainer>
                    <Image src={AddField} alt="add-field" />
                    Add Field
                  </AddFieldContainer>
                </>
              ) : (
                <>
                  <TitleContainer>
                    You can choose to either import an existing JSON schema or
                    create a schema manually
                  </TitleContainer>
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
                          <Image
                            src={CloseIcon}
                            alt="Remove"
                            width={16}
                            height={16}
                          />
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
                    <p className="ant-upload-text">
                      Drag & Drop files here or <br />
                      Click Here to import JSON file
                    </p>
                  </Dragger>
                  <DragandDropButtonContainer>
                    <Button onClick={handleUploadJsonClick}>
                      {'Upload JSON'}
                    </Button>
                    <Button onClick={handleCreateSchemaManuallyClick}>
                      {'Create Manually'}
                    </Button>
                  </DragandDropButtonContainer>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                </>
              )}
            </DragandDropContainer>
          </ContentContainer>
        </CreateCredentialsSchema>
        <BottomButtonContainer>
          <Button onClick={handleBackToSchemas}>{'Cancel'}</Button>
          <Button onClick={() => {}}>{'Preview'}</Button>
          <Button onClick={handlePublish}>{'Publish'}</Button>
        </BottomButtonContainer>
        <Modal
          open={isPublishModalOpen}
          onCancel={handleClosePublishModal}
          footer={null}
          centered
          closable={isIssueSchemaModalOpen ? true : false}
        >
          <PublishModalContainer>
            {isIssueSchemaModalOpen && <Image src={FeatureIcon} alt="Remove" />}
            <PublishModalHeadingContainer>
              {isIssueSchemaModalOpen
                ? 'Schema created successfully'
                : 'Create Schema'}
              <span>
                {isIssueSchemaModalOpen
                  ? 'You have successfully created Experience Letter Schema'
                  : 'Are you sure you want to create Experience Letter Schema ?'}
              </span>
            </PublishModalHeadingContainer>
            <PublishButtonContainer>
              <Button
                onClick={
                  isIssueSchemaModalOpen ? () => {} : handleClosePublishModal
                }
              >
                {isIssueSchemaModalOpen ? 'Preview' : 'Cancel'}
              </Button>
              <Button
                onClick={
                  isIssueSchemaModalOpen
                    ? handleClosePublishModal
                    : handleConfirmPublishModalModal
                }
              >
                {isIssueSchemaModalOpen ? 'Issue with Schema' : 'Confirm'}
              </Button>
            </PublishButtonContainer>
          </PublishModalContainer>
        </Modal>
      </>
    )
  }

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
            <Button onClick={handleCreateManually}>{'Create manually'}</Button>
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
              prefix={<SearchIcon />}
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
