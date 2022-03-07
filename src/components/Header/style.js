import styled from 'styled-components/macro'

export const NavBar = styled.nav`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${prop => (prop.themeMode ? '#0f0f0f' : '#f9f9f9')};
`

export const Image = styled.img`
  width: ${prop => `${prop.imageWidth}px`};
  margin-left: 10px;
`

export const BtnsContainer = styled.div`
  display: flex;
  align-items: center;
  * {
    margin-left: 10px;
  }
`
export const TogglerBtn = styled.button`
  width:  width: ${prop => `${prop.buttonWidth}px`};
  height: 50px;
  outline: none;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
export const WebSiteLogoBtn = styled.button`
 width:  width: ${prop => `${prop.buttonWidth}px`};
 background-color: transparent;
 cursor:pointer; 
border :none;
`
