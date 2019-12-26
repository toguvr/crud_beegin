import styled from 'styled-components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const FormContainer = styled.div`
  position:fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 35%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #343e4a;
`

export const AreaForm = styled.textarea`
  background: #979ea8;
  width:80%;
  border-radius:8px;
  border:none;
  margin-bottom:15px;
  height:50px;
  padding: 5px;

  :focus{
    outline: none;
  }
`

export const InputForm = styled.input`
  background: #979ea8;
  width:80%;
  border-radius:8px;
  border:none;
  margin-bottom:15px;
  height:50px;
  padding: 5px;

  :focus{
    outline: none;
  }
`

export const AreaFormRecipients = styled.input`
  background: #979ea8;
  width:80%;
  border-radius:8px;
  border:none;
  margin-bottom:15px;
  height:100px;
  padding: 5px;

  :focus{
    outline: none;
  }
`

export const TitleForm = styled.span`
  color: #979ea8;
  width:80%;
  margin-bottom:10px;
`

export const ArrowBackIconStyled = styled(ArrowBackIcon)`
  color: #979ea8;
  position: absolute;
  top: 5%;
  left: 5%;
  cursor: pointer;
`