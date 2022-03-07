import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {GrClose} from 'react-icons/gr'
import {BiSearchAlt2} from 'react-icons/bi'
import {formatDistanceToNow} from 'date-fns'

import Context from '../../ContextData'
import Header from '../Header'
import SideBar from '../SideBar'
import VideItem from '../VideoItem'
import {
  HomeMainContainer,
  MoviesListContainer,
  Ul,
  LoadingContainer,
  BannerImageContainer,
  VideosListContainer,
  Image,
  Para,
  Heading,
  Button,
  InnerBannerContainer,
  BannerDetailsContainer,
  FailureContainer,
  InputContainer,
  SearchButton,
  SearchIconContainer,
  Input,
  SideBarContainer,
  ListOfVideosContainer,
} from './styed'

const apiConstant = {
  INITIAL: 'initial',
  PROGRESS: 'progress',
  FAILURE: 'failure',
  SUCCESS: 'success',
}

class Home extends Component {
  state = {
    apiStatus: apiConstant.INITIAL,
    VideosList: [],
    bannerImageShow: true,
  }

  componentDidMount() {
    this.renderVideos()
  }

  renderVideos = async () => {
    this.setState({apiStatus: apiConstant.PROGRESS})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/all'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    }

    const fetchedData = await fetch(url, options)
    if (fetchedData.ok) {
      const data = await fetchedData.json()
      const newData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        channelName: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))

      this.setState({apiStatus: apiConstant.SUCCESS, VideosList: [...newData]})
    } else {
      this.setState({apiStatus: apiConstant.FAILURE})
    }
  }

  renderVideosUI = () => {
    const {VideosList, bannerImageShow} = this.state
    return (
      <VideosListContainer>
        {bannerImageShow && this.renderBannerImage()}
        <InputContainer>
          <Input
            type="search"
            placeholder="Search"
            style={{background: 'transparent'}}
          />
          <SearchIconContainer>
            <SearchButton type="button" style={{border: 'none'}}>
              <BiSearchAlt2 size={20} />
            </SearchButton>
          </SearchIconContainer>
        </InputContainer>
        <Ul>
          {VideosList.map(eachItem => (
            <VideItem videoDetails={eachItem} key={eachItem.id} />
          ))}
        </Ul>
      </VideosListContainer>
    )
  }

  LoadingUI = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" width={30} height={30} color="lightblue" />
    </LoadingContainer>
  )

  onClickOnCrossIcon = () => {
    this.setState({bannerImageShow: false})
  }

  renderBannerImage = () => (
    <Context.Consumer>
      {value => {
        const {mode} = value

        return (
          <BannerImageContainer>
            <InnerBannerContainer>
              <BannerDetailsContainer>
                <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
                <Heading>Buy Nxt Watch Premium prepaid plans with UPI</Heading>
              </BannerDetailsContainer>
              <GrClose
                onClick={this.onClickOnCrossIcon}
                style={{cursor: 'pointer'}}
              />
            </InnerBannerContainer>
            <Button type="button">GET IT NOW</Button>
          </BannerImageContainer>
        )
      }}
    </Context.Consumer>
  )

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
        return this.renderVideosUI()
      case apiConstant.PROGRESS:
        return this.LoadingUI()

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
            <HomeMainContainer>
              <Header />
              <MoviesListContainer themeMode={mode}>
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                <ListOfVideosContainer themeMode={mode}>
                  {this.renderAllCases()}
                </ListOfVideosContainer>
              </MoviesListContainer>
            </HomeMainContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Home
