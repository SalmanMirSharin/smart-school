
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { StudentApplyAdmission } from "./components/StudentApplyAdmission";



function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/apply_student_addmission" element={<StudentApplyAdmission />} />

        </Routes>
      </BrowserRouter>
    );
}
    
export default App;

