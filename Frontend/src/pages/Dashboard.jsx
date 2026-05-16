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
  Command,
} from 'lucide-react';
import { ProductCard, ComingSoonCard } from '../components/ProductCard';

/* ═══════════════════════════════════════════
   Product Data 
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

/* ─── Helpers ─── */
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

function getFormattedTime() {
  return new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

function getFormattedDate() {
  return new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

/* ═══════════════════════════════════════════
   Orbit Logo
   ═══════════════════════════════════════════ */
function OrbitLogo() {
  return (
    <Link to="/dashboard" className="group flex shrink-0 items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500 shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(79,70,229,0.5)]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" />
        </svg>
      </div>
      <span className="text-2xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-indigo-600">
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
    <header className="fixed left-0 right-0 top-0 z-50 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm sm:px-6 lg:px-8">
      <OrbitLogo />

      {/* Center — Enhanced Search */}
      <div className="mx-8 hidden max-w-2xl flex-1 sm:flex">
        <div className="group relative w-full">
          <Search className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500" />
          <input
            id="dashboard-search"
            type="text"
            placeholder="Search anything in Orbit..."
            className="w-full rounded-2xl border border-slate-200/60 bg-slate-50/50 py-3 pl-12 pr-20 text-sm text-slate-800 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:shadow-[0_8px_30px_rgba(79,70,229,0.08)]"
          />
          <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1">
            <kbd className="hidden items-center gap-1 rounded border border-slate-200 bg-white px-2 py-1 text-[10px] font-bold text-slate-500 shadow-sm lg:flex">
              <Command className="h-3 w-3" /> K
            </kbd>
          </div>
        </div>
      </div>

      {/* Right — Actions */}
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/60 bg-slate-50 text-slate-500 transition-all duration-200 hover:border-indigo-200 hover:bg-white hover:text-indigo-600 hover:shadow-sm">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 animate-pulse rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        <button className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200/60 bg-slate-50 text-slate-500 transition-all duration-200 hover:border-indigo-200 hover:bg-white hover:text-indigo-600 hover:shadow-sm sm:flex">
          <CircleHelp className="h-5 w-5" />
        </button>

        <div className="mx-1 hidden h-8 w-px bg-slate-200 sm:block" />

        {/* User Avatar Dropdown Area */}
        <button className="flex items-center gap-3 rounded-full border border-slate-200/60 bg-slate-50 p-1.5 pr-4 transition-all duration-200 hover:border-indigo-200 hover:bg-white hover:shadow-sm">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-xs font-bold text-white shadow-inner">
            {userName ? userName.substring(0, 2).toUpperCase() : 'US'}
          </div>
          <span className="hidden text-sm font-semibold text-slate-700 sm:block">
            {userName || 'User'}
          </span>
          <ChevronDown className="hidden h-4 w-4 text-slate-400 sm:block" />
        </button>

        <button
          onClick={onLogout}
          title="Log out"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500 transition-all duration-200 hover:bg-red-500 hover:text-white hover:shadow-md hover:shadow-red-500/20"
        >
          <LogOut className="h-4.5 w-4.5" />
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
  const displayName = user?.name
    ? (() => {
      const parts = user.name.split(' ');
      if (parts.length > 1) return `${parts[0]} ${parts[parts.length - 1][0]}.`;
      return parts[0];
    })()
    : 'User';

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] font-sans selection:bg-indigo-100 selection:text-indigo-900">

      {/* ─── Premium Background Layers ─── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] opacity-30 [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <motion.div 
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-[10%] -top-[20%] h-[600px] w-[600px] rounded-full bg-indigo-300/20 blur-[100px]" 
        />
        <motion.div 
          animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-[100px]" 
        />
        <div className="absolute -bottom-[20%] left-1/3 h-[600px] w-[600px] rounded-full bg-purple-300/20 blur-[120px]" />
      </div>

      <Topbar userName={displayName} onLogout={handleLogout} />

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">

        {/* ═══ Compact Header (Replaces Bento Hero) ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {getGreeting()},{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {firstName}!
              </span>
            </h1>
            <p className="mt-1 text-sm font-medium text-slate-500">
              Select an application below to start working.
            </p>
          </div>

          {/* Compact Stats Pill */}
          <div className="flex items-center gap-4 rounded-xl border border-slate-200/60 bg-white/60 px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-md">
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-amber-500" />
              <span className="font-bold text-slate-900">{activeProducts.length}</span> Active
            </span>
            <span className="h-4 w-px bg-slate-200" />
            <span className="flex items-center gap-1.5 hidden sm:flex">
              <CalendarDays className="h-4 w-4 text-indigo-500" />
              {getFormattedDate()}
            </span>
            <span className="hidden h-4 w-px bg-slate-200 sm:block" />
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-blue-500" />
              {getFormattedTime()}
            </span>
          </div>
        </motion.section>

        {/* ═══ Products Section ═══ */}
        <section>
          {/* Animated Product Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Active Products */}
            {activeProducts.map((product, i) => (
              <ProductCard key={product.route} product={product} index={i} />
            ))}

            {/* Coming Soon Placeholders */}
            {Array.from({ length: comingSoonCount }).map((_, i) => (
              <ComingSoonCard key={`coming-soon-${i}`} index={activeProducts.length + i} />
            ))}
          </div>
        </section>
      </main>

      {/* ─── Premium Footer ─── */}
      <footer className="relative z-10 mt-auto border-t border-slate-200/60 bg-white/50 py-8 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
             <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-white"><circle cx="12" cy="12" r="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" /></svg>
             </div>
             <p className="text-sm font-semibold tracking-wide text-slate-600">
              &copy; {new Date().getFullYear()} Orbit Inc.
             </p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-indigo-600">
              Help Center
            </a>
            <a href="#" className="text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-indigo-600">
              Privacy Policy
            </a>
            <a href="#" className="text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-indigo-600">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}