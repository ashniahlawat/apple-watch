import React from 'react'
import watchLogo from './watchlogo.png'

export default function Navbar() {
  return (
    <>
        <section className="text-center text-light" style={{backgroundColor:"black"}}>
            <b>APPLE WATCH SERIES 9 COMING SOON!</b>
        </section>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundImage:"url('navbarbg.jpg')"}}>
        <div className="container-fluid">

              <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto" style={{fontSize:'21px'}}>
                <li className="nav-item my-2 mx-5">
                <a className="nav-link active" aria-current="page" href="#ultra">Videos</a>
                </li>
                <li className="nav-item my-2 mx-5">
                <a className="nav-link " aria-current="page" href="#compare">Compare</a>
                </li>

                <a className="d-none d-sm-block" href="/"><img src={watchLogo} alt="Logo" width="90px" height="60px" className="mx-5 my-2 .d-lg-none" /></a>
                
                <li className="nav-item my-2 mx-5">
                <a className="nav-link" href="#accessories">Accessories</a>
                </li>
                <li className="nav-item my-2 mx-5">
                <a className="nav-link " aria-current="page" href="#updates">Updates</a>
                </li>
                
            </ul>
            </div>
        </div>
        </nav>
        
    </>
  )
}

