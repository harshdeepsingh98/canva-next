/* eslint-disable no-unused-vars */
import Image from 'next/image'
import View from 'images/png/View.png'
import Admin from 'images/png/Admin.png'
import Issuer from 'images/png/Issuer.png'
import Trash from 'images/png/Trash.png'
import { Select, Space, TableColumnsType } from 'antd'

export const options = [
  {
    value: 'Issuer',
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src={Issuer} alt="Project Logo" />
        Issuer
      </div>
    )
  },
  {
    value: 'Admin',
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src={Admin} alt="Project Logo" />
        Admin
      </div>
    )
  },
  {
    value: 'Viewer',
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src={View} alt="Project Logo" />
        Viewer
      </div>
    )
  }
]

export interface DataType {
  key: React.Key
  Name: string
  DID: string
  EmailAddress: string
  Permissions: React.ReactNode
  Action: React.ReactNode
}

export const columns: TableColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'Name' },
  { title: 'DID', dataIndex: 'DID' },
  { title: 'Email Address', dataIndex: 'EmailAddress' },
  { title: 'Permissions', dataIndex: 'Permissions' },
  { title: 'Action', dataIndex: 'Action' }
]

export const dataSource = Array.from<DataType>({ length: 5 }).map<DataType>(
  (_, i) => ({
    key: i,
    Name: `Amar Salve`,
    DID: '12344214356678',
    EmailAddress: `Amarsalve2143@gmail.com`,
    Permissions: (
      <Space wrap>
        <Select
          defaultValue="Issuer"
          style={{ width: 250 }}
          onChange={() => {}}
          options={[
            {
              value: 'Issuer',
              label: 'Issuer'
            },
            {
              value: 'Admin',
              label: 'Admin'
            }
          ]}
        />
      </Space>
    ),
    Action: <Image src={Trash} alt="Project Logo" />
  })
)
