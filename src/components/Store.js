import React from 'react'
import s8 from "./s8.png"
import se from "./se.png"
import ultra from "./ultra_Card.png"


export default function Store() {
  return (
    <div id="compare" style={{textAlign:'center', marginBottom:'5%'}}>
        <h1 style={{color:'white'}}>All Models</h1>
        <div className="row row-cols-2 row-cols-md-3 g-5" style={{textAlign:'center', padding:'5%'}}>
        <div className="col " >
            <div className="card h-100">
            <img src={s8} className="card-img-top" alt="..."/>
            <div>
                    <span className="dot" style={{backgroundColor:'#1a2530'}}></span>
                    <span className="dot" style={{backgroundColor:'#ded6d1'}}></span>
                    <span className="dot" style={{backgroundColor:'#e0e0e0'}}></span>
                    <span className="dot" style={{backgroundColor:'#c80e2d'}}></span>
                    <span className="dot" style={{backgroundColor:'#3e3a36'}}></span>
                    <span className="dot" style={{backgroundColor:'#e6e6e7'}}></span>
                    <span className="dot" style={{backgroundColor:'#d4bda1'}}></span>
                    <span className="dot" style={{backgroundColor:'#353536'}}></span>
            </div>
            
         <div className="card-body">
                <h3 className="card-title">Apple Watch S8</h3>
                <p className="card-text">From ₹7233.00/mo. with instant savings and No Cost EMI or ₹45900.00‡</p>
                <a href="https://www.apple.com/in/watch/" target='_blank' className="btn btn-primary">Shop Now</a>
                {/* <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a> */}
                <hr></hr>
                <h4>Features</h4>
                <h5>45 mm or 41 mm case size</h5>
                <h5>Certified IP6X dust resistant4</h5>
                <h5>Always-On Retina display</h5>
                    Up to 1,000 nits brightness
                <h5>Swimproof</h5>
                <h5>Blood Oxygen app and ECG app</h5>
                <h5>Temperature sensing</h5>
                <h5>Emergency SOS, Crash and Fall Detection</h5>
                <h5>Battery up to 18 hours</h5>

            </div>
            </div>
        </div>
        <div className="col ">
            <div className="card h-100 ">
            <img src={ultra} className="card-img-top" alt="..."/>
            <div>
                    
                    <span className="dot" style={{backgroundColor:'#ccc4bc'}}></span>
                    
            </div>
            <div className="card-body">
                <h3 className="card-title">Apple Watch Ultra</h3>
                <p className="card-text">From ₹14483.00/mo. with instant savings and No Cost EMI or ₹89900.00‡</p>
                <a href="https://www.apple.com/in/watch/" target='_blank' className="btn btn-primary">Shop Now</a>
                <hr></hr>
                <h4>Features</h4>
                <h5>49 mm case size</h5>
                <h5>Certified IP6X dust resistant4</h5>
                <h5>Always-On Retina display</h5>
                    Up to 2000 nits brightness
                <h5>Swimproof and recreational dive to 40 m</h5>
                <h5>Blood Oxygen app and ECG app</h5>
                <h5>Temperature sensing</h5>
                <h5>Emergency SOS, Crash and Fall Detection and 86-decibel Siren to attract attention</h5>
                <h5>Battery up to 18 hours</h5>
                
            </div>
            
            </div>
        </div>
        <div className="col" id="se">
            <div className="card h-100 ">
            <img src={se} className="card-img-top" alt="..."/>
            <div>
                    <span className="dot" style={{backgroundColor:'#1a2530'}}></span>
                    <span className="dot" style={{backgroundColor:'#ded6d1'}}></span>
                    <span className="dot" style={{backgroundColor:'#e0e0e0'}}></span>
            </div>
            <div className="card-body"  style={{paddingTop:'0'}}>
                <h3 className="card-title">Apple Watch SE</h3>
                <p className="card-text">From ₹4733.00/mo. with instant savings and No Cost EMI or ₹29900.00‡</p>
                <a href="https://www.apple.com/in/watch/" target='_blank' className="btn btn-primary">Shop Now</a>
                <hr></hr>
                <h4>Features</h4>
                <h5>44 mm or 40 mm case size</h5>
                <h5>Certified IP6X dust resistant4</h5>
                <h5>Retina display</h5>
                    Up to 1,000 nits brightness
                <h5>Swimproof</h5>
                <h5>---</h5>
                <h5>---</h5>
                <h5>Emergency SOS, Crash and Fall Detection</h5>
                <h5>Battery up to 36 hours</h5>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
