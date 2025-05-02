import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Lazy load pages
const Signup = lazy(() => import("./pages/Signup"));
const Signin = lazy(() => import("./pages/Signin"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Tables = lazy(() => import("./pages/Tables"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
         
          <Route path="*" element={<div className="text-center mt-20">404 - Page Not Found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
