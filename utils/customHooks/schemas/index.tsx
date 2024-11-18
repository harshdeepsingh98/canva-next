/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { message, TableProps, Upload } from 'antd'
import type { UploadProps } from 'antd'
import {
  tableMenu,
  dataSource,
  columns
} from 'utils/customHooks/schemas/schemasData'

type TableRowSelection<T extends object = object> =
  TableProps<T>['rowSelection']
export interface DataType {
  key: React.Key
  Name: string
  Published: string
  CreatedOn: string
  Action: React.ReactNode
  IconDropdown: React.ReactNode
}

const useSchemasLogic = () => {
  const pageSize = 10
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [isFileUploaded, setIsFileUploaded] = useState(false)

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

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setIsFileUploaded(false)
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
    currentPage,
    totalPages,
    handlePrevPage,
    handleNextPage,
    paginatedData,
    rowSelection,
    tableMenu,
    columns,
    selectedRowKeys,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    props,
    isFileUploaded
  }
}

export default useSchemasLogic
