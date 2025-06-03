import React from 'react'

const FinalScene = ({ onMoonClick }) => {
  return (
    <div className="final-container">
      <div 
        className="final-moon clickable" 
        id="clickable-moon"
        onClick={onMoonClick}
      >
        <div className="moon-surface">
          <div className="crater crater-1"></div>
          <div className="crater crater-2"></div>
          <div className="crater crater-3"></div>
        </div>
      </div>
      <h1 className="final-title">Killay Bar</h1>
    </div>
  )
}

export default FinalScene