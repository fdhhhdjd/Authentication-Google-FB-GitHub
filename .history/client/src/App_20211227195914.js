import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Navbar, Post, Login } from "./Imports/Index";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            // element={user ? <Navigate to="/" /> : <Login />}
            element={<Login />}
          />
          <Route
            path="/post/:id"
            // element={user ? <Post /> : <Navigate to="/login" />}
            element={<Post />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
