import React from 'react'

export default function Updates() {
  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{color:'white'}}>Stay Updated!</h1>
      <br></br>
      <form action="https://formspree.io/f/mgejvdkb" method="POST">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br></br>
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}
