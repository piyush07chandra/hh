import React from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <div className='contact-component'>
      <h1>Contact</h1>
      <div className='contact'>
      
    
      <h3 ><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
      </svg > Email: <br/>piyushchandra9458@gmail.com</h3>
      <h3><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-phone-fill" viewBox="0 0 16 16">
        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
      </svg> Call:<br/>91+7579230565</h3>

      <h3><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      </svg> Location:<br/>Gufa Mahadev Mandir, 9F97+GXM, Tallital, Nainital, Uttarakhand</h3>
      <div className="mapouter">
        <div className="gmap_canvas"><iframe className="gmap_iframe" src="https://maps.google.com/maps?width=660&amp;height=800&amp;hl=en&amp;q=nainital gufamahadev&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
      </div>
      </div>

     

      <form className="form">
        
  <div className="mb-3">
    <label  className="form-label">Your Name</label>
    <input type="text" className="form-control"  aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label  className="form-label">Email</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">I'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Message</label>
    <input type="text" className="form-control" id='message'/>
  </div>
  <button onClick={()=>alert("Thanks for text me")} type="submit" className="btn btn-primary">Sent</button>
</form>
    </div>
  )
}

export default Contact;
