/* eslint-disable no-unused-vars */
import Image from 'next/image'
import { Dropdown, TableProps } from 'antd'
import Archive from 'images/svg/Archive'
import Delete from 'images/svg/Delete'
import Edit from 'images/svg/Edit'
import View from 'images/svg/View'
import Dot from 'images/svg/Dot'
import MenuIcon from 'images/png/Menu.png'
import { IconContainer, StyledTag } from 'styles/views/verification'

export type TableRowSelection<T extends object = object> =
  TableProps<T>['rowSelection']

// export const tableMenu: MenuProps['items'] = [
//   { key: '1', label: 'Edit Details', icon: <Edit /> },
//   { key: '3', label: 'Request', icon: <Archive /> },
//   { key: '4', label: 'History', icon: <View /> },
//   { key: '2', label: 'Delete', icon: <Delete /> }
// ]
export interface DataType {
  key: React.Key
  Name: string
  Template: string
  Request: string
  Date: string
  Action: React.ReactNode
}

export interface HistoryDataType {
  key: React.Key
  Verification: string
  Holder: string
  Status: React.ReactNode
  Created: string
  Verify: string
  Action: React.ReactNode
}

export const columns = [
  { title: 'Name', dataIndex: 'Name' },
  { title: 'Template ID', dataIndex: 'Template' },
  { title: 'Total Request', dataIndex: 'Request' },
  { title: 'Date Created', dataIndex: 'Date' },
  { title: '', dataIndex: 'Action' }
]

export const historyColumns = [
  { title: 'Verification ID', dataIndex: 'Verification' },
  { title: 'Holder Name', dataIndex: 'Holder' },
  { title: 'Status', dataIndex: 'Status' },
  { title: 'Created On', dataIndex: 'Created' },
  { title: 'Verify DID', dataIndex: 'Verify' },
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

export const historyDataSource = () => {
  return Array.from<HistoryDataType>({ length: 46 }).map<HistoryDataType>(
    (_, i) => {
      const rowData: HistoryDataType = {
        key: i,
        Verification: `b43t34nkl34kn3k4l...`,
        Holder: 'Utkarsh Bafna',
        Status: (
          <StyledTag color="fail" icon={<Dot />}>
            success
          </StyledTag>
        ),
        Created: '04 May 2024',
        Verify: 'b43t34nkl34kn3k4l...',
        Action: <></>
      }

      return rowData
    }
  )
}
