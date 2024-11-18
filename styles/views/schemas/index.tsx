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

  margin-top: 20px;
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
  font-family: Metropolis;
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

export const HeadingContainer = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #24222b;
`

export const NoSchemaContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const NoSchemaImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const NoSchemaDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  // margin-top: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`

export const NoSchemaButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: center;

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

export const DragandDropButtonContainer = styled.div`
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

  margin-top: 10px;
`
