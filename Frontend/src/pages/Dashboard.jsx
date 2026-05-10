import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

/* ─── Icon Helper ─── */
const AppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 font-sans">
      <div className="w-full max-w-lg rounded-2xl bg-white p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-200/60">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500 p-2 text-white">
            <AppIcon />
          </div>
          <span className="text-2xl font-extrabold text-gray-900 tracking-tight">Orbit</span>
        </div>

        {/* Welcome */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome, <span className="text-indigo-600">{user?.name}</span>!
        </h1>
        <p className="text-gray-500 mb-1">You are logged in as <span className="font-medium text-gray-700">{user?.email}</span></p>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200" />

        {/* Logout */}
        <button
          id="dashboard-logout"
          onClick={handleLogout}
          className="w-full rounded-lg bg-gradient-to-r from-red-500 to-rose-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_15px_-3px_rgba(239,68,68,0.3)] transition-all hover:from-red-600 hover:to-rose-700 hover:shadow-[0_10px_15px_-3px_rgba(239,68,68,0.4)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 cursor-pointer"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
