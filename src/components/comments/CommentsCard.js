import React from 'react'

const CommentsCard = ({comments:{name,body},first}) => {
  return (
    <div>
        <h4>{name}</h4>
        <p>{body}</p>
        <h4>{first}</h4>
        </div>
  )
}

export default CommentsCard