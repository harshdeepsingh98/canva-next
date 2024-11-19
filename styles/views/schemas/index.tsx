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
  width: 100%;
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

    &:disabled {
      background: #d3d3d3; /* A lighter shade to indicate disabled state */
      color: #a1a1a1; /* Grey text for disabled button */
      cursor: not-allowed; /* Disabled pointer style */
    }
  }

  padding: 10px 20px 10px 0;
`

export const CreateCredentialsSchema = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`
export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 20px;
`

export const CreateSchemaDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
  flex: 1;
  color: #1a1c25;
  span {
    font-size: 16px;
    font-weight: 300;
    line-height: 18px;
    text-align: left;
    color: #262626;
  }
`
export const InputContainer = styled.div`
  flex: 1;
  .ant-space-vertical {
    display: flex;
    width: 100%;
  }

  .ant-space-compact {
    width: 100%;
  }
`
export const DragandDropContainer = styled.div`
  background: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;
  border-radius: 6px;
  flex: 1;
  display: flex;
  flex-direction: column;

  .ant-upload-wrapper .ant-upload-drag {
    background: #fff;
    border: 1px dashed #bdbdbd;
  }

  .ant-upload-wrapper {
    padding: 0 20px;
  }
`

export const CredentialContainerAttribute = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  .ant-select {
    width: 100% !important;
  }
  .ant-space {
    display: contents !important;
  }
  position: relative;
`
export const BorderBottom = styled.div`
  border: 1px solid #e9e9e9;
`
export const AddFieldContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: start;
  width: 100%;
  justify-content: start;
  padding: 0 20px 20px 20px;
`
export const TitleContainer = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  padding: 20px;
  color: #262626;
`
export const BottomButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  gap: 10px;

  button:first-child {
    color: #1e3460;
    background: #f1f6ff;
    border: none;
  }

  button:second-child {
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

  margin-top: 40px;
`

export const PublishModalContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PublishModalHeadingContainer = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`
export const PublishButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;

  button:first-child {
    color: #344054;
    background: #fff;

    flex: 1;
    border: 1px solid #d0d5dd;
  }

  button:last-child {
    color: #fff;
    border: none;
    background: #1e3460;
    flex: 1;
  }
`
