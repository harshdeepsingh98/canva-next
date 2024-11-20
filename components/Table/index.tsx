/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { Flex, message } from 'antd'
import Archive from 'images/svg/Archive'
import Delete from 'images/svg/Delete'
import Download from 'images/svg/Download'
import Revoke from 'images/svg/Undo'
import {
  StyledTable,
  ButtonContainer,
  ButtonContent
} from 'styles/components/Table'

interface TableProps {
  selectedRowKeys: React.Key[]
  rowSelection: any
  columns: any
  dataSource: any
  onRowClick?: (record: any) => void
  isDetailView?: boolean
}

const TableComponent: React.FC<TableProps> = ({
  selectedRowKeys,
  rowSelection,
  columns,
  dataSource,
  onRowClick,
  isDetailView
}) => {
  const [messageApi, contextHolder] = message.useMessage()
  const messageKey = 'selected-message'

  useEffect(() => {
    if (selectedRowKeys.length > 0) {
      // Show or update message when items are selected
      messageApi.open({
        key: messageKey,
        content: (
          <div
            style={{
              display: 'flex',
              gap: '20px',
              color: '#1A1C25',
              alignItems: 'center'
            }}
          >
            {isDetailView ? (
              <>
                {' '}
                {selectedRowKeys.length} Credentials Selected
                <ButtonContainer>
                  <ButtonContent className="primary">
                    <Revoke />
                    Revoke
                  </ButtonContent>
                  <ButtonContent>
                    <Download />
                    Download
                  </ButtonContent>
                  <ButtonContent>
                    <Delete />
                    Delete
                  </ButtonContent>
                </ButtonContainer>
              </>
            ) : (
              <>
                {selectedRowKeys.length} Spaces Selected
                <ButtonContainer>
                  <ButtonContent>
                    <Delete />
                    Delete
                  </ButtonContent>
                  <ButtonContent>
                    <Archive />
                    Archive
                  </ButtonContent>
                </ButtonContainer>
              </>
            )}
          </div>
        ),
        duration: 0, // Keeps message visible until manually closed
        type: 'info'
      })
    } else {
      // Clear the message when no items are selected
      messageApi.destroy() // Remove the message
    }
  }, [selectedRowKeys.length, messageApi, isDetailView])
  return (
    <>
      {contextHolder}
      <Flex gap="middle" vertical style={{ width: '100%' }}>
        <StyledTable
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          onRow={record => ({
            onClick: () => onRowClick?.(record) // Bind the click handler
          })}
        />
      </Flex>
    </>
  )
}

export default TableComponent
