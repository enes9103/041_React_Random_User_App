import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
//user icons
import {MdLocalPostOffice} from 'react-icons/md';
import {FaMapMarkedAlt} from 'react-icons/fa';
import {BsTelephoneForward} from 'react-icons/bs'
//contact icons
import {BsFillEnvelopeFill} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs';



function App() { 
  const [user, setUser] = useState({});

  useEffect(() => {
    api();
  },[]);

  const api = () => {
    axios.get('https://randomuser.me/api/')
    .then(res => setUser(res.data.results[0]));
  }
  // console.log(api);

  const clickHandler = () => {
    api();
  }

  return (
    <div className='container'>
      <div className='row'>
        <img src={user.picture?.large} alt="user-img"/>
        <h3>{user.name?.title} {user.name?.first} {user.name?.last}</h3>
      </div>

      <div className='row'>
      <MdLocalPostOffice className='icon'/>
      <p>{user.email}</p>
      </div>

      <div className='row'>
        <BsTelephoneForward className='icon'/>
      <p>{user.phone}</p>
      </div>

      <div className='row'>
        <FaMapMarkedAlt className='icon'/>
        <p>{user.location?.city} - {user.location?.country}</p>
      </div>

      <div className='column'>
        <p>Age: {user.dob?.age}</p>
        <p>Register Date: {user.registered?.date.slice(0, 10)}</p>
        <button className='random-user' onClick={clickHandler}>Random User</button>
      </div>

      <div className='admin'>
        <p>Developer Contact</p>
        <hr />
        <a href="https://www.linkedin.com/in/enesunlu/" target="_blank"><BsLinkedin className='adminIcon'/></a>
        <a href="https://github.com/enes9103" target="_blank"><BsGithub className='adminIcon'/></a>
        <a href="mailto: enes9103@gmail.com"><BsFillEnvelopeFill className='adminIcon'/></a>
      </div>
      
    </div>
    
  );

}

export default App;
