import './index.css'
import Context from '../../ContextData'

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
        </div>
      )
    }}
  </Context.Consumer>
)

export default NotFound
