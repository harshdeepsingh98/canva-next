/* eslint-disable no-unused-vars */
import React from 'react'
import Image from 'next/image'
import { Dropdown, MenuProps } from 'antd'
import { DataType, SecondDataType } from 'utils/customHooks/credentials'
import Edit from 'images/svg/Edit'
import Archive from 'images/svg/Archive'
import Delete from 'images/svg/Delete'
import View from 'images/svg/View'
import Dot from 'images/svg/Dot'
import Download from 'images/svg/Download'
import Copy from 'images/svg/Copy'
import Reshare from 'images/svg/Reshare'
import Trash from 'images/svg/Trash'
import Plus from 'images/png/AddCircle.png'
import Revoke from 'images/png/Revoke.png'
import MenuIcon from 'images/png/Menu.png'
import {
  ActionContainer,
  ButtonContainer,
  IconContainer,
  StyledTag
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

//table 2

export const secondtableMenu: MenuProps['items'] = [
  { key: '1', label: 'Download', icon: <Download /> },
  { key: '2', label: 'Copy Credential ID', icon: <Copy /> },
  { key: '3', label: 'Reshare', icon: <Reshare /> },
  { key: '4', label: 'Delete', icon: <Trash /> }
]

export const secondcolumns = [
  { title: 'Recipients Name', dataIndex: 'Name' },
  { title: 'Recipients Email ID', dataIndex: 'Email' },
  { title: 'Issuer ID', dataIndex: 'Issuer' },
  { title: 'Status', dataIndex: 'Status' },
  { title: 'Created On', dataIndex: 'CreatedOn' },
  { title: 'Expires At', dataIndex: 'ExpiresAt' },
  { title: 'Action', dataIndex: 'Action' }
]

export const seconddataSource = () => {
  return Array.from<SecondDataType>({ length: 46 }).map<SecondDataType>(
    (_, i) => {
      const rowData: SecondDataType = {
        key: i,
        Name: `Rushikesh Baikare`,
        Email: 'rushib12@gmail...',
        Issuer: `did:xstudio:982:Z...`,
        Status: (
          <StyledTag color="fail" icon={<Dot />}>
            success
          </StyledTag>
        ),
        CreatedOn: '04 May 2024',
        ExpiresAt: '05 May 2028',
        Action: (
          <ActionContainer>
            <ButtonContainer style={{ borderRadius: '5px' }}>
              <Image
                src={Revoke}
                alt={`Plus`}
                width={20} // specify width
                height={20} // specify height
              />
              Revoke
            </ButtonContainer>
            <IconContainer>
              <Dropdown menu={{ items: secondtableMenu }}>
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
    }
  )
}

export const selectValues = [
  { value: 'Credentials', label: 'All Credentials' },
  { value: 'Issued', label: 'Issued' },
  { value: 'Revoked', label: 'Revoked' },
  { value: 'Drafts', label: 'Drafts' },
  { value: 'Requested', label: 'Requested' }
]
