import { useState, useEffect } from 'react';

const API_URL= "http://localhost:5000/api/contects";

const initialForm = {name: "", email: "", subject: "", message: ""};

function Contect() {
const [formData, setFormData] = useState(initialForm);
const [messages, setMessages] = useState([]);
const [success, setSuccess] = useState('');
const [error, setError] = useState('');
const [loading, setLoading] = useState(true);

useEffect(()=>{
  fetchMessages();
}, []);

async function fetchMessages(){
  try{
    setLoading(true);
    const response = await fetch(API_URL);
    const data = await response.json();
    setMessages(data);
  }
  catch (err){
    console.error('Could not load messages:', err.message);
  }
  finally{
    setLoading(false);
  }
}
function handleChange(e){
  const {name, value} = e.target;
  setFormData({...formData,[name]: value});
}

async function handleSubmit(e){
   e.preventDefault();
   setSuccess('');
   setError('');
  if(!formData.name || !formData.email || !formData.subject || !formData.message){
    setError('Pleasr fill in all fields.');
    return;
  }
  try{
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {'contect-type':'application/json'},
      body: JSON.stringify(formData),
    })
    if(!response.ok)throw new Error('Failed to send message');
     const newMesssage = await response.json();
     setMessages([newMesssage, ...messages]);
     setSuccess('* message sent! we will back to you soon.');
     setFormData(initialForm);
  }
  catch(err){
    setError(err.message)
  }
  }
  return(
    <section className="section container">
      <div className="section-title">
        <h2>Contact Us</h2>
        <p>Have a question? send us a message. </p>
      </div>
      <div className="form-box"style={{marginBottom: 50}}>
        {success && <p className='sucess-msg'>{sucess}</p>}
        {error && <p className='erroe-msg'>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input name='name' value={formData.name} onChange={handleChange}placeholder='your Name' />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name='email' type='email' value={formData.email} onChange={handleChange}placeholder='your Email' />
            </div>
          </div>
            <div className="form-group">
              <label>Subject</label>
              <input name='Subject' value={formData.subject} onChange={handleChange}placeholder='Subject' />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows='5' value={formData.message} onChange={handleChange} placeholder='Your Message'></textarea>
            </div>
            <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      <div className="section-title">
        <h2>Submitted Message</h2>
      </div>
      {loading && messages.length === 0 && <p>No message yet.</p>}
      {!loading && messages.map((msg)=>(
        <div className="contact-list-items"key={msg._id}>
          <div>
            <strong>{msg.subject}</strong>
            <p>{msg.message}</p>
            <p style={{fontSize: "0.8rem",color:'#6B7280'}}>
              From {msg.name} ({msg.email})
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
export default Contect