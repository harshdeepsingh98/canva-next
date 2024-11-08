import { styled } from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  h1 {
    font-weight: 400;
    font-size: 30px;
    color: #fff;
  }

  h5 {
    font-weight: 400;
    font-size: 14px;
    color: #fff;
    margin-top: 20px;

    span {
      font-weight: 600 !important;
    }
  }
`

export const InputContainer = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;

  border: none !important;
  border-bottom: 1px solid #fff !important;
  border-radius: 0 !important;
  color: #fff;
  outline: none;

  background: #e95d4e;
  &::placeholder {
    color: #fff;
    opacity: 1;
  }
`

export const ErrorMessageContainer = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #fff;
`

export const ButtonContainer = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  text-align: center;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
`

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
