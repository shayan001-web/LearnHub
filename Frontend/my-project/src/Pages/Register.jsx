import React, { useState } from 'react';

const API_URL = 'https://learn-hub-backend-git-main-shayan001-web.vercel.app/api/students';
const initialForm = {name:'',email:'',age:'',city:'',course:'',phone:''};

function Register() {
       const [formData, setFormData] = useState(initialForm);
        const [sucess, setsucess] = useState('');
        const [error,setError] = useState('');


function handleChange(e){
    const {name ,value} = e.target;
    setFormData({...formData,[name]:value});
}

async function handleSubmit(e){
    e.preventDefault();
    setsucess('');
    setError('');

const {name, email, age, city, course, phone} = formData;

if(!name || !email || !age || !city || !course || !phone){
    setError('Please fill in all fields.')
  return;
} 
try{
    const response = await fetch(API_URL ,{
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(formData),
    });
    if(!response.ok)throw new Error('Registration failed. PLease try again.');
    setsucess('Registration Sucessfull ! We will Contect you soon.');
    setFormData(initialForm);
}
catch(err){
    setError(err.message);
}
}

return(
    <section className='section container'>
        <div className="section-title">
            <h2>Student Registration</h2>
              <p>Fill in your details to register for a course</p>
        </div>
        <div className="form-box">
            {sucess && <p className='sucess-msg'>{sucess}</p>}
            {error && <p className='error-msg'>{error}</p>}
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group">
                    <label>Name</label>
                    <input name="name" value={formData.name} onChange={handleChange} placeholder='Your Full Name' />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='you@gmail.com' />
                </div>
            </div>
            <div className="for-row">
                <div className="form-group">
                    <label>Age</label>
                    <input type="number" value={formData.age} name='age' onChange={handleChange} placeholder='Your age' />
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder='Your City' />
                </div>
            </div>
            <div className="from-now">
                <div className="form-group">
                    <label>Course</label>
                    <select name="course" value={formData.course} onChange={handleChange}>
                        <option value="">Select a course</option>
                        <option value="Web Development">Web Develpoment</option>
                        <option value="Java Script">Java Script</option>
                        <option value="React.Js">React.Js</option>
                        <option value="Node.Js">Node.Js</option>
                        <option value="MondoDB">MongoDB</option>
                        <option value="Full Stack Development">Full Stack Develpoment</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input  name="phone" value={formData.phone}onChange={handleChange} placeholder='03001234567' />
                </div>
            </div>
            <button type="submit" className='btn btn-primary'>Register Student</button>
        </form>
        </div>
    </section>
  );
}
export default Register
