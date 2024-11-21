import { useState } from 'react'
import {
  dataSource,
  DataType,
  TableRowSelection
} from 'utils/customHooks/verification/verificationData'

const useVerificationLogic = () => {
  const pageSize = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
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

  return {
    rowSelection,
    paginatedData,
    handleNextPage,
    handlePrevPage,
    currentPage,
    totalPages,
    selectedRowKeys
  }
}

export default useVerificationLogic
