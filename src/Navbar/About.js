import React from 'react';
import './About.css'


const About = () => {
  return (
    <div  className='about' >
     <h1 className='css'>About</h1>
      <p className='para'>My name is Piyush Chandra.I am from Nainital (Uttarakhand),I compleated my diploma in Information Teachnology from government 
       Pollytechnic Nainital.Now days i am learning about web developement. </p><br/>
       
      <h1 className='css'>Web developer</h1>
        <p className='para'>A web developer is a programmer who develops World Wide Web applications using a client–server model. 
        The applications typically use HTML, CSS, and JavaScript in the client, and any general-purpose programming language in the server.
         HTTP is used for communications between client and server.
         Web developers create and maintain websites. They are also responsible for the site's technical aspects,
          such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle. 
         In addition, web developers may create content for the site</p>
           <br/>
           <h1 className='css'>Basic details </h1>
       <ul className='details'>
          <li><h4>Birthday: 6 MAY 2000</h4></li> 
          <li><h4>Phone: 7579230565</h4></li>
          <li><h4>city: Nainital</h4></li> 
          <li><h4>Age: 23</h4></li>
          <li><h4>Email: piyushchandra9458@gmail.com</h4></li>
           </ul>
           <br />

          <h1 className='css'>Education</h1>    
       <div className='details'>
           <h4>Government Inter college (Nainital)</h4>
           <p> Class: 10th in 2016</p>
           <p>70.2%</p>
           <h4>Government Inter college (Nainital)</h4>
           <p>Class: 12th in 2018</p>
           <p>53%</p>
           <h4>Government Polytechnic (Nainital)</h4>
           <p>Trade: Diploma in Information Texhnology in 2021</p>
           <p>65%</p>
           <h4>Uttrakhand Open University</h4>
           <p>Course: Bachelor of arts</p>
           <p>Appearing</p>
</div>
           <br />
           <h1 className='css'>Hobbies</h1>
        <ol className='para'>
        <li>Playing cricket </li> 
        <li>Playing Football </li>
        <li>Playing online games </li>
           </ol>
           <br/>
           
           
       <h1 className='css'>Programming Skills</h1>
         <div className='skills'>
           <h5>These are the skills which i am learning from past 1 years.</h5>
          <br />
   
   </div>
<ul className='languages'>
<h2>html</h2>
   <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar1" >80%</div>
</div>
<h2>CSS</h2>
<div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar2" >60%</div>
</div>
<h2>javascript</h2>
<div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar3" >70%</div>
</div>
<h2>React.js</h2>
<div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar4" >70%</div>
</div>
<h2>Python</h2>
<div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar5" >40%</div>
</div>
</ul>
<br />

<h1 className='css'>Certificates</h1>
<div className="certificate">
  <ul>
  <li><h6 className='a'>web developement course from Udemy</h6></li>
  <li><h6 className='a'>State Leve drawing competition</h6></li>
  <li><h6 className='b'>State Level Footbal tournament</h6></li>
  <li><h6 className='c'>State Level Footbal tournament</h6></li>
  <li><h6 className='d'>Basics of python from Great Learning academy</h6></li>
  <li><h6 className='e'>Bootstrap from Great learning academy</h6></li>
  <li><h6 className='f'>Html from Great Learning academy</h6></li>
  <li><h6 className='g'>buildin games using javascript from Great Learning academy</h6></li>
  <li><h6 className='h'>React j.s. from Great Learning academy</h6></li>
  </ul>
  
</div >  
    </div>
  )
}

export default About;
