import {Link, withRouter} from 'react-router-dom'
import PopupComponent from '../PopupComponent'
import {Image, NavBar, BtnsContainer, TogglerBtn, WebSiteLogoBtn} from './style'
import Context from '../../ContextData'

const Header = () => (
  <Context.Consumer>
    {values => {
      const {modeToggle, mode} = values
      const onClickOnModeBtn = () => {
        modeToggle()
      }

      const imageUrl = mode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const modeImageUrl = mode
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <NavBar themeMode={mode}>
          <Link to="/">
            <WebSiteLogoBtn type="button">
              <Image src={imageUrl} alt="website logo" imageWidth="200" />
            </WebSiteLogoBtn>
          </Link>

          <BtnsContainer>
            <TogglerBtn
              type="button"
              className="mode-toggler-btn"
              onClick={onClickOnModeBtn}
            >
              <Image
                src={modeImageUrl}
                alt=""
                className="mode-toggler-image"
                imageWidth="50"
              />
            </TogglerBtn>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
              alt="profile"
              imageWidth="50"
            />

            <PopupComponent />
          </BtnsContainer>
        </NavBar>
      )
    }}
  </Context.Consumer>
)

export default withRouter(Header)
