import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import Context from '../../ContextData'

import {
  PopupContainer,
  LogoutButton,
  ModalContainer,
  PopupButton,
  ButtonsContainer,
  WarningMessage,
} from './style'

import 'reactjs-popup/dist/index.css'

const PopupDesign = props => {
  const onLogoutClicked = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  return (
    <Context.Consumer>
      {value => {
        const {mode} = value
        return (
          <PopupContainer>
            <Popup
              modal
              trigger={
                <LogoutButton type="button" data-testid="theme" darkMode={mode}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer darkMode={mode}>
                  <WarningMessage darkMode={mode}>
                    Are you sure, you want to logout
                  </WarningMessage>
                  <ButtonsContainer>
                    <PopupButton type="button" outline onClick={() => close()}>
                      Cancel
                    </PopupButton>
                    <PopupButton type="button" onClick={onLogoutClicked}>
                      Confirm
                    </PopupButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </PopupContainer>
        )
      }}
    </Context.Consumer>
  )
}

export default withRouter(PopupDesign)
