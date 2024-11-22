import { styled } from 'styled-components'

export const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  span {
    flex: 1;
  }

  button {
    border: none;
    background: #fff !important;
    box-shadow: none;
    &:focus {
      outline: none;
      background: transparent !important;
      box-shadow: none;
    }
  }
`
export const IconContainer = styled.div``
export const TableContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: end;

  button:first-child {
    color: #1e3460 !important;
    background: #f1f6ff !important;
    border: none !important;
  }

  button:last-child {
    color: #fff !important;
    border: none !important;
    background: #1e3460 !important;
  }

  padding: 10px 0px 10px 0;

  &.verifyjson-button {
    width: 60%;
    margin: auto;
    max-width: 600px;
  }
`

export const PaginationContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  align-items: center;

  .ant-select-selector {
    background: #f1f6ff !important;
    color: #1e3460 !important;
    font-weight: 600;
    border: none !important;
    outline: none !important;
  }
`

export const VerifyJsonContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  height: auto;
  justify-content: center;
  align-items: center;
  margin: auto;
  border: 1px solid #e9e9e9;
  border-radius: 8px;

  padding: 40px;
  .ant-upload-wrapper {
    width: 100%;
  }

  .ant-upload-drag {
    border: none;
    background: #fff;
  }

  .ant-upload-list-item {
    margin: 10px;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #262626 !important;
  }
`
export const BorderContainer = styled.div`
  margin-top: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`
export const Border = styled.div`
  border: 1px solid #e9e9e9;
  flex: 1;
`
export const UrlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-top: 20px;
`
export const DrawerTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
`
export const DrawerContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const DrawerButtonContainer = styled.div`
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
  }
`
