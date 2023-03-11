import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/User/Home";
import Login from "./Components/Log In/Login";
import Universal from "./Components/Universal Log In/Universal";
import UserDashboard from "./Components/UserDashboard/UserDashboard";
import Albums from "./Components/Albums/Albums";
import Protected from "./Components/Protected Route/Protected";
import Dashboard from "./Components/Dashboard";



JSON.parse(localStorage.getItem("uniId"));
JSON.parse(localStorage.getItem("userLogedIn"));


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />


          <Route path="/login" element={<Login />} />

          <Route element={<Protected/>}>

          <Route exact path="/userdashboard/:id" element={<UserDashboard />}  />


          <Route exact path="/albums/photos/:id" element={<Albums />} />
          
          <Route exact path="/dashboard/:id" element={<Dashboard />}  />
          </Route>

          <Route
            path="/universal/:id/:username/:email"
            element={<Universal />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
