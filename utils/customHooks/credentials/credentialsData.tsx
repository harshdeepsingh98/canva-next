/* eslint-disable no-unused-vars */
import React from 'react'
import Image from 'next/image'
import { Dropdown, MenuProps } from 'antd'
import { DataType } from 'utils/customHooks/credentials'
import Edit from 'images/svg/Edit'
import Archive from 'images/svg/Archive'
import Delete from 'images/svg/Delete'
import View from 'images/svg/View'
import Plus from 'images/png/AddCircle.png'
import MenuIcon from 'images/png/Menu.png'
import {
  ActionContainer,
  ButtonContainer,
  IconContainer
} from 'styles/views/credentials'

export const detail = [
  { number: '09', title: 'Issued' },
  { number: '09', title: 'Pending' },
  { number: '09', title: 'Revoked' },
  { number: '09', title: 'Downloads' }
]

export const tableMenu: MenuProps['items'] = [
  { key: '1', label: 'Edit Details', icon: <Edit /> },
  { key: '2', label: 'Delete', icon: <Delete /> },
  { key: '3', label: 'Archive', icon: <Archive /> },
  { key: '4', label: 'View', icon: <View /> }
]

export const dataSource = () => {
  return Array.from<DataType>({ length: 46 }).map<DataType>((_, i) => {
    const rowData: DataType = {
      key: i,
      Credential: `Offer Letter ${i + 1}`, // Added dynamic values for demo
      Created: 'Utkarsh Bafna',
      CreatedOn: `08 May 2024`,
      Schema: 'Offer Letter Sche...',
      Records: 32,
      Issued: 32,
      Revoked: 32,
      Action: (
        <ActionContainer>
          <ButtonContainer>
            <Image
              src={Plus}
              alt={`Plus`}
              width={20} // specify width
              height={20} // specify height
            />
            Add Record
          </ButtonContainer>
          <IconContainer>
            <Dropdown menu={{ items: tableMenu }}>
              <Image
                src={MenuIcon}
                alt={`MenuIcon`}
                width={20} // specify width
                height={20} // specify height
              />
            </Dropdown>
          </IconContainer>
        </ActionContainer>
      )
    }

    return rowData
  })
}

export const columns = [
  { title: 'Credential Title', dataIndex: 'Credential' },
  { title: 'Created By', dataIndex: 'Created' },
  { title: 'Created On', dataIndex: 'CreatedOn' },
  { title: 'Schema Type', dataIndex: 'Schema' },
  { title: 'Records', dataIndex: 'Records' },
  { title: 'Issued', dataIndex: 'Issued' },
  { title: 'Revoked', dataIndex: 'Revoked' },
  { title: 'Action', dataIndex: 'Action' }
]
