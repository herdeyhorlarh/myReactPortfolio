import React from 'react';
 import { useState } from 'react';
 import './Contact.css'
 
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <div className='contact' id='contact'>
    <h2 className='con'>
        Contact Me:
    </h2>
    <form className='myform' onSubmit={handleSubmit}>
      <div className='formBox'>
        <label className="myname">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='formBox'>
        <label className="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='formBox'>
        <label className="message">Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
        <div className='buttonDiv'>
        <button className='button' type="submit">Submit</button>
        </div>
    </form>
    </div>
    </>
  );
}



export default Contact;
