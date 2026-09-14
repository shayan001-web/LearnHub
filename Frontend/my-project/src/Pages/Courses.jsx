import { useState, useEffect } from "react";
import CourseCard from "../Components/CourseCard";

const API_URL = 'https://learn-hub-backend-git-main-shayan001-web.vercel.app/api/course';

function Courses(){
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState('');
    const [category,setCategory] = useState('');
    
    useEffect(()=>{
        async function fetchCourses(){
            try{
                setLoading(true);
                const response = await fetch(API_URL);
            if(!response.ok)throw new Error('Failed to Load Courses');
            const data = await response.json();
            setCourses(data);
            setError('');
            }
            catch(err){
                setError(err.message);
            }
            finally{
                setLoading(false);
            }
        }
        fetchCourses();
    },[]);
  
    const categories = [...new Set(courses.map((c)=>c.category))];
    const filteredCourses = category ? courses.filter((c)=>c.category === category) : courses;

    return(
        <section className="section container">
            <div className="section-title">
                <h2>All courses</h2>
                <p>Browse every course avalible on LearnHub</p>
            </div>
            <div className="toolbar">
            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="">All Categories</option>
                {categories.map((cat)=>(
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <span className="count-badge">{filteredCourses.length}Courses</span>
            </div>
            {loading && <p>Loading Courses...</p>}
            {error && <p className="error-message">{error}</p>}
            {!loading && !error && filteredCourses.length === 0 && (<p>No Courses Found</p>)}
            {!loading && !error &&(
                <div className="grid">{filteredCourses.map((course)=>(<CourseCard key={course._id} course={course} />

                ))}
                </div>
            )}
        </section>
    );
}
export default Courses
