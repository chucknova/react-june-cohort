import React from 'react'

const Fridaydrops = (props) => {
    
  return (
    <div>
        <div className="sectionHeader">
            <p>Brand new music from artists you love</p>
            <h3>Friday drops picked for you</h3>
        </div>
        <div className="music-row">
            <div className="music-card">
                <img src={props.musiccover} alt="" srcset="" />
                <h1>{props.musicname}</h1>
                <p>{props.artist}</p>
            </div>
        </div>
    </div>
  )
}

export default Fridaydrops