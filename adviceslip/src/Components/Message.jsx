import React from 'react'

const Message = (props) => {
  return (
    <div>
              <p className="text-white">Total Quotes Generated: {props.count}</p>

    </div>
  )
}

export default Message