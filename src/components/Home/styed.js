import styled from 'styled-components/macro'

export const HomeMainContainer = styled.div`
  width: 100vw;
  max-height: 100vh;
  * {
    text-decoration: none;
    outline: none;
  }
`

export const MoviesListContainer = styled.div`
  display: flex;
  background-color: ${prop => (prop.themeMode ? '#0f0f0f' : '#f9f9f9')};
  color: ${prop => (prop.themeMode ? '#f9f9f9' : '#0f0f0f')};
`

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const BannerImageContainer = styled.div`
  height: 300px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`

export const Para = styled.p``
export const Heading = styled.h1``

export const Image = styled.img``

export const VideosListContainer = styled.div``
export const InnerBannerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const BannerDetailsContainer = styled.div``
export const FailureContainer = styled.div`
  width: 100%;
  height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
export const ListOfVideosContainer = styled.div`
  background-color: ${prop => (prop.themeMode ? '#0f0f0f' : '#f9f9f9')};

  color: ${prop => (prop.themeMode ? '#f9f9f9' : '#0f0f0f')};
  height: 89.7vh;
  overflow-y: scroll;
`

// LoadingContainer Styling

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  width: 300px;
`
export const Input = styled.input`
  outline: none;
  font-size: 18px;
  padding: 5px 10px;
  border: none;
  border: 2px solid grey;
`

export const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  border: 2px solid grey;
  background-color: lightgray;
  height: 35px;
`
export const SearchButton = styled.button`
  background-color: transparent;
`
export const SideBarContainer = styled.ul``

// closeBtn

export const CloseBtn = styled.button`
  background-color: transparent;
  padding: 0px;
  align-self: flex-start;
  border: none;
  outline: none;
`
// NoSearchResults

export const NoSearchResults = styled.div`
  width: 100vw;
  height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NoSearchButton = styled.button`
  background-color: royalblue;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
`
