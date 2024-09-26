import { useState } from 'react';
// import { login } from '../services/apiService';
import useAuthStore from '../store/authStore';
import { login } from '../service/apiService';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login: setLogin } = useAuthStore();
const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log("data", data);
      
      if (data.token) {
        // Store the token in localStorage or a state management solution
        localStorage.setItem('token', data.token);

        
        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        // Handle login error
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    //   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    //   <button type="submit">Sign In</button>
    // </form>

<div className="flex items-center justify-center min-h-screen bg-gray-100">
<div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-center">Login</h2>
  {error && <p className="text-red-500 text-center">{error}</p>}
  <form onSubmit={handleSubmit}>
    <Input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
    />
    <Input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
    />
    <Button type="submit">Login</Button>
    <span>Don't have an account? <Link to="/register" className="text-blue-500">Sign Up</Link></span>
  </form>
</div>
</div>
  );
};

export default SignIn;
