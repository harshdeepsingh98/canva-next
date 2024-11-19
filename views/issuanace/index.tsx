import Image from 'next/image'
import { Button, Modal } from 'antd'
import useIssuanaceLogic from 'utils/customHooks/issuanace'
import Plus from 'images/png/Add.png'
import FeatureIcon from 'images/png/FeaturedIcon.png'
import {
  IssuanaceContainer,
  ModalTitle,
  StyledSteps,
  ModalDescription,
  BottomButtonContainer
} from 'styles/views/issuanace'

const IssuanaceView: React.FC = () => {
  const contentStyle: React.CSSProperties = {
    marginTop: 50,
    width: '100%'
  }

  const {
    items,
    current,
    steps,
    isCreatingSchema,
    showModal,
    setIsCreatingSchema,
    setShowManualSchema,
    handleCancel,
    next,
    prev,
    handleCreateSchemaClick,
    isModalOpen,
    handleOk,
    handleCancelModal
  } = useIssuanaceLogic()
  return (
    <>
      <IssuanaceContainer>
        <StyledSteps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <BottomButtonContainer>
          {current === 0 && (
            <>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button
                type="primary"
                onClick={next}
                style={{ marginLeft: 8, background: '#1e3460' }}
              >
                Continue
              </Button>
            </>
          )}
          {current === 1 && !isCreatingSchema ? (
            <>
              <Button onClick={prev}>Back</Button>
              <Button
                type="primary"
                onClick={handleCreateSchemaClick}
                style={{ marginLeft: 8, background: '#1e3460' }}
              >
                <Image src={Plus} alt="Plus" />
                Create Schema
              </Button>
            </>
          ) : current === 1 && isCreatingSchema ? (
            <>
              <Button
                onClick={() => {
                  setIsCreatingSchema(false)
                  setShowManualSchema(false)
                }}
              >
                Cancel
              </Button>
              <Button style={{ marginLeft: 8 }}>Preview</Button>
              <Button
                type="primary"
                onClick={() => {
                  // next();
                  showModal()
                }}
                style={{ marginLeft: 8, background: '#1e3460' }}
              >
                Publish and Continue
              </Button>
            </>
          ) : (
            <></>
          )}
          {current === 2 && (
            <>
              <Button onClick={prev}>Back</Button>
              <Button
                type="primary"
                onClick={next}
                style={{ marginLeft: 8, background: '#1e3460' }}
              >
                Continue without Design
              </Button>
            </>
          )}
          {current === 3 && (
            <>
              <Button>Save Records</Button>
              <Button
                type="primary"
                onClick={next}
                style={{ marginLeft: 8, background: '#1e3460' }}
              >
                Continue
              </Button>
            </>
          )}
        </BottomButtonContainer>
        <Modal
          title=""
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancelModal}
          closable={false}
          bodyStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
          style={{
            top: '50%',
            transform: 'translateY(-50%)'
          }}
          footer={null}
        >
          <Image
            src={FeatureIcon}
            alt="Remove"
            style={{ marginBottom: '20px' }}
          />

          <ModalTitle>Schema created successfully</ModalTitle>
          <ModalDescription>
            You have successfully created and published <br />
            <br />
            Experience Letter Schema
          </ModalDescription>
          <div
            className="custom-modal-footer"
            style={{
              marginTop: '20px',
              textAlign: 'center',
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Button style={{ width: '100%' }} onClick={handleCancelModal}>
              Back
            </Button>
            <Button
              onClick={() => {
                next()
                handleCancelModal()
              }}
              style={{
                marginLeft: 8,
                width: '100%',
                backgroundColor: '#1E3460',
                color: '#fff'
              }}
            >
              Continue
            </Button>
          </div>
        </Modal>
      </IssuanaceContainer>
    </>
  )
}

export default IssuanaceView
