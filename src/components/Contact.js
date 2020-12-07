import React from 'react';
import './Contact.css';

const name = 'Dark vador';
const imgAvatar = new URL('https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/8-starwarsepisode3larevan_ver_1_0.jpg?itok=EKPiWtCq');
const online = true;

function Contact() {
  return (
    <div className="Contact">
      <img className='avatar' src={imgAvatar} />
      <div className='status'>
        <h4 className='name'>{name}</h4>
        <div className='status-online'></div>
        <p className='status-text'>{online ? 'Online' : 'Offline'}</p>
      </div>
    </div>
  );
}


export default Contact;