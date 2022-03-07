import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Context from '../../ContextData'
import SideBar from '../SideBar'
import Header from '../Header'
import TrendingVideoItem from '../TrendingVideoItem'

import {
  FailureContainer,
  Heading,
  Para,
  LoadingContainer,
  Image,
  Button,
  TrendingPageContainer,
  TrendingVideoContainer,
  SideBarContainer,
  DetailsContainer,
  TrendingUi,
} from './style'

const apiConstant = {
  INITIAL: 'initial',
  PROGRESS: 'progress',
  FAILURE: 'failure',
  SUCCESS: 'success',
}

class Gaming extends Component {
  state = {trendingVideos: [], apiStatus: apiConstant.INITIAL}

  componentDidMount() {
    this.renderTrendingVideos()
  }

  renderTrendingVideos = async () => {
    this.setState({apiStatus: apiConstant.PROGRESS})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        apiStatus: apiConstant.SUCCESS,
        trendingVideos: [...newData],
      })
    } else {
      this.setState({apiStatus: apiConstant.FAILURE})
    }
  }

  renderTrendingVideosUI = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingUi>
        {trendingVideos.map(eachVideo => (
          <TrendingVideoItem key={eachVideo.id} trendingDetails={eachVideo} />
        ))}
      </TrendingUi>
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
            <Image src={failureImage} alt="im" />
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

  LoadingUI = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" width={30} height={30} color="lightblue" />
    </LoadingContainer>
  )

  renderAllCases = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstant.SUCCESS:
        return this.renderTrendingVideosUI()
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
            <TrendingPageContainer>
              <Header />
              <DetailsContainer>
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                <TrendingVideoContainer themeMode={mode}>
                  {this.renderAllCases()}
                </TrendingVideoContainer>
              </DetailsContainer>
            </TrendingPageContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Gaming
