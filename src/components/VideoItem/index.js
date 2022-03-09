import {Component} from 'react'
import {Link} from 'react-router-dom'
import Context from '../../ContextData'
import {
  VideoListItem,
  Image,
  Para,
  DetailsContainer,
  RightSideDetails,
} from './style'

class VideoItem extends Component {
  render() {
    const {videoInfo} = this.props
    const {
      id,
      thumbnailUrl,
      viewCount,
      channelName,
      profileImageUrl,
      title,
      publishedAt,
    } = videoInfo

    return (
      <Context.Consumer>
        {value => {
          const {mode} = value
          return (
            <VideoListItem themeMode={mode}>
              <Link to={`/videos/${id}`}>
                <Image src={thumbnailUrl} alt="video thumbnail" />
                <DetailsContainer>
                  <Image
                    imageWidth="100px"
                    imageHeight="50px"
                    src={profileImageUrl}
                    alt="channel logo"
                  />
                  <RightSideDetails>
                    <Para>{title}</Para>
                    <Para>{channelName}</Para>
                    <Para>{viewCount} Views</Para>
                    <Para>{publishedAt}</Para>
                  </RightSideDetails>
                </DetailsContainer>
              </Link>
            </VideoListItem>
          )
        }}
      </Context.Consumer>
    )
  }
}
export default VideoItem
