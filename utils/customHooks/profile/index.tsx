/* eslint-disable no-console */
import { SetStateAction, useState } from 'react'
import Image from 'next/image'
import { dataSource } from 'utils/customHooks/profile/profileData'
import Trash from 'images/png/Trash.png'

const useProfileLogic = () => {
  const [activeTab, setActiveTab] = useState('1')
  const [selectedValue, setSelectedValue] = useState(
    'Issuer ( View, Issue, Revoke, Download)'
  )

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleConfirm = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleSelectChange = (value: SetStateAction<string>) => {
    setSelectedValue(value)
  }

  const handleTabChange = (key: string) => {
    setActiveTab(key)
  }

  const updatedDataSource = dataSource.map(row => ({
    ...row,
    Action: (
      <Image
        src={Trash}
        alt="Delete"
        style={{ cursor: 'pointer' }}
        onClick={() => showModal()} // Show modal on click
      />
    )
  }))

  return {
    activeTab,
    selectedValue,
    handleSelectChange,
    handleTabChange,
    isModalVisible,
    handleConfirm,
    handleCancel,
    updatedDataSource
  }
}

export default useProfileLogic
