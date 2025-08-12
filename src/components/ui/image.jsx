import React from 'react'

const Image = ({src , alt , classname, onClick}) => {
  return (
    <img src={src} alt={alt}  className={classname} onClick={onClick}/>
  )
}

export default Image