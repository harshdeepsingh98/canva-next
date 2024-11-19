import { Steps } from 'antd'
import { styled } from 'styled-components'

export const IssuanaceContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  margin-bottom: 10px;
`
export const ModalDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 8px;
  text-align: center;
`

export const BottomButtonContainer = styled.div`
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
`
export const StyledSteps = styled(Steps)`
  .ant-steps-item-process .ant-steps-item-icon {
    background-color: #1e3460; /* Icon background for the active step */
    border-radius: 4px; /* Square shape */
    border-color: #1e3460;
  }

  .ant-steps-item-icon {
    border-radius: 4px; /* Square shape for all steps */
  }

  .ant-steps-item-finish .ant-steps-item-icon {
    background-color: #1e3460; /* Icon background for completed steps */
    border-radius: 4px;
  }

  .ant-steps-item-process .ant-steps-item-content .ant-steps-item-title,
  .ant-steps-item-finish .ant-steps-item-content .ant-steps-item-title {
    color: #1e3460 !important; /* Text color for active and completed steps */
    font-weight: 600;
  }

  .ant-steps-item-tail::after {
    border-color: #d9d9d9; /* Color for the dotted line */
    border-style: dotted; /* Dotted style for the line */
  }
  .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title::after {
    border: 1px solid #1e3460;
  }

  .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
    color: white;
  }
`

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 20px;
`
export const DescriptionContainer = styled.div`
  // width: 100%;
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
export const CheckboxContainer = styled.div`
  display: flex;
  gap: 10px;

  .ant-checkbox + span {
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    text-align: left;
  }
`
export const CreateSchemaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
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
  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
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

  padding: 10px 0px 10px 0;
`
export const SelectSchemaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  gap: 5px;
  // margin-top: 20px;

  .primary {
    color: #fff;
    background: #1e3460;
  }
`
export const ButtonContainer = styled.button`
  padding: 10px 20px;
  border: 1px solid #1e3460;
  text-align: center;
  color: #1e3460;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 30px;
  background: #fff;
`
export const SelectDesignContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
  gap: 20px;
`
export const CardDescription = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  flex-direction: column;

  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`

export const CardButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;

  button:first-child {
    color: #1e3460;
    background: #f1f6ff;
    border: none;
    flex: 1;
  }

  button:last-child {
    color: #1e3460;
    border: none;
    background: #fff;
    border: 1px solid #1e3460;
    flex: 1;
  }
`
export const AddRecordContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const RecordContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  gap: 20px;
  border: 1px solid #e9e9e9;
  padding: 10px;
  border-radius: 16px;
`

export const RecordLeftContainer = styled.div`
  border: 1px solid #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex-direction: column;
  border-radius: 16px;
  flex: 1;
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

export const AddRecordTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 2; /* Ensure the table container shares available space */
  overflow: auto;
  .ant-table-container {
    border: 1px solid #f1f1f1 !important;
  }
  .ant-table-tbody {
    border: 1px solid #f1f1f1;
  }
  .ant-table-thead > tr > th {
    background-color: #fff !important;

    // color: #f1f1f1 !important;
    // border-right: none !important;
  }

  .ant-table-tbody > tr > td {
    // border-right: none !important;
  }

  .ant-table-thead > tr > th:not(:last-child)::before,
  .ant-table-tbody > tr > td:not(:last-child)::before {
    display: none !important;
  }
`

export const RecordRightContainer = styled.div`
  display: flex;

  justify-content: center;
  padding: 10px;
  flex-direction: column;
  border-radius: 16px;
  flex: 1;
  gap: 10px;
  border-right: 1px solid #d8dee4;
  height: 100%;

  .ant-select {
    width: 100% !important;
  }
`

export const RightContainerTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-bottom: 10px;
`
export const OrganizationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  .ant-switch-handle::before {
    background-color: #1e3460 !important;
  }

  .ant-switch-checked {
    background-color: #e8f0ff !important;
  }
`

export const SwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 10px;
  align-items: baseline;
  .ant-switch-handle::before {
    background-color: #1e3460 !important;
  }

  .ant-switch-checked {
    background-color: #e8f0ff !important;
  }
`

export const SwitchContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
