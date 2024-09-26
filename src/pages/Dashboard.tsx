import { useEffect, useState } from 'react';
// import { fetchUsers } from '../services/apiService';
// import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import { fetchUsers } from '../service/apiService';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response.data); 
        console.log("users", response); // Assuming the users are returned inside `data`
      } catch (error) {
        console.error('Failed to fetch users', error);
      }
    };

    getUsers();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="flex justify-between items-center p-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <button onClick={handleLogout} className="px-4 py-2 text-white bg-blue-500 rounded">
          Logout
        </button>
      </div>

      <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">User List</h2>
        {users?.length === 0 ? (
          <p>Loading users...</p>
        ) : (
          <ul className="space-y-3">
            {users?.map((user: any,index:number) => (
              <li key={user.id} className="flex items-center space-x-4">
                <div
                  className="w-10 h-10 rounded-full"
                
                >
                    {index+1}.
                </div>
                <div>
                  <p className="font-semibold">{`${user.first_name} ${user.last_name}`}</p>
                  <p className="text-gray-500">{user.email}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
