import styled from 'styled-components'

export const SideVideos = styled.div`
  max-height: 100vh;
  width: 100vw;
`

export const SavedVideosContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
`

export const SavedVideosContentContainer = styled.div`
  width: 100vw;
  padding: 25px;
  overflow-y: scroll;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
  list-style: none;
  padding-left: 0px;
  width: 100%;
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

export const NoSavedVideos = styled.img`
  width: 50%;
`
export const NoSavesVideosText = styled.h1`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const NoSavedVideosSuggestion = styled.p`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  border-radius: 80px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  margin: 25px;
`

export const LinkItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 25px;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  color: ${props => (!props.darkMode ? 'black' : '#ffffff')};
  height: 90px;
  padding: 20px;
`
export const Heading = styled.h1`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const SideBarContainer = styled.div``

export const UnorderedListForSavedVideo = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
