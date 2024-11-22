/* eslint-disable no-unused-vars */
import Image from 'next/image'
import { Dropdown, TableProps } from 'antd'
import Archive from 'images/svg/Archive'
import Delete from 'images/svg/Delete'
import Edit from 'images/svg/Edit'
import View from 'images/svg/View'
import MenuIcon from 'images/png/Menu.png'
import { IconContainer } from 'styles/views/verification'

export type TableRowSelection<T extends object = object> =
  TableProps<T>['rowSelection']

export interface DataType {
  key: React.Key
  Name: string
  Template: string
  Request: string
  Date: string
  Action: React.ReactNode
}

// export const tableMenu: MenuProps['items'] = [
//   { key: '1', label: 'Edit Details', icon: <Edit /> },
//   { key: '3', label: 'Request', icon: <Archive /> },
//   { key: '4', label: 'History', icon: <View /> },
//   { key: '2', label: 'Delete', icon: <Delete /> }
// ]

export const columns = [
  { title: 'Name', dataIndex: 'Name' },
  { title: 'Template ID', dataIndex: 'Template' },
  { title: 'Total Request', dataIndex: 'Request' },
  { title: 'Date Created', dataIndex: 'Date' },
  { title: '', dataIndex: 'Action' }
]

export const dataSource = (handleHistoryClick: () => void) => {
  return Array.from<DataType>({ length: 46 }).map<DataType>((_, i) => {
    const rowData: DataType = {
      key: i,
      Name: `Basic Credential`,
      Template: '998179f2-8db5-4396-9898-9804',
      Request: `02`,
      Date: '04 May 2024',
      Action: (
        <IconContainer>
          <Dropdown
            menu={{
              items: [
                { key: '1', label: 'Edit Details', icon: <Edit /> },
                { key: '3', label: 'Request', icon: <Archive /> },
                {
                  key: '4',
                  label: 'History',
                  icon: <View />,
                  onClick: handleHistoryClick
                },
                { key: '2', label: 'Delete', icon: <Delete /> }
              ]
            }}
          >
            <Image
              src={MenuIcon}
              alt={`MenuIcon`}
              width={20} // specify width
              height={20} // specify height
            />
          </Dropdown>
        </IconContainer>
      )
    }

    return rowData
  })
}
