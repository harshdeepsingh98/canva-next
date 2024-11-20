/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import Image from 'next/image'
import { Button, message, TableColumnsType, Upload, UploadProps } from 'antd'
import Plus from 'images/png/AddCircle.png'
import CardImage from 'images/png/CardImage.png'
import View from 'images/svg/View'
import Duplicate from 'images/svg/CredentialDuplicate'
import Edit from 'images/png/Edit.png'
import Trash from 'images/png/Trash.png'
import {
  ActionContainer,
  ButtonContainer,
  CardButtonContainer,
  CardDescription
} from 'styles/views/issuanace'

export const props: UploadProps = {
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

export const cardsData = [
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

//table 1

export interface DataType {
  key: React.Key
  Schema: string
  Created: string
  CreatedOn: string
  Updated: string
  Action: React.ReactNode
}

export const columns: TableColumnsType<DataType> = [
  { title: 'Schema Name', dataIndex: 'Schema' },
  { title: 'Created By', dataIndex: 'Created' },
  { title: 'Created On', dataIndex: 'CreatedOn' },
  { title: 'Last Updated', dataIndex: 'Updated' },
  { title: 'Action', dataIndex: 'Action' }
]

export const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>(
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

//2nd table
export interface AddRecordDataType {
  key: React.Key
  Recipient: string
  Employee: string
  Job: string
  DOB: string
  Email: string
  Employer: string
  Action: React.ReactNode
}

export const addRecordColumns: TableColumnsType<AddRecordDataType> = [
  { title: 'Recipient Email', dataIndex: 'Recipient' },
  { title: 'Employee Name', dataIndex: 'Employee' },
  { title: 'Job Role', dataIndex: 'Job' },
  { title: 'DOB', dataIndex: 'DOB' },
  { title: 'Email Id', dataIndex: 'Email' },
  { title: 'Employee ID', dataIndex: 'Employer' },
  { title: 'Action', dataIndex: 'Action' }
]

export const addRecorddataSource = Array.from<AddRecordDataType>({
  length: 3
}).map<AddRecordDataType>((_, i) => ({
  key: i,
  Recipient: `aakanksham...`,
  Employee: 'numan@gma...',
  Job: `UIUX Desi...`,
  DOB: '08/05/2024',
  Email: 'numan@gma...',
  Employer: 'DC98408...',
  Action: (
    <ActionContainer>
      <Image src={Trash} width={16} height={16} alt="Remove" />
      <Image src={Edit} width={16} height={16} alt="Edit" />
    </ActionContainer>
  )
}))

//3rd table
export interface MessageDataType {
  key: React.Key
  Name: string
  Email: string
  DID: string
}

export const messageColumns: TableColumnsType<MessageDataType> = [
  { title: 'Recipients Name', dataIndex: 'Name' },
  { title: 'Recipients Email ID', dataIndex: 'Email' },
  { title: 'Recipients DID', dataIndex: 'DID' }
]

export const messagedataSource = Array.from<MessageDataType>({
  length: 50
}).map<MessageDataType>((_, i) => ({
  key: i,
  Name: `Rushikesh Baikare`,
  Email: 'rushib12@gmail...',
  DID: `did:xstudio:982:Z...`
}))
