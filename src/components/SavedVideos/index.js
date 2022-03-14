import {BiListPlus} from 'react-icons/bi'
import Context from '../../ContextData'
import Header from '../Header'
import SideBar from '../SideBar'
import SavedVideosItem from '../SavedVideosItem'

import {
  SideVideos,
  SavedVideosContainer,
  SavedVideosContentContainer,
  UnorderedListForSavedVideo,
  SideBarContainer,
  VideosContainer,
  NoSavedVideosContainer,
  NoSavedVideos,
  NoSavesVideosText,
  NoSavedVideosSuggestion,
  LinkItem,
  IconContainer,
  Heading,
} from './style'

const SavedVideos = () => (
  <Context.Consumer>
    {value => {
      const {mode, savedVideos} = value

      const renderSavedVideos = () => (
        <UnorderedListForSavedVideo>
          <LinkItem darkMode={mode}>
            <IconContainer darkMode={mode}>
              <BiListPlus className="header-icon" />
            </IconContainer>
            <Heading darkMode={mode}>Saved Videos</Heading>
          </LinkItem>
          <VideosContainer>
            {savedVideos.map(eachMovieDetails => (
              <SavedVideosItem
                key={eachMovieDetails.id}
                videoInfo={eachMovieDetails}
              />
            ))}
          </VideosContainer>
        </UnorderedListForSavedVideo>
      )

      return (
        <SideVideos>
          <Header />
          <SavedVideosContainer darkMode={mode} data-testid="savedVideos">
            <SideBarContainer>
              <SideBar />
            </SideBarContainer>

            <SavedVideosContentContainer>
              {savedVideos.length === 0 ? (
                <NoSavedVideosContainer>
                  <NoSavedVideos
                    alt="no saved videos"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  />
                  <NoSavesVideosText darkMode={mode}>
                    No saved videos found
                  </NoSavesVideosText>
                  <NoSavedVideosSuggestion darkMode={mode}>
                    Save your videos by clicking a button
                  </NoSavedVideosSuggestion>
                </NoSavedVideosContainer>
              ) : (
                renderSavedVideos()
              )}
            </SavedVideosContentContainer>
          </SavedVideosContainer>
        </SideVideos>
      )
    }}
  </Context.Consumer>
)

export default SavedVideos
