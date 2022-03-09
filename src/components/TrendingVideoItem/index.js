import {Component} from 'react'
import {Link} from 'react-router-dom'
import Context from '../../ContextData'
import {
  VideoListItem,
  Image,
  Para,
  DetailsContainer,
  RightSideDetails,
} from './styled'

class VideoItem extends Component {
  render() {
    const {trendingDetails} = this.props
    const {
      id,
      thumbnailUrl,
      viewCount,
      name,
      title,
      publishedAt,
    } = trendingDetails

    return (
      <Context.Consumer>
        {value => {
          const {mode} = value
          return (
            <Link to={`/videos/${id}`}>
              <VideoListItem themeMode={mode}>
                <Image
                  src={thumbnailUrl}
                  alt="video thumbnail"
                  imageWidth="400px"
                />

                <DetailsContainer>
                  <RightSideDetails>
                    <Para>{title}</Para>
                    <Para>{name}</Para>
                    <Para>{viewCount} Views</Para>
                    <Para>{publishedAt} ago</Para>
                  </RightSideDetails>
                </DetailsContainer>
              </VideoListItem>
            </Link>
          )
        }}
      </Context.Consumer>
    )
  }
}
export default VideoItem
