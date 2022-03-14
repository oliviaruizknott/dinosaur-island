import React from 'react'
import '../styles/App.scss'

import Lab from '../components/Lab'
import Messages from '../features/messages/Messages'

function App() {
  return (
    <div className="App">
      <Lab />
      <Messages />
    </div>
  )
}

export default App
