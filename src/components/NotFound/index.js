import styled from 'styled-components/macro'
import './index.css'
import Context from '../../ContextData'

const Heading = styled.h1``
const Para = styled.p``

const NotFound = () => (
  <Context.Consumer>
    {values => {
      const {mode} = values
      const imageUrl = mode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <div className="not-found-container">
          <img src={imageUrl} alt="not found" className="not-found-img" />
          <Heading>Page Not Found</Heading>
          <Para>we are sorry, the page you requested could not be found.</Para>
        </div>
      )
    }}
  </Context.Consumer>
)

export default NotFound
