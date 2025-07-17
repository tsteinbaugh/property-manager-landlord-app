import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import PropertyDetail from './pages/PropertyDetail';

function App() {
  const [role, setRole] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn setRole={setRole} />} />
        <Route path="/dashboard" element={role ? <Dashboard role={role} setRole={setRole} /> : <Navigate to="/" />} />
        <Route path="/property/:id" element={role ? <PropertyDetail role={role} setRole={setRole} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
