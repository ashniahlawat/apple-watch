import React from 'react'
import ult from "./ultra_video.mp4"
import s8 from "./s8 video.mp4"

export default function videos() {
  return (
      <div className="container-fluid" style={{marginTop:'6%'}}>
        
        
        <video id="ultra" className="col-xs-12 col-md-12 video-fluid" autoPlay loop muted >
            <source src={ult} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        
        <video id="s8" className="col-xs-12 col-md-12 my-4 video-fluid" autoPlay loop muted >
            <source src={s8} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
  )
}