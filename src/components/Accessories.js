import React from 'react'
import { useState } from "react";

export default function Accessories() {
  const [soloBand, setSoloBand] = useState("green.jpg");
  const [sportsBand, setSportsBand] = useState("spbblue.jpg");
  const [milaneseBand, setMilaneseBand] = useState("milgold.jpg");
  return (
    <>
    <div id="accessories" style={{textAlign:'center', width:'90%', margin:'auto', marginBottom: '5%'}}>
      <h1 style={{color:'white', marginTop:'3%', marginBottom:'1%'}}>Watch Accessories</h1>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" style={{height:'500px', width:'100%', marginBottom:'20%'}} data-interval='1000'>
      <div className="carousel-indicators d-none">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner" style={{textAlign:'center', backgroundColor:'grey', paddingTop:'10px', paddingBottom:'10px'}}>
        <div className="carousel-item active " style={{textAlign:'center'}}>
            <img src={soloBand} className='band' ></img>
            {/* <h3>Solo Loop</h3> */}
            <h2 style={{color:'aliceblue'}}>Solo Loop</h2>
            <span>
              <button type="button" className="btn ms-5 me-3" onClick={()=>{setSoloBand('sbolive.jpg')}} style={soloBand==="sbolive.jpg"?{border:'2px solid black',backgroundColor:"olive", height:'25px'}:{border:'',backgroundColor:"olive", height:'25px'}} ></button>
              <button type="button" className="btn me-3" onClick={()=>{setSoloBand('sbyellow.jpg')}} style={soloBand==="sbyellow.jpg"?{border:'2px solid black',backgroundColor:"yellow", height:'25px'}:{border:'',backgroundColor:"yellow", height:'25px'}} ></button>
              <button type="button" className="btn me-3" onClick={()=>{setSoloBand('green.jpg')}} style={soloBand==="green.jpg"?{border:'2px solid black',backgroundColor:"lightgreen", height:'25px'}:{border:'',backgroundColor:"lightgreen", height:'25px'}} ></button>

              <button type="button" className="btn me-3" onClick={()=>{setSoloBand('sblavender.jpg')}} style={soloBand==="sblavender.jpg"?{border:'2px solid black',backgroundColor:"lavender", height:'25px'}:{border:'',backgroundColor:"lavender", height:'25px'}} ></button>
              <button type="button" className="btn me-3" onClick={()=>{setSoloBand('sbblue.jpg')}} style={soloBand==="sbblue.jpg"?{border:'2px solid black',backgroundColor:"lightblue", height:'25px'}:{border:'',backgroundColor:"lightblue", height:'25px'}} ></button>
              <button type="button" className="btn " onClick={()=>{setSoloBand('sbbeige.jpg')}} style={soloBand==="sbbeige.jpg"?{border:'2px solid black',backgroundColor:"beige", height:'25px'}:{border:'',backgroundColor:"beige", height:'25px'}} ></button>
              
            </span>
            
        
        
        </div>
        <div className="carousel-item" >
            <img src={sportsBand} className='band'></img>
            <h2 style={{color:'aliceblue'}}>Sports Band</h2>
            <span>
            <button type="button" className="btn ms-5 me-3" onClick={()=>{setSportsBand('spbwhite.jpg')}} style={sportsBand==="spbwhite.jpg"?{border:'2px solid black',backgroundColor:"white", height:'25px'}:{border:'',backgroundColor:"white", height:'25px'}} ></button>
            <button type="button" className="btn me-3 " onClick={()=>{setSportsBand('spbbeige.jpg')}} style={sportsBand==="spbbeige.jpg"?{border:'2px solid black',backgroundColor:"beige", height:'25px'}:{border:'',backgroundColor:"beige", height:'25px'}} ></button>
            <button type="button" className="btn me-3" onClick={()=>{setSportsBand('spbblue.jpg')}}  style={sportsBand==="spbblue.jpg"?{border:'2px solid black',backgroundColor:"lightblue", height:'25px'}:{border:'',backgroundColor:"lightblue", height:'25px'}} ></button>
            <button type="button" className="btn me-3" onClick={()=>{setSportsBand('spborange.jpg')}}  style={sportsBand==="spborange.jpg"?{border:'2px solid black',backgroundColor:"#ffb375", height:'25px'}:{border:'',backgroundColor:"#ffb375", height:'25px'}} ></button>
            <button type="button" className="btn me-3 " onClick={()=>{setSportsBand('spbred.jpg')}}  style={sportsBand==="spbred.jpg"?{border:'2px solid black',backgroundColor:"red", height:'25px'}:{border:'',backgroundColor:"red", height:'25px'}} ></button>
            <button type="button" className="btn me-3" onClick={()=>{setSportsBand('spbolive.jpg')}}  style={sportsBand==="spbolive.jpg"?{border:'2px solid black',backgroundColor:"olive", height:'25px'}:{border:'',backgroundColor:"olive", height:'25px'}} ></button>
            <button type="button" className="btn me-3" onClick={()=>{setSportsBand('spbblack.jpg')}}   style={sportsBand==="spbblack.jpg"?{border:'2px solid black',backgroundColor:"#333232", height:'25px'}:{border:'',backgroundColor:"#333232", height:'25px'}} ></button>
            </span>
        </div>
        <div className="carousel-item">
              <div><img src={milaneseBand} className='band'></img></div>
              <h2 style={{color:'aliceblue'}}>Milanese Band</h2>
              <span>
              <button type="button" className="btn ms-5 me-3" onClick={()=>{setMilaneseBand('milgold.jpg')}}  style={milaneseBand==="milgold.jpg"?{border:'2px solid black',backgroundColor:"#c7b5a0", height:'25px'}:{border:'',backgroundColor:"#c7b5a0", height:'25px'}}></button>
              <button type="button" className="btn me-3" onClick={()=>{setMilaneseBand('milsilver.jpg')}} style={milaneseBand==="milsilver.jpg"?{border:'2px solid black',backgroundColor:"#9f9fa1", height:'25px'}:{border:'',backgroundColor:"#9f9fa1", height:'25px'}}></button>
              <button type="button" className="btn me-3" onClick={()=>{setMilaneseBand('milgraphite.jpg')}} style={milaneseBand==="milgraphite.jpg"?{border:'2px solid black',backgroundColor:"#242220", height:'25px'}:{border:'',backgroundColor:"#242220", height:'25px'}}></button>
              </span>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
     </div>
    
    
    
    </>
  )
}