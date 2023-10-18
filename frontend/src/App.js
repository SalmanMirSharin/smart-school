
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import {LeaveRequestForm} from './components/leaveRequest'
import Test from "./test";
import { Navbar } from "./components/Navbar";
import Home from "./components/Home";



function App() {
    return (
     
        
      <BrowserRouter>
        <Navbar/>
        <Routes>
        
          <Route index element={<Home />} />
          <Route path="leaverequest" element={<LeaveRequestForm />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>
    );
}
    
export default App;

