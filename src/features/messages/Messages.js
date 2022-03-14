import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { selectMessages } from './messagesSlice'

const Messages = () => {
  const messages = useSelector(selectMessages, shallowEqual)

  const renderMessages = () => {
    return messages.map((message, index) => {
      return <p key={index}>{message}</p>
    })
  }

  return (
    <div className="Messages">
      {renderMessages()}
    </div>
  )
}

export default Messages
