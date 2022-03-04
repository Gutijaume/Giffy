import React from 'react'

export default function gif({title, id, url}) {
  return (
    <div>
        <h3>{title}</h3>
        <img src={url} alt= {id}/>
    </div>
  )
}
