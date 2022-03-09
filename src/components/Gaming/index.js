import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Context from '../../ContextData'
import SideBar from '../SideBar'
import Header from '../Header'
import GamingVideoItem from '../GamingVideoItem'

import {
  FailureContainer,
  Heading,
  Para,
  LoadingContainer,
  Image,
  Button,
  GamingPageContainer,
  DetailsContainer,
  GamingVideosContainer,
  GamingUi,
  SideBarContainer,
  GamingBannerContainer,
} from './style'

const apiConstant = {
  INITIAL: 'initial',
  PROGRESS: 'progress',
  FAILURE: 'failure',
  SUCCESS: 'success',
}

class Gaming extends Component {
  state = {apiStatus: apiConstant.INITIAL, gamingVideos: []}

  componentDidMount() {
    this.renderGamingVideos()
  }

  renderGamingVideos = async () => {
    this.setState({apiStatus: apiConstant.PROGRESS})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const fetchedData = await fetch(url, options)
    const data = await fetchedData.json()
    if (fetchedData.ok) {
      const newData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiStatus: apiConstant.SUCCESS,
        gamingVideos: [...newData],
      })
    } else {
      this.setState({apiStatus: apiConstant.FAILURE})
    }
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
            <Image src={failureImage} alt="failure view" />
            <Heading>Oops! Something Went Wrong</Heading>
            <Para>
              We are having some trouble to complete your request. Please try
              again.
            </Para>
            <Button type="button" onClick={this.renderGamingVideos}>
              Retry
            </Button>
          </FailureContainer>
        )
      }}
    </Context.Consumer>
  )

  renderGamingVideosUI = () => {
    const {gamingVideos} = this.state
    return (
      <GamingUi>
        {gamingVideos.map(eachItem => (
          <GamingVideoItem key={eachItem.id} gameDetails={eachItem} />
        ))}
      </GamingUi>
    )
  }

  LoadingUI = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" width={30} height={30} color="lightblue" />
    </LoadingContainer>
  )

  renderAllCases = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstant.SUCCESS:
        return this.renderGamingVideosUI()
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
            <GamingPageContainer>
              <Header />
              <DetailsContainer themeMode={mode}>
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>

                <GamingVideosContainer themeMode={mode}>
                  <GamingBannerContainer>
                    <HiFire color="red" size={30} /> <Heading>Gaming</Heading>
                  </GamingBannerContainer>
                  {this.renderAllCases()}
                </GamingVideosContainer>
              </DetailsContainer>
            </GamingPageContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Gaming
