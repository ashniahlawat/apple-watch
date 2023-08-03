import React from 'react'

export default function Footer() {
   
  return (
    <>
    <div id="footer" style={{backgroundImage:'url("home_bg.gif")', textAlign:'center'}}>
     
    <div id="updates" style={{textAlign:'center', position:'absolute', top:'20%', left:'40%'}}>
      <h1 style={{color:'white'}}>Stay Updated!</h1>
      <br></br>
      <form action="https://formspree.io/f/mgejvdkb" method="POST">
        <label>
          <input type="text" name="name" placeholder="NAME:"/>
        </label>
        <br></br>
        <label>
          <input type="email" name="email" placeholder="EMAIL:" />
        </label>
        <br></br>
        <button className="btn btn-dark my-2 " type="submit">Submit</button>
      </form>

    </div>

    <span style={{position:'absolute', top:'80%', left:'38%'}}>
      <b className='h2 mx-3' style={{color:'white'}}>Time</b>
      
      <img className="mx-5 d-none d-md-inline" src="applelogo.png" width='70' height='70'></img>
      <img className="mx-3 d-inline d-md-none" src="applelogo.png" width='40' height='40'></img>
     
      <b className='h2 mx-3' style={{color:'white'}}>Redefined.</b>
      
      </span>
    </div>
    
    </>
  )
}
