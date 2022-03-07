import styled from 'styled-components/macro'

export const VideoListItem = styled.li`
  list-style: none;
  width: 100%;
  height: 300px;

  display: flex;
  background-color: ${prop => (prop.themeMode ? '#0f0f0f' : '#f9f9f9')};
  color: ${prop => (prop.themeMode ? '#f9f9f9' : '#0f0f0f')};
  padding: 10px;
  * {
    text-decoration: none;
  }
`

export const Image = styled.img`
  list-style: none;
  width: ${prop => (prop.imageWidth ? `${prop.imageWidth}` : '100%')};
  height: ${prop => (prop.imageHeight ? `${prop.imageHeight}` : null)};
`

export const DetailsContainer = styled.div`
  display: flex;
  padding: 5px 20px;
`

export const RightSideDetails = styled.div``

export const Para = styled.p``
export const Heading = styled.h1``
