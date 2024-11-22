/* eslint-disable no-console */
import { message, Upload, UploadProps } from 'antd'
import { useState } from 'react'
import {
  dataSource,
  DataType,
  TableRowSelection,
  historyDataSource
} from 'utils/customHooks/verification/verificationData'

const useVerificationLogic = () => {
  const pageSize = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const [currentHistoryPage, setCurrentHistoryPage] = useState(1)
  const [selectedHistoryRowKeys, setSelectedHistoryRowKeys] = useState<
    React.Key[]
  >([])
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)
  const totalPages = Math.ceil(dataSource.length / pageSize)
  const totalHistoryPages = Math.ceil(historyDataSource.length / pageSize)
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handleHistoryPrevPage = () => {
    if (currentHistoryPage > 1) setCurrentHistoryPage(currentHistoryPage - 1)
  }

  const handleHistoryNextPage = () => {
    if (currentHistoryPage < totalHistoryPages)
      setCurrentHistoryPage(currentHistoryPage + 1)
  }

  const handleHistoryClick = () => {
    setIsDrawerVisible(true)
  }

  const handleDrawerClose = () => {
    setIsDrawerVisible(false)
  }

  const updatedDataSource = dataSource(handleHistoryClick)

  const updatedHistorySourceData = historyDataSource()

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

  const paginatedHistoryData = updatedHistorySourceData.slice(
    (currentHistoryPage - 1) * pageSize,
    currentHistoryPage * pageSize
  )

  const onSelectHistoryChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedHistoryRowKeys(newSelectedRowKeys)
  }

  const rowHistorySelection = {
    selectedHistoryRowKeys,
    onChange: onSelectHistoryChange
  }

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    beforeUpload: file => {
      const isJson =
        file.type === 'application/json' || file.name.endsWith('.json')
      if (!isJson) {
        message.error('You can only upload JSON files!')
      }

      return isJson || Upload.LIST_IGNORE // Ignore the file if it's not JSON
    },
    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }

      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    }
  }

  return {
    rowSelection,
    paginatedData,
    handleNextPage,
    handlePrevPage,
    currentPage,
    totalPages,
    selectedRowKeys,
    props,
    isDrawerVisible,
    handleDrawerClose,
    paginatedHistoryData,
    onSelectHistoryChange,
    rowHistorySelection,
    selectedHistoryRowKeys,
    handleHistoryPrevPage,
    handleHistoryNextPage,
    currentHistoryPage,
    totalHistoryPages
  }
}

export default useVerificationLogic
