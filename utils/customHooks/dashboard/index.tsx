/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Dropdown, TableColumnsType, TableProps } from 'antd'
import Image from 'next/image'
import Plus from 'images/png/AddCircle.png'
import MenuIcon from 'images/png/Menu.png'
import Edit from 'images/svg/Edit'
import Archive from 'images/svg/Archive'
import Delete from 'images/svg/Delete'
import View from 'images/svg/View'
import { MenuProps } from 'antd'
import {
  ActionContainer,
  ButtonContainer,
  IconContainer
} from 'styles/views/dashboard'

type TableRowSelection<T extends object = object> =
  TableProps<T>['rowSelection']

export interface DataType {
  key: React.Key
  Credential: string
  Created: string
  CreatedOn: string
  Schema: string
  Records: number
  Issued: number
  Revoked: number
  Action: React.ReactNode
}

const useDashboardLogic = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10 // Adjust page size if needed
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const showLoading = () => {
    setOpen(true)
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const detail = [
    { number: '09', title: 'Spaces' },
    { number: '09', title: 'Credentials' },
    { number: '09', title: 'Organizations' },
    { number: '09', title: 'Schemas' }
  ]

  const tableMenu: MenuProps['items'] = [
    { key: '1', label: 'Edit Details', icon: <Edit /> },
    { key: '2', label: 'Delete', icon: <Delete /> },
    { key: '3', label: 'Archive', icon: <Archive /> },
    { key: '4', label: 'View', icon: <View /> }
  ]

  const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>(
    (_, i) => ({
      key: i,
      Credential: `Offer Letter`,
      Created: 'Utkarsh Bafna',
      CreatedOn: `08 May 2024`,
      Schema: 'Offer Letter Sche...',
      Records: 32,
      Issued: 32,
      Revoked: 32,
      Action: (
        <ActionContainer>
          <ButtonContainer onClick={showLoading}>
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
    })
  )

  const columns: TableColumnsType<DataType> = [
    { title: 'Credential Title', dataIndex: 'Credential' },
    { title: 'Created By', dataIndex: 'Created' },
    { title: 'Created On', dataIndex: 'CreatedOn' },
    { title: 'Schema Type', dataIndex: 'Schema' },
    { title: 'Records', dataIndex: 'Records' },
    { title: 'Issued', dataIndex: 'Issued' },
    { title: 'Revoked', dataIndex: 'Revoked' },
    { title: 'Action', dataIndex: 'Action' }
  ]

  const totalPages = Math.ceil(dataSource.length / pageSize)

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const paginatedData = dataSource.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  useEffect(() => {
    const htmlElement = document.documentElement

    if (open) {
      htmlElement.classList.add('no-scroll')
    } else {
      htmlElement.classList.remove('no-scroll')
    }

    return () => {
      htmlElement.classList.remove('no-scroll')
    }
  }, [open])

  return {
    open,
    setOpen,
    loading,
    detail,
    currentPage,
    totalPages,
    handlePrevPage,
    handleNextPage,
    paginatedData,
    rowSelection,
    tableMenu,
    columns,
    selectedRowKeys
  }
}

export default useDashboardLogic
