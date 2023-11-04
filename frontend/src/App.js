
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import {LeaveRequestForm} from './components/leaveRequest'
import Test from "./test";
import { Navbar } from "./components/Navbar";
import { StudentApplyAdmission } from "./components/StudentApplyAdmission";
import Home from "./components/Home";
import Footer from "./components/footer";
import Profile from "./components/profile";
import { StudentNav } from "./components/studentNav";
import ShowStudentAdmissinData from "./components/showStudentAdmissinData";


function App() {




    return (
     
        
      <BrowserRouter>
        <Navbar/>
        <Routes>
        
          <Route index element={<Home />} />
          <Route path="leaverequest" element={<LeaveRequestForm />} />
       
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="apply_student_admission" element={<StudentApplyAdmission />} />
          <Route path="profile" element={<Profile />} />
          <Route path="studentnav" element={<StudentNav />} />
          <Route path="student-get" element={<ShowStudentAdmissinData />} />

         


        </Routes>
        <Footer />
      </BrowserRouter>
    );
}

    
export default App;

