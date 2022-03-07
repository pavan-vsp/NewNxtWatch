import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome, AiOutlineHome} from 'react-icons/ai'
import {HiOutlineFire, HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import ContextData from '../../ContextData'
import {
  SideBarContainer,
  NavigatorsContainer,
  Para,
  ContactDetails,
  Navigator,
  Image,
  SocialIconContainer,
} from './style'

class SideBar extends Component {
  state = {
    HomeActive: true,
    GamingActive: false,
    TrendingActive: false,
    SavedVideos: false,
  }

  ToggleHomeClr = () => {
    this.setState(prev => ({
      GamingActive: false,
      SavedVideos: false,
      TrendingActive: false,
      HomeActive: !prev.HomeActive,
    }))
  }

  ToggleGamingClr = () => {
    this.setState(prev => ({
      HomeActive: false,
      TrendingActive: false,
      SavedVideos: false,
      GamingActive: !prev.GamingActive,
    }))
  }

  ToggleTrendingClr = () => {
    this.setState(prev => ({
      HomeActive: false,
      GamingActive: false,
      SavedVideos: false,
      TrendingActive: !prev.TrendingActive,
    }))
  }

  ToggleSavedVideoClr = () => {
    this.setState(prev => ({
      GamingActive: false,
      HomeActive: false,
      TrendingActive: false,
      SavedVideos: !prev.SavedVideos,
    }))
  }

  render() {
    return (
      <ContextData.Consumer>
        {value => {
          const {mode} = value

          const {
            HomeActive,
            GamingActive,
            TrendingActive,
            SavedVideos,
          } = this.state
          const textColor = mode ? '#f9f9f9' : '#0f0f0f'
          const HomeClr = HomeActive ? 'red' : 'black'
          const GamingClr = HomeActive ? '' : null
          const TrendingClr = HomeActive ? '' : null
          const SavedVideosClr = HomeActive ? '' : null

          return (
            <SideBarContainer themeMode={mode}>
              <NavigatorsContainer themeMode={mode}>
                <Link
                  to="/"
                  style={{textDecoration: 'none', color: `${textColor}`}}
                >
                  <Navigator>
                    {mode ? <AiFillHome /> : <AiOutlineHome />}
                    <Para>Home</Para>
                  </Navigator>
                </Link>
                <Link
                  to="/gaming"
                  style={{textDecoration: 'none', color: `${textColor}`}}
                >
                  <Navigator>
                    <SiYoutubegaming className="icon" />
                    <Para>Gaming</Para>
                  </Navigator>
                </Link>
                <Link
                  to="/trending"
                  style={{textDecoration: 'none', color: `${textColor}`}}
                >
                  <Navigator>
                    {mode ? <HiFire color="red" /> : <HiOutlineFire />}
                    <Para>Trending</Para>
                  </Navigator>
                </Link>
                <Link
                  to="/"
                  style={{'text-decoration': 'none', color: `${textColor}`}}
                >
                  <Navigator>
                    <BiListPlus />
                    <Para>Saved Videos</Para>
                  </Navigator>
                </Link>
              </NavigatorsContainer>
              <ContactDetails themeMode={mode}>
                <Para>CONTACT US</Para>
                <SocialIconContainer>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                    alt="facebook logo"
                  />
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                    alt="twitter logo"
                  />
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                    alt="linked in logo"
                  />
                </SocialIconContainer>
                <Para>
                  Enjoy! Now to see your channels and recommendations!
                </Para>
              </ContactDetails>
            </SideBarContainer>
          )
        }}
      </ContextData.Consumer>
    )
  }
}

export default SideBar
