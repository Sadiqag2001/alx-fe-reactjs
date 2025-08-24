import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav className="p-4 bg-gray-200 flex justify-between items-center gap-4 active:font-bold">
          <h1 className="text-3xl font-bold">Dynamic Routing</h1>
          <div className="flex flex-row gap-4">
          <Link className="hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/about">About</Link>
          <Link className="hover:underline" to="/profile">Profile</Link>
          <Link className="hover:underline" to="/blog/101">Blog Example</Link>
          </div>
        </nav>

        {/* Route Config */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Protected Profile Route */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Dynamic Route Example */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
