/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { TableProps } from 'antd'
import {
  detail,
  tableMenu,
  dataSource,
  columns,
  selectValues,
  seconddataSource,
  secondcolumns
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

export interface SecondDataType {
  key: React.Key
  Name: string
  Email: string
  Issuer: string
  Status: React.ReactNode
  CreatedOn: string
  ExpiresAt: string
  Action: React.ReactNode
}

const useCredentialsLogic = () => {
  const pageSize = 10

  const [currentPage, setCurrentPage] = useState(1)
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const [secondCurrentPage, setSecondCurrentPage] = useState(1) // State for second table
  const [secondSelectedRowKeys, setSecondSelectedRowKeys] = useState<
    React.Key[]
  >([])

  const updatedDataSource = dataSource()

  const secondUpdatedDataSource = seconddataSource()

  const totalPages = Math.ceil(updatedDataSource.length / pageSize)

  const secondTotalPages = Math.ceil(secondUpdatedDataSource.length / pageSize) // Calculate total pages for second table

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handleSecondPrevPage = () => {
    if (secondCurrentPage > 1) setSecondCurrentPage(secondCurrentPage - 1)
  }

  const handleSecondNextPage = () => {
    if (secondCurrentPage < secondTotalPages)
      setSecondCurrentPage(secondCurrentPage + 1)
  }

  const paginatedData = updatedDataSource.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  const secondPaginatedData = secondUpdatedDataSource.slice(
    (secondCurrentPage - 1) * pageSize,
    secondCurrentPage * pageSize
  )

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const onSecondSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSecondSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  const secondRowSelection: TableRowSelection<SecondDataType> = {
    selectedRowKeys: secondSelectedRowKeys,
    onChange: onSecondSelectChange
  }

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
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
    selectedRowKeys,
    selectValues,
    handleChange,
    secondPaginatedData,
    secondRowSelection,
    secondSelectedRowKeys,
    secondcolumns,
    secondCurrentPage,
    secondTotalPages,
    handleSecondPrevPage,
    handleSecondNextPage
  }
}

export default useCredentialsLogic
