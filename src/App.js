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
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// Replace your code here

class App extends Component {
  state = {mode: false, savedVideos: []}

  modeToggle = () => {
    this.setState(prev => ({mode: !prev.mode}))
  }

  savedVideos = obj => {
    const {savedVideos} = this.state
    const {videoInfo} = obj

    const SavedId = savedVideos.find(
      eachVideoId => eachVideoId.id === videoInfo.id,
    )

    if (SavedId === undefined) {
      this.setState({savedVideos: [videoInfo]})
    } else {
      const objId = savedVideos.filter(
        eachVideoId => eachVideoId.id !== videoInfo.id,
      )
      this.setState({savedVideos: [...objId]})
    }
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
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/bad-path" component={NotFound} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/bad-path" component={NotFound} />
          <Route path="/not-found" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
