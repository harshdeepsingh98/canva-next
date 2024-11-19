/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useRef, useState } from 'react'
import Image from 'next/image'
import {
  Button,
  Card,
  Checkbox,
  CheckboxProps,
  Input,
  message,
  Select,
  Space,
  TableColumnsType,
  Upload,
  UploadProps
} from 'antd'
import Table from 'components/Table'
import View from 'images/svg/View'
import Duplicate from 'images/svg/CredentialDuplicate'
import Trash from 'images/png/Trash.png'
import Plus from 'images/png/AddCircle.png'
import CardImage from 'images/png/CardImage.png'
import AddField from 'images/png/AddField.png'
import CloseIcon from 'images/png/CloseIcon.png'
import SearchImg from 'images/svg/Search'
import {
  ActionContainer,
  AddFieldContainer,
  BorderBottom,
  ButtonContainer,
  CardButtonContainer,
  CardContainer,
  CardDescription,
  CheckboxContainer,
  ContentContainer,
  CreateSchemaContainer,
  CredentialContainerAttribute,
  DescriptionContainer,
  DetailsContainer,
  DragandDropButtonContainer,
  DragandDropContainer,
  HeadingContainer,
  InputContainer,
  SearchContainer,
  SelectDesignContainer,
  SelectSchemaContainer,
  TableContainer,
  TitleContainer
} from 'styles/views/issuanace'

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  beforeUpload: file => {
    const isJson =
      file.type === 'application/json' || file.name.endsWith('.json')
    if (!isJson) {
      message.error('You can only upload JSON files!')
    }

    return isJson || Upload.LIST_IGNORE // Ignore the file if it's not JSON
  },
  onChange(info) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files)
  }
}

interface DataType {
  key: React.Key
  Schema: string
  Created: string
  CreatedOn: string
  Updated: string
  Action: React.ReactNode
}

const columns: TableColumnsType<DataType> = [
  { title: 'Schema Name', dataIndex: 'Schema' },
  { title: 'Created By', dataIndex: 'Created' },
  { title: 'Created On', dataIndex: 'CreatedOn' },
  { title: 'Last Updated', dataIndex: 'Updated' },
  { title: 'Action', dataIndex: 'Action' }
]

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>(
  (_, i) => ({
    key: i,
    Schema: `Offer Letter`,
    Created: 'Utkarsh Bafna',
    CreatedOn: `08 May 2024`,
    Updated: '15 June 2024',
    Action: (
      <ActionContainer>
        <ButtonContainer>
          <View />
          View
        </ButtonContainer>
        <ButtonContainer className="primary">
          <Duplicate />
          Duplicate
        </ButtonContainer>
      </ActionContainer>
    )
  })
)

const cardsData = [
  {
    img: Plus,
    description: (
      <CardDescription>
        Create a new design
        <span>
          Create a unique credential design using design templates. You can add
          image, logo and change the fonts.
        </span>
      </CardDescription>
    )
  },
  {
    img: CardImage, // Replace with actual image path
    description: (
      <CardDescription>
        Certificate Design
        <span>Design description will be shown here... </span>
      </CardDescription>
    ),
    button: (
      <CardButtonContainer>
        <Button>{'Preview'}</Button>
        <Button>{'Add to Space'}</Button>
      </CardButtonContainer>
    ) // Replace with your button component
  },
  {
    img: CardImage, // Replace with actual image path
    description: (
      <CardDescription>
        Drivers License
        <span>Design description will be shown here...</span>
      </CardDescription>
    ),
    button: (
      <CardButtonContainer>
        <Button>{'Preview'}</Button>
        <Button>{'Add to Space'}</Button>
      </CardButtonContainer>
    ) // Replace with your button component
  },
  {
    img: CardImage, // Replace with actual image path
    description: (
      <CardDescription>
        Identity Card
        <span>Design description will be shown here...</span>
      </CardDescription>
    ),
    button: (
      <CardButtonContainer>
        <Button>{'Preview'}</Button>
        <Button>{'Add to Space'}</Button>
      </CardButtonContainer>
    ) // Replace with your button component
  }
]

const useIssuanaceLogic = () => {
  const { TextArea, Search } = Input
  const { Dragger } = Upload

  const [currentPage, setCurrentPage] = useState(1)
  const [isCreatingSchema, setIsCreatingSchema] = useState(false)
  const [current, setCurrent] = useState(0)
  const [showManualSchema, setShowManualSchema] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const pageSize = 10 // Adjust page size if needed
  const totalPages = Math.ceil(dataSource.length / pageSize)

  const handleUploadJsonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click() // Trigger file input click
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.type !== 'application/json') {
        message.error('You can only upload JSON files.')
        e.target.value = ''
        return
      }

      // Handle the valid JSON file
      console.log('File selected:', file)
    }
  }

  const handleCreateSchemaManuallyClick = () => {
    setShowManualSchema(true) // Show manual schema component
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleCreateSchemaClick = () => {
    setIsCreatingSchema(true) // Show the create schema view
  }

  const handleSelectChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const paginatedData = dataSource.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancelModal = () => {
    setIsModalOpen(false)
  }

  const next = () => {
    setCurrent(current + 1)
    setIsCreatingSchema(false)
    setShowManualSchema(false)
  }

  const prev = () => {
    setCurrent(current - 1)
    setIsCreatingSchema(false)
    setShowManualSchema(false)
  }

  const handleCancel = () => {
    // Handle cancel logic (e.g., navigate back, reset the form, etc.)
    console.log('Canceled')
  }

  const onChange: CheckboxProps['onChange'] = e => {
    console.log(`checked = ${e.target.checked}`)
  }

  const steps = [
    {
      title: 'Space Details',
      content: (
        <DetailsContainer>
          <ContentContainer>
            <DescriptionContainer>
              Space Name*
              <span>
                A Unique name to Identify your space on the Dashboard. It can be
                the name of the your credential you want to issue.
              </span>
            </DescriptionContainer>
            <InputContainer>
              <Input placeholder="eg John Smith" />
            </InputContainer>
          </ContentContainer>
          <ContentContainer>
            <DescriptionContainer>
              Space Description{' '}
              <span>
                A description of space’s purpose. Space Name & Description Can
                Be Made Publicly Visible During Verification.
              </span>
            </DescriptionContainer>
            <InputContainer>
              <TextArea
                placeholder="Description"
                autoSize={{ minRows: 2, maxRows: 6 }}
              />
            </InputContainer>
          </ContentContainer>
          <ContentContainer>
            <DescriptionContainer>
              Do you want to show space details during verification?
              <CheckboxContainer>
                <Checkbox onChange={onChange}>
                  Show Space name & description
                </Checkbox>
                <Checkbox onChange={onChange}>Add Website URL</Checkbox>
              </CheckboxContainer>
            </DescriptionContainer>
            <InputContainer>
              <Space direction="vertical" size="middle">
                <Space.Compact>
                  <Search
                    addonBefore="https://"
                    placeholder="input search text"
                    allowClear
                  />
                </Space.Compact>
              </Space>
            </InputContainer>
          </ContentContainer>
          <ContentContainer>
            <DescriptionContainer>
              Space Tags{' '}
              <span>Increase the discoverability of this credential</span>
            </DescriptionContainer>
            <InputContainer>
              <Input placeholder="Add a Tag (Click Enter to add tag to the list)" />
            </InputContainer>
          </ContentContainer>
        </DetailsContainer>
      )
    },
    {
      title: 'Select Schema',
      content: isCreatingSchema ? (
        <CreateSchemaContainer>
          <HeadingContainer>Create a Credential schema</HeadingContainer>
          <ContentContainer>
            <DescriptionContainer>
              Schema Name
              <span>
                Schema name is the name for the template. Everyone who views the
                credential can see it.
              </span>
            </DescriptionContainer>
            <InputContainer>
              <Input placeholder="Experience letter" />
            </InputContainer>
          </ContentContainer>
          <ContentContainer>
            <DescriptionContainer>
              Schema Description
              <span>
                A description of space’s purpose. Although not required, doing
                this is advised.
              </span>
            </DescriptionContainer>
            <InputContainer>
              <TextArea
                placeholder="Schema will be use to create experience letter credential"
                autoSize={{ minRows: 2, maxRows: 6 }}
              />
            </InputContainer>
          </ContentContainer>
          <ContentContainer>
            <DescriptionContainer>
              Credential Attributes
              <span>Add attributes that is required in schema.</span>
            </DescriptionContainer>
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
                    <Checkbox onChange={onChange}>Request Info</Checkbox>
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
                    <p className="ant-upload-hint">
                      Drag & Drop files here or <br />
                      Click on Upload JSON
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
        </CreateSchemaContainer>
      ) : (
        <SelectSchemaContainer>
          <HeadingContainer>
            Select a Credential Schema{' '}
            <span>
              A schema serves as a template for credentials used by issuers and
              verifiers It contains certain credential details like name,
              license number, date of issue, etc
            </span>
          </HeadingContainer>
          <SearchContainer>
            <Input
              size="large"
              placeholder="Search for spaces"
              prefix={<SearchImg />}
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
              selectedRowKeys={[]}
              rowSelection={null}
              columns={columns}
              dataSource={paginatedData}
            />
          </TableContainer>
        </SelectSchemaContainer>
      )
    },
    {
      title: 'Select Design',
      content: (
        <SelectDesignContainer>
          <HeadingContainer>
            Select a Design
            <span>
              Create a new design or select from existing options for your
              credentials. If you prefer, you can continue without a design.
            </span>
          </HeadingContainer>
          <CardContainer>
            {cardsData.map((card, index) => (
              <Card
                key={index}
                hoverable
                style={{ width: 240 }}
                cover={
                  <Image
                    src={card.img}
                    alt={`Card image ${index + 1}`}
                    width={240}
                    height={160} // Adjust dimensions as needed
                  />
                }
              >
                {card.description}
                {card.button && <div>{card.button}</div>}
              </Card>
            ))}
          </CardContainer>
        </SelectDesignContainer>
      )
    },
    {
      title: 'Add Records',
      content: 'Last-content'
    },
    {
      title: 'Send Credentials',
      content: 'Last-content'
    }
  ]

  const items = steps.map(item => ({ key: item.title, title: item.title }))

  return {
    items,
    steps,
    current,
    isCreatingSchema,
    isModalOpen,
    handleOk,
    handleCancelModal,
    showModal,
    handleCancel,
    next,
    prev,
    handleCreateSchemaClick,
    setIsCreatingSchema,
    setShowManualSchema
  }
}

export default useIssuanaceLogic
