import React from 'react'

const Moon = ({ isClickable, onMoonClick }) => {
  return (
    <div 
      id="moon" 
      className={`moon ${isClickable ? 'clickable' : ''}`}
      onClick={isClickable ? onMoonClick : undefined}
    >
      <div className="moon-surface">
        <div className="crater crater-1"></div>
        <div className="crater crater-2"></div>
        <div className="crater crater-3"></div>
      </div>
    </div>
  )
}

export default Moon