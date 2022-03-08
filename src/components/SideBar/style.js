import styled from 'styled-components/macro'

export const SideBarContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 89vh;
  background-color: ${prop => (prop.themeMode ? '#0f0f0f' : '#f9f9f9')};
  color: ${prop => (prop.themeMode ? '#f9f9f9' : '#0f0f0f')};
`

export const NavigatorsContainer = styled.div`
  background-color: ${prop => (prop.themeMode ? '#0f0f0f' : '#f9f9f9')};
`
export const SocialIconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const ContactDetails = styled.div`
  background-color: ${prop => (prop.themeMode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Navigator = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  * {
    margin-left: 5px;
  }
`
export const Para = styled.p``
export const Heading = styled.h1``
export const Image = styled.img`
  width: 50px;
`
