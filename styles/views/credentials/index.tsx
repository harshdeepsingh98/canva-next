import { Tag } from 'antd'
import { styled } from 'styled-components'

export const DescriptionContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  width: 80%;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  min-width: 90px;
  flex: 1;
`

export const Number = styled.div`
  font-family: Metropolis;
  font-size: 32px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;
`

export const Title = styled.div`
  font-family: Metropolis;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: left;
`

export const TabContainer = styled.div`
  margin-top: 20px;

  .ant-tabs-tab-btn {
    color: #1e3460 !important;
  }
  .ant-tabs-ink-bar {
    background-color: #1e3460 !important; // Sets the color of the underline
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

export const TableContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`

export const ActionContainer = styled.div`
  display: flex;
`

export const IconContainer = styled.div``
export const ButtonContainer = styled.button`
  padding: 10px 20px;
  border: 1px solid #1e3460;
  text-align: center;
  color: #1e3460;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 20px;
  background: #fff;
`

export const DrawerTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;

  &.title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
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
  margin-bottom: 20px;
`

export const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
  margin-top: 40px;
`
export const SelectContainer = styled.div`
  margin-left: 20px;

  .ant-select-selector {
    background: #f1f6ff !important;
    color: #1e3460 !important;
    font-weight: 600;
    border: none !important;
    outline: none !important;
  }
`
export const PaginationContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;

  .ant-select-selector {
    background: #f1f6ff !important;
    color: #1e3460 !important;
    font-weight: 600;
    border: none !important;
    outline: none !important;
  }
`

export const StyledTag = styled(Tag)<{ color: string }>`
  font-size: 14px;
  font-weight: 600;
  padding: 5px 10px 8px 10px;
  border-radius: 20px;

  // Customize based on the color prop
  background-color: ${({ color }) =>
    color === 'success' ? '#28a745' : '#DCFCE7  !important'};
  color: ${({ color }) =>
    color === 'success' ? '#fff' : '#023314 !important'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  svg {
  }
`
