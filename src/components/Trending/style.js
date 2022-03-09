import styled from 'styled-components/macro'

export const LoadingContainer = styled.div`
  width: 100%;
  height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Para = styled.p``
export const Heading = styled.h1``
export const FailureContainer = styled.div`
  width: 100%;
  height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
//

export const TrendingPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  * {
    text-decoration: none;
  }
`
export const TrendingVideoContainer = styled.div`
  height: 89vh;
  overflow-y: scroll;
  background-color: ${prop => (prop.themeMode ? '#0f0f0f' : '#f9f9f9')};
  color: ${prop => (prop.themeMode ? '#f9f9f9' : '#0f0f0f')};
`
export const DetailsContainer = styled.div`
  background-color: ${prop => (prop.themeMode ? '#0f0f0f' : '#f9f9f9')};
  color: ${prop => (prop.themeMode ? '#f9f9f9' : '#0f0f0f')};
  display: flex;
`
export const SideBarContainer = styled.ul``

export const TrendingUi = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
`

export const TrendingBannerContainer = styled.div`
  width: 100vw;
  height: 200px;
  display: flex;
  align-items: center;
`
