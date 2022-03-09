import styled, {createGlobalStyle} from 'styled-components/macro'

export const UniversalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    list-style: none;
    outline:none;
}`

export const ErrorMsg = styled.p`
  color: red;
  text-align: center;
`
export const LoginPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LogoImage = styled.img`
  width: 200px;
`

export const Inner = styled.div`
  * {
    margin-bottom: 10px;
  },
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginBtn = styled.button`
  width: 100%;
  color: #ffffff;
  padding: 5px;
  font-size: 18px;
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  outline: none;
`

export const Input = styled.input`
  font-size: 18px;
  padding: 5px 0px 5px 10px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  * {
    margin-right: 5px;
  }
`
export const Label = styled.label`
  margin-left: 5px;
`
export const FormContainer = styled.form``

export const MainPasswordContainer = styled.div`
  * {
    margin-bottom: 5px;
  }
`
export const InnerPassword = styled.div`
  display: flex;
  flex-direction: column;
`
