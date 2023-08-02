import "./App.css";
import UserDetails from "./Components/UserDetails/userDetails";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route element={<ProtectedRoute />}>
          <Route path="/userDetails" element={<UserDetails />} ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
