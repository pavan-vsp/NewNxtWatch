import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import Context from '../../ContextData'
import SideBar from '../SideBar'
import Header from '../Header'
import './index.css'
import {
  LoadingContainer,
  FailureContainer,
  Image,
  Para,
  Heading,
  Button,
  VideoDetailsContainer,
  SideBarContainer,
  VideoDetailsPageContainer,
  DetailsContainer,
  ReactPlayerContainer,
  VideoLayout,
  VideoDetailsInLayout,
  VideoViews,
  VideoOptions,
  VideoViewsAndOptions,
  Profile,
  ProfileInfo,
  ProfileImage,
  ProfileChannelInfo,
  ProfileDescription,
  HR,
  ActionButtonBtn,
} from './style'

const apiConstant = {
  INITIAL: 'initial',
  PROGRESS: 'progress',
  FAILURE: 'failure',
  SUCCESS: 'success',
}

class VideoItemDetails extends Component {
  state = {
    isLikedBtn: false,
    isUnLikeBtn: false,
    isSavedBtn: false,
    videoDetails: '',
    apiStatus: apiConstant.INITIAL,
  }

  componentDidMount() {
    this.renderVideoDetails()
  }

  renderVideoDetails = async () => {
    this.setState({apiStatus: apiConstant.PROGRESS})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    }

    const fetchedData = await fetch(url, options)
    if (fetchedData.ok) {
      const data = await fetchedData.json()
      const newData = {
        id: data.video_details.id,
        title: data.video_details.title,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        description: data.video_details.description,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        channelName: data.video_details.channel.name,
        subscribeCount: data.video_details.channel.subscriber_count,
        profileImageUrl: data.video_details.channel.profile_image_url,
      }
      console.log(newData)
      this.setState({
        apiStatus: apiConstant.SUCCESS,
        videoDetails: newData,
      })
    } else {
      this.setState({apiStatus: apiConstant.FAILURE})
    }
  }

  LoadingUI = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" width={30} height={30} color="lightblue" />
    </LoadingContainer>
  )

  renderPlayer = () => {
    const {videoDetails} = this.state
    return (
      <ReactPlayerContainer>
        <ReactPlayer
          url={videoDetails.videoUrl}
          controls
          width="100%"
          height="70vh"
        />
      </ReactPlayerContainer>
    )
  }

  onClickOnLikeBtn = () => {
    this.setState(prev => ({isUnLikeBtn: false, isLikedBtn: !prev.isLikedBtn}))
  }

  onClickOnDisLikeBtn = () => {
    this.setState(prev => ({isLikedBtn: false, isUnLikeBtn: !prev.isUnLikeBtn}))
  }

  renderVideoDetailsUI = () => {
    const {videoDetails, isLikedBtn, isUnLikeBtn, isSavedBtn} = this.state

    return (
      <Context.Consumer>
        {value => {
          const {mode, AddSavedVideos} = value
          const onClickOnSaveBtn = () => {
            this.setState(prev => ({isSavedBtn: !prev.isSavedBtn}))
            AddSavedVideos({videoDetails})
          }

          const savedText = isSavedBtn ? 'Saved' : 'Save '
          const LikeBtnStyle = isLikedBtn ? 'IfActive' : null
          const UnLikeBtnStyle = isUnLikeBtn ? 'IfActive' : null
          const SavedBtnStyle = isSavedBtn ? 'IfActive' : null

          return (
            <VideoLayout>
              {this.renderPlayer()}
              <VideoDetailsInLayout themeMode={mode}>
                <VideoViewsAndOptions>
                  <VideoViews themeMode={mode}>
                    <Para>{videoDetails.viewCount} Views</Para>
                    <Para>{videoDetails.publishedAt}</Para>
                  </VideoViews>
                  <VideoOptions>
                    <ActionButtonBtn
                      onClick={this.onClickOnLikeBtn}
                      className={LikeBtnStyle}
                      themeMode={mode}
                    >
                      <AiOutlineLike size={20} />
                      Like
                    </ActionButtonBtn>
                    <ActionButtonBtn
                      onClick={this.onClickOnDisLikeBtn}
                      className={UnLikeBtnStyle}
                      themeMode={mode}
                    >
                      <AiOutlineDislike size={20} />
                      Unlike
                    </ActionButtonBtn>
                    <ActionButtonBtn
                      onClick={onClickOnSaveBtn}
                      className={SavedBtnStyle}
                      themeMode={mode}
                    >
                      <BiListPlus size={20} />
                      {savedText}
                    </ActionButtonBtn>
                  </VideoOptions>
                </VideoViewsAndOptions>
                <HR>{}</HR>
                <Profile themeMode={mode}>
                  <ProfileImage src={videoDetails.profileImageUrl} />
                  <ProfileInfo>
                    <ProfileChannelInfo>
                      <Para>{videoDetails.channelName}</Para>
                      <Para>{videoDetails.subscribeCount} subscribers</Para>
                    </ProfileChannelInfo>
                    <ProfileDescription>
                      <Para>{videoDetails.description}</Para>
                    </ProfileDescription>
                  </ProfileInfo>
                </Profile>
              </VideoDetailsInLayout>
            </VideoLayout>
          )
        }}
      </Context.Consumer>
    )
  }

  FailureUI = () => (
    <Context.Consumer>
      {values => {
        const {mode} = values
        const failureImage = mode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer>
            <Image src={failureImage} slt="" />
            <Heading>Oops! Something Went Wrong</Heading>
            <Para>
              We are having some trouble to complete your request. Please try
              again.
            </Para>
            <Button type="button" onClick={this.renderVideos}>
              Retry
            </Button>
          </FailureContainer>
        )
      }}
    </Context.Consumer>
  )

  renderAllCases = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstant.SUCCESS:
        return this.renderVideoDetailsUI()
      case apiConstant.PROGRESS:
        return this.LoadingUI()
      case apiConstant.FAILURE:
        return this.FailureUI()

      default:
        return null
    }
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {mode} = value
          return (
            <VideoDetailsPageContainer themeMode={mode}>
              <Header />
              <DetailsContainer>
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                <VideoDetailsContainer themeMode={mode}>
                  {this.renderAllCases()}
                </VideoDetailsContainer>
              </DetailsContainer>
            </VideoDetailsPageContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}
export default VideoItemDetails
