import React from 'react'

const Title = ({ isClickable, onTitleClick }) => {
  return (
    <div 
      className={`title-container ${isClickable ? 'clickable' : ''}`} 
      onClick={isClickable ? onTitleClick : undefined}
    >
      <h1 id="main-title" className="main-title">Killay Bar</h1>
    </div>
  )
}

export default Title