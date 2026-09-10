import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import CourseDetails from './Pages/CourseDetais';
import Students from './Pages/Students';
import Register from './Pages/Register';
import About from './Pages/About';
import Contect from './Pages/Contect'

function App() {
  

  return (
    <>
      <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/students" element={<Students />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contect />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </>
  );
}

export default App
