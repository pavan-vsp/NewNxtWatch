import styled from 'styled-components/macro'

export const LoadingContainer = styled.div`
  width: 100%;
  height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FailureContainer = styled.div`
  width: 100%;
  height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Para = styled.p`
  display: flex;
  align-items: center;
  * {
    margin-left: 10px;
  }
`
export const Heading = styled.h1``

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

export const VideoDetailsPageContainer = styled.div`
  width: 100vw;
  max-height: 100vh;
`
export const VideoDetailsContainer = styled.div`
  width: 100%;
  height: 89vh;
  overflow-y: scroll;
`
export const DetailsContainer = styled.div`
  background-color: ${prop => (prop.themeMode ? '#0f0f0f' : '#f9f9f9')};
  color: ${prop => (prop.themeMode ? '#f9f9f9' : '#0f0f0f')};
  display: flex;
`
export const SideBarContainer = styled.ul``

export const ReactPlayerContainer = styled.div``
export const VideoLayout = styled.div`
  width: 100%;
`
export const VideoDetailsInLayout = styled.div`
  background-color: ${prop => (prop.themeMode ? '#0f0f0f' : '#f9f9f9')};
  color: ${prop => (prop.themeMode ? '#f9f9f9' : '#0f0f0f')};
  width: 100%;
`
export const VideoViewsAndOptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`
export const VideoViews = styled.div`
  display: flex;
  align-items: center;
  * {
    margin-left: 10px;
  }
  color: ${prop => (prop.themeMode ? '#f9f9f9' : '#0f0f0f')};
`
export const VideoOptions = styled.div`
  display: flex;
  align-items: center;
  * {
    margin-left: 10px;
  }
`
export const HR = styled.hr``

export const Profile = styled.div`
  display: flex;
`
export const ProfileInfo = styled.div`
  padding: 5px 10px;
`
export const ProfileChannelInfo = styled.div``
export const ProfileDescription = styled.div``
export const ProfileImage = styled.img`
  width: 100px;
  align-self: flex-start;
`
export const ActionButtonBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  color: ${prop => (prop.themeMode ? '#f9f9f9' : '#0f0f0f')};
`
