import styled from 'styled-components/macro'

export const LoadingContainer = styled.div`
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Para = styled.p``
export const Heading = styled.h1``
export const FailureContainer = styled.div`
  width: 100%;
`
export const Image = styled.img``
export const Button = styled.button`
  padding: 10px;
  border: none;
  outline: none;
  border: 2px solid grey;
  border-radius: 2px;
  align-self: flex-start;
  background-color: transparent;
  cursor: pointer;
`
export const GamingPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  * {
    text-decoration: none;
  }
`
export const GamingVideosContainer = styled.div`
  background-color: ${prop => (prop.themeMode ? '#0f0f0f' : '#f9f9f9')};

  color: ${prop => (prop.themeMode ? '#f9f9f9' : '#0f0f0f')};
  height: 89.7vh;
  overflow-y: scroll;
`

export const DetailsContainer = styled.div`
  display: flex;
  width: 100%;
`

export const GamingUi = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
`
export const SideBarContainer = styled.div`
  width: 300px;
`
