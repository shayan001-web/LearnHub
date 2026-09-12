import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CourseCard from '../Components/CourseCard';

const API_URL = 'https://learn-hub-93dk.vercel.app/courses';

function Home(){
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function fetchFeaturedCourses(){
            try{
                const response = await fetch(API_URL);
                const data = await response.json();
                setCourses(data.slice(0,3));
            }
            catch(err){
                console.error('Could not load featured courses :',err.message);
            }
            finally{
                setLoading(false);
            }
        }
     fetchFeaturedCourses();
    },[])
    
    return(
        <div>
            <section className="hero">
           <h1>Learn New,Skills,Anytime,Anywhere </h1>
           <p>LearnHub is a student learning platform where you can explore real courses,register,and start building your future - one skill at a time</p>
            <div className="hero-buttons">
                <Link to='/courses'className="btn btn-accent">Explore Courses</Link>
                <Link to='/register'className="btn btn-outline">Register Now</Link>
            </div>
            </section>
            <section className="section container">
                <div className="section-title">
                    <h2>Featured Courses</h2>
                    <p>A few of the courses our students love the most.</p>
                </div>
                {loading && <p>Loading courses...</p>}
                {!loading && (<div className="grid">
                    {courses.map((course)=>(
                        <CourseCard key={course._id}course={course} />
                        ))}
                        </div>
                    )}
            </section>
            <section className="section container">
                <div className="section-title">
                    <h2>Why Choose LearnHub</h2>
                    <p>Everything you need to learn, practice , and grow.</p>
                </div>
                <div className="why-us-grid">
                    <div className="why-us-card">
                        <div className="icon"></div>
                        <h3>Beginner Friendly</h3>
                        <p>Coueses designed from zero, with real projects, not just theory</p>
                </div>
                <div className="why-us-card">
                    <div className="icon"></div>
                    <h3>Expert Instructor</h3>
                    <p>learn feom instructor who build ral software every day.</p>
                </div>
                <div className="why-us-card">
                    <div className="icon"></div>
                    <h3>Hand-on Practice</h3>
                    <p>Every course include practical tasks and real project work.</p>
                </div>
                <div className="why-us-card">
                    <div className="icon"></div>
                    <h3>Career Growth</h3>
                    <p>Build the exact skills employer are looking for today.</p>
                </div>
                </div>
            </section>
            <section className="stats">
                <div>
                    <h3>6+</h3>
                    <p>Courses Avalible</p>
                </div>
                <div>
                    <h3>500+</h3>
                    <p>Student Enrolled</p>
                </div>
                <div>
                    <h3>10+</h3>
                    <p>Expert Instructor</p>
                </div>
                <div>
                    <h3>95%</h3>
                    <p>Statisfaction Rate</p>
                </div>
            </section>
        </div>
    );
    }
export default Home
