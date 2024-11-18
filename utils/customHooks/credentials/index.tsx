/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { TableProps } from 'antd'
import {
  detail,
  tableMenu,
  dataSource,
  columns
} from 'utils/customHooks/credentials/credentialsData'

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

const useCredentialsLogic = () => {
  const pageSize = 10

  const [currentPage, setCurrentPage] = useState(1)
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const updatedDataSource = dataSource()

  const totalPages = Math.ceil(updatedDataSource.length / pageSize)

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const paginatedData = updatedDataSource.slice(
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

  return {
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

export default useCredentialsLogic
