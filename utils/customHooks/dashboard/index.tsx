/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TableProps } from 'antd'
import {
  detail,
  tableMenu,
  dataSource,
  columns
} from 'utils/customHooks/dashboard/dashboardData'
import { hideLoading, showLoading } from 'reduxStore/slices/loadingSlice'

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
  const pageSize = 10
  const dispatch = useDispatch()
  const open = useSelector(
    (state: { loading: { open: boolean } }) => state.loading.open
  )

  const [selectedRowData, setSelectedRowData] = useState<DataType | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const handleAddRecord = (rowData: DataType) => {
    setSelectedRowData(rowData)
    dispatch(showLoading())
    setTimeout(() => {
      dispatch(hideLoading())
    }, 2000)
  }

  const updatedDataSource = dataSource(handleAddRecord)

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
    selectedRowData
  }
}

export default useDashboardLogic
