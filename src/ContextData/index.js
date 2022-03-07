import React from 'react'

const context = React.createContext({
  mode: '',
  modeToggle: () => {},
  savedVideos: [],
  AddSavedVideos: () => {},
})
export default context
