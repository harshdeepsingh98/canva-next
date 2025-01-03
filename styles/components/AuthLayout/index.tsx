import styled from 'styled-components'
import { Menu, Space } from 'antd'

export const StyledSpace = styled(Space)`
  span {
    width: 40px !important;
    height: 40px !important;
  }
`

export const TitleContainer = styled.div`
  font-family: DM-Sans-Regular !important;
  font-weight: 600 !important;
  font-size: 18px !important;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

export const ButtonContainer = styled.button`
  padding: 10px 20px;
  background-color: #1e3460;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 40px;
`

export const StyledMenu = styled(Menu)`
  .ant-menu-item-selected {
    background: #f1f6ff !important;
    border-right: 4px solid #1e3460 !important;
    color: #1e3460 !important;
    border-radius: 0;
  }

  .ant-menu-item-selected a {
    color: #1e3460 !important;
  }
`
