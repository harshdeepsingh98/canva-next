import { styled } from 'styled-components'

export const TabContainer = styled.div`
  margin-top: 20px;

  .ant-tabs-tab-btn {
    color: #1e3460 !important;
  }
  .ant-tabs-ink-bar {
    background-color: #1e3460 !important; // Sets the color of the underline
  }
`

export const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center .ant-avatar-circle {
    width: 50px;
    height: 50px;
  }

  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #bdbdbd;
  }
`
export const OrganizationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;

  > div:first-child {
    display: flex;
    gap: 10px;
  }
  width: 60%;
`
export const ContentContainer = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;

  .ant-select {
    width: 100% !important;
  }

  .ant-space-item {
    width: 100% !important;
  }
`
export const BorderBottom = styled.div`
  margin: 20px 0;
  border-bottom: 1px solid #e9e9e9;
  width: 60%;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 60%;
  gap: 10px;
  justify-content: end;
  margin-top: 10px;
  button:first-child {
    color: #1e3460;
    background: #f1f6ff;
    border: none;
  }

  button:last-child {
    color: #fff;
    border: none;
    background: #1e3460;
  }
`
export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const UserTabs = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const TableContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`
export const BotttomButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: end;

  button:first-child {
    color: #1e3460;
    background: #f1f6ff;
    border: none;
  }

  button:last-child {
    color: #fff;
    border: none;
    background: #1e3460;

    &:disabled {
      background: #d3d3d3; /* A lighter shade to indicate disabled state */
      color: #a1a1a1; /* Grey text for disabled button */
      cursor: not-allowed; /* Disabled pointer style */
    }
  }

  padding: 10px 0px 10px 0;

  &.modal-button {
    justify-content: center;
    button {
      flex: 1;
    }
  }
`
export const ModalContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`
export const ModalHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`
