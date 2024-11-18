/* eslint-disable no-unused-vars */
import React from 'react'
import Image from 'next/image'
import { Dropdown, MenuProps } from 'antd'
import { DataType } from 'utils/customHooks/schemas'
import Edit from 'images/svg/Edit'
import Duplicate from 'images/svg/Duplicate'
import Delete from 'images/svg/Delete'
import View from 'images/svg/View'
import RightArrow from 'images/png/RightArrow.png'
import MenuIcon from 'images/png/Menu.png'
import {
  ActionContainer,
  ButtonContainer,
  IconContainer
} from 'styles/views/schemas'

export const tableMenu: MenuProps['items'] = [
  { key: '1', label: 'Edit Schema', icon: <Edit /> },
  { key: '2', label: 'Delete Schema', icon: <Delete /> },
  { key: '3', label: 'Duplicate', icon: <Duplicate /> },
  { key: '4', label: 'View', icon: <View /> }
]

export const dataSource = () => {
  return Array.from<DataType>({ length: 0 }).map<DataType>((_, i) => {
    const rowData: DataType = {
      key: i,
      Name: `Experience letter ${i + 1}`, // Added dynamic values for demo
      Published: 'Utkarsh Bafna',
      CreatedOn: `08 May 2024`,
      Action: (
        <ActionContainer>
          <ButtonContainer>
            <Image
              src={RightArrow}
              alt={`Plus`}
              width={20} // specify width
              height={20} // specify height
            />
            Issue with this
          </ButtonContainer>
        </ActionContainer>
      ),
      IconDropdown: (
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
      )
    }

    return rowData
  })
}

export const columns = [
  { title: 'Schema Name', dataIndex: 'Name' },
  { title: 'Published By', dataIndex: 'Published' },
  { title: 'Created On', dataIndex: 'CreatedOn' },
  { title: 'Action', dataIndex: 'Action' },
  { title: '', dataIndex: 'IconDropdown' }
]
