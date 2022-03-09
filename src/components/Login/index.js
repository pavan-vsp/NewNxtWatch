import {Component} from 'react'
import {withRouter, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  UniversalStyle,
  Input,
  Label,
  LoginPageContainer,
  LoginBtn,
  ErrorMsg,
  Inner,
  FormContainer,
  CheckboxContainer,
  InnerPassword,
  MainPasswordContainer,
  LogoImage,
} from './style'
import Context from '../../ContextData'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showMsz: false,
    errorMsz: '',
  }

  onEnterUsername = e => {
    this.setState({username: e.target.value})
  }

  onEnterPassword = e => {
    this.setState({password: e.target.value})
  }

  LoginFailure = data => {
    this.setState({showMsz: true, errorMsz: data.error_msg})
  }

  LoginSuccess = data => {
    const jwtToken = data.jwt_token
    Cookies.set('jwt_token', jwtToken, {expires: 3})
    const {history} = this.props
    history.replace('/')
  }

  renderLoginDetails = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'

    const strData = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(strData),
    }
    const fetchedData = await fetch(url, options)
    const data = await fetchedData.json()
    if (fetchedData.ok) {
      this.LoginSuccess(data)
    } else {
      this.LoginFailure(data)
    }
  }

  PasswordToggle = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <InnerPassword>
        <Label htmlFor="text">USERNAME</Label>
        <Input
          type="text"
          id="text"
          placeholder="Username"
          value={username}
          onChange={this.onEnterUsername}
        />
      </InnerPassword>
    )
  }

  renderPassword = () => (
    <Context.Consumer>
      {() => {
        const {password, showPassword} = this.state

        return (
          <MainPasswordContainer>
            <InnerPassword>
              <Label htmlFor="text">PASSWORD</Label>
              {showPassword ? (
                <Input
                  type="text"
                  id="text"
                  placeholder="Password"
                  value={password}
                  onChange={this.onEnterPassword}
                />
              ) : (
                <Input
                  type="password"
                  id="text"
                  placeholder="Password"
                  value={password}
                  onChange={this.onEnterPassword}
                />
              )}
            </InnerPassword>
            <CheckboxContainer>
              <input
                type="checkbox"
                id="checkbox"
                onClick={this.PasswordToggle}
              />
              <label htmlFor="checkbox">Show Password</label>
            </CheckboxContainer>
          </MainPasswordContainer>
        )
      }}
    </Context.Consumer>
  )

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <Context.Consumer>
        {value => {
          const {showMsz, errorMsz} = this.state

          const {mode} = value
          const imageUrl = mode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginPageContainer>
              <UniversalStyle />
              <Inner>
                <LogoImage src={imageUrl} alt="website logo" />
                <FormContainer onSubmit={this.renderLoginDetails}>
                  {this.renderUsername()}
                  {this.renderPassword()}
                  {showMsz ? <ErrorMsg>{errorMsz}</ErrorMsg> : null}
                  <LoginBtn type="submit">Login</LoginBtn>
                </FormContainer>
              </Inner>
            </LoginPageContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default withRouter(Login)
