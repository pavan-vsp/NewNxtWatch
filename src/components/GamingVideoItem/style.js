import styled from 'styled-components/macro'

export const VideoListItem = styled.li`
  list-style: none;
  width: ;
  padding: 10px;
  background-color: ${prop => (prop.themeMode ? '#0f0f0f' : '#f9f9f9')};
  color: ${prop => (prop.themeMode ? '#f9f9f9' : '#0f0f0f')};
`

export const Image = styled.img`
  list-style: none;
  width: ${prop => (prop.imageWidth ? `${prop.imageWidth}` : '100%')};
  height: ${prop => (prop.imageHeight ? `${prop.imageHeight}` : null)};
`

export const DetailsContainer = styled.div`
  display: flex;
`

export const RightSideDetails = styled.div``

export const Para = styled.p``
