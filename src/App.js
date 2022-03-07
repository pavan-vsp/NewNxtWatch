import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Context from './ContextData'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import './App.css'

// Replace your code here

class App extends Component {
  state = {mode: false, savedVideos: []}

  modeToggle = () => {
    this.setState(prev => ({mode: !prev.mode}))
  }

  savedVideos = obj => {
    const {savedVideos} = this.state
    this.setState({savedVideos: [...savedVideos, obj]})
  }

  render() {
    const {mode, savedVideos} = this.state
    return (
      <Context.Provider
        value={{
          mode,
          modeToggle: this.modeToggle,
          savedVideos,
          AddSavedVideos: this.savedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/videos/:id" component={VideoItemDetails} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/bad-path" component={NotFound} />
          <Route exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
