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
