import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import Dashboard from './pages/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
