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
    const {gameDetails} = this.props
    const {id, thumbnailUrl, viewCount, profileImageUrl, title} = gameDetails

    return (
      <Context.Consumer>
        {value => {
          const {mode} = value
          return (
            <VideoListItem themeMode={mode}>
              <Link to={`/videos/${id}`}>
                <Image src={thumbnailUrl} alt="im" />
                <DetailsContainer>
                  <RightSideDetails>
                    <Para>{title}</Para>
                    <Para>{viewCount} Views</Para>
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
