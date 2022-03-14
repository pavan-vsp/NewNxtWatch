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
import './index.css'

class VideoItem extends Component {
  render() {
    const {gameDetails} = this.props
    const {id, thumbnailUrl, viewCount, title} = gameDetails

    return (
      <Context.Consumer>
        {value => {
          const {mode} = value
          return (
            <Link to={`/videos/${id}`} className="Link-Item">
              <VideoListItem themeMode={mode}>
                <Image src={thumbnailUrl} alt="video thumbnail" />
                <DetailsContainer>
                  <RightSideDetails>
                    <Para>{title}</Para>
                    <Para>{viewCount} Views</Para>
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
