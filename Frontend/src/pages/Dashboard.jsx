import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Bell,
  CircleHelp,
  ChevronDown,
  Users,
  Building2,
  Mail,
  Headset,
  CalendarDays,
  BarChart3,
  LogOut,
  Zap,
  Clock,
  Box,
} from 'lucide-react';
import { ProductCard, ComingSoonCard } from '../components/ProductCard';

/* ═══════════════════════════════════════════
   Product Data — add new products here
   ═══════════════════════════════════════════ */
const activeProducts = [
  {
    name: 'CRM',
    description: 'Manage leads, pipeline and close deals',
    icon: Users,
    color: 'blue',
    route: '/crm',
  },
  {
    name: 'HRMS',
    description: 'Employees, payroll and attendance',
    icon: Building2,
    color: 'green',
    route: '/hrms',
  },
  {
    name: 'Mail System',
    description: 'Send and manage business emails',
    icon: Mail,
    color: 'indigo',
    route: '/mail',
  },
  {
    name: 'Helpdesk',
    description: 'Customer support and ticket management',
    icon: Headset,
    color: 'orange',
    route: '/helpdesk',
  },
  {
    name: 'Bookings',
    description: 'Schedule and manage appointments',
    icon: CalendarDays,
    color: 'purple',
    route: '/bookings',
  },
  {
    name: 'Survey',
    description: 'Create and share surveys easily',
    icon: BarChart3,
    color: 'pink',
    route: '/survey',
  },
];

const comingSoonCount = 4;

/* ─── Time-based greeting ─── */
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

/* ─── Format current time for "Last login" display ─── */
function getFormattedTime() {
  return new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

/* ═══════════════════════════════════════════
   Orbit Logo (inline SVG planet icon)
   ═══════════════════════════════════════════ */
function OrbitLogo() {
  return (
    <Link to="/dashboard" className="flex items-center gap-2.5 shrink-0 group">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500 shadow-lg shadow-indigo-200/50 transition-shadow duration-200 group-hover:shadow-indigo-300/60">
        {/* Simple planet / orbit icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <circle cx="12" cy="12" r="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" />
        </svg>
      </div>
      <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Orbit
      </span>
    </Link>
  );
}

/* ═══════════════════════════════════════════
   Topbar Component
   ═══════════════════════════════════════════ */
function Topbar({ userName, onLogout }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-gray-100 bg-white/70 px-4 backdrop-blur-md sm:px-6 lg:px-8">
      {/* Left — Logo */}
      <OrbitLogo />

      {/* Center — Search (pill shaped, soft shadow) */}
      <div className="hidden sm:flex flex-1 max-w-lg mx-6">
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            id="dashboard-search"
            type="text"
            placeholder="Search anything in Orbit..."
            className="w-full rounded-full border border-gray-200/80 bg-gray-50/60 py-2.5 pl-10 pr-5 text-sm text-gray-700 shadow-sm shadow-gray-100 placeholder:text-gray-400 transition-all duration-200 focus:border-indigo-300 focus:bg-white focus:shadow-md focus:shadow-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-100/80"
          />
        </div>
      </div>

      {/* Right — Actions */}
      <div className="flex items-center gap-1 sm:gap-2">
        {/* Notification Bell */}
        <button
          id="topbar-notifications"
          className="relative rounded-xl p-2 text-gray-500 transition-all duration-200 hover:bg-gray-100/80 hover:text-gray-700"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        {/* Help */}
        <button
          id="topbar-help"
          className="hidden sm:flex rounded-xl p-2 text-gray-500 transition-all duration-200 hover:bg-gray-100/80 hover:text-gray-700"
        >
          <CircleHelp className="h-5 w-5" />
        </button>

        {/* Divider */}
        <div className="hidden sm:block h-6 w-px bg-gray-200/60 mx-1" />

        {/* User Avatar */}
        <button
          id="topbar-user"
          className="flex items-center gap-2 rounded-xl px-2 py-1.5 transition-all duration-200 hover:bg-gray-100/80"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-xs font-bold text-white shadow-sm shadow-indigo-200">
            {userName
              ? userName
                .split(' ')
                .map((n) => n[0])
                .join('')
                .slice(0, 2)
                .toUpperCase()
              : 'U'}
          </div>
          <span className="hidden sm:block text-sm font-medium text-gray-700">
            {userName || 'User'}
          </span>
          <ChevronDown className="hidden sm:block h-4 w-4 text-gray-400" />
        </button>

        {/* Logout */}
        <button
          id="dashboard-logout"
          onClick={onLogout}
          title="Log out"
          className="rounded-xl p-2 text-gray-400 transition-all duration-200 hover:bg-red-50 hover:text-red-500"
        >
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════
   Dashboard Page
   ═══════════════════════════════════════════ */
export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const firstName = user?.name?.split(' ')[0] || 'there';

  /* Format display name: "Dhruv K." */
  const displayName = user?.name
    ? (() => {
      const parts = user.name.split(' ');
      if (parts.length > 1)
        return `${parts[0]} ${parts[parts.length - 1][0]}.`;
      return parts[0];
    })()
    : 'User';

  return (
    <div className="relative min-h-screen bg-[#F5F7FB] overflow-hidden">

      {/* ─── Decorative Background Blobs ─── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Top-right indigo glow */}
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-indigo-200/30 blur-3xl" />
        {/* Bottom-left purple glow */}
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-purple-200/25 blur-3xl" />
        {/* Center subtle blue wash */}
        <div className="absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100/20 blur-3xl" />
      </div>

      {/* ─── Topbar ─── */}
      <Topbar userName={displayName} onLogout={handleLogout} />

      {/* ─── Main Content ─── */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">

        {/* ═══ Welcome Section ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative mb-12"
        >
          {/* Decorative shapes — right side */}
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block" aria-hidden="true">
            <div className="relative h-28 w-28">
              <div className="absolute top-0 right-0 h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 rotate-12 opacity-60" />
              <div className="absolute bottom-0 left-0 h-14 w-14 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 opacity-50" />
              <div className="absolute top-4 right-16 h-8 w-8 rounded-lg bg-gradient-to-br from-purple-200 to-pink-100 -rotate-6 opacity-40" />
            </div>
          </div>

          {/* Greeting with gradient text */}
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
              {getGreeting()}, {firstName}!
            </span>
          </h1>
          <p className="mt-2 text-base text-gray-500 sm:text-lg">
            What would you like to work on today?
          </p>

          {/* Stats row */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
              <Zap className="h-3.5 w-3.5 text-indigo-500" />
              <span className="font-semibold text-gray-700">{activeProducts.length}</span> Products Active
            </span>
            <span className="text-gray-300">·</span>
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
              <Box className="h-3.5 w-3.5 text-purple-500" />
              <span className="font-semibold text-gray-700">{comingSoonCount}</span> Coming Soon
            </span>
            <span className="text-gray-300">·</span>
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
              <Clock className="h-3.5 w-3.5 text-gray-400" />
              Last login: Today {getFormattedTime()}
            </span>
          </div>
        </motion.section>

        {/* ═══ Products Section ═══ */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800 tracking-tight sm:text-xl">
              Your Products
            </h2>
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
              {activeProducts.length} active
            </span>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Active Products */}
            {activeProducts.map((product, i) => (
              <ProductCard key={product.route} product={product} index={i} />
            ))}

            {/* Coming Soon Placeholders */}
            {Array.from({ length: comingSoonCount }).map((_, i) => (
              <ComingSoonCard
                key={`coming-soon-${i}`}
                index={activeProducts.length + i}
              />
            ))}
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="relative z-10 border-t border-gray-200/60 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p className="text-xs text-gray-400 tracking-wide">
            &copy; 2026 Orbit. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-gray-400 transition-colors duration-200 hover:text-gray-600"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-gray-400 transition-colors duration-200 hover:text-gray-600"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
