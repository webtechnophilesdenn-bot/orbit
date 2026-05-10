import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../services/authService';

/* ─── Icon Helpers ─── */
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 012.293-3.95M6.938 6.938A9.966 9.966 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.973 9.973 0 01-4.293 5.063M6.938 6.938L3 3m3.938 3.938l3.124 3.124M17.06 17.06L21 21m-3.94-3.94l-3.122-3.122M17.06 17.06a9.966 9.966 0 01-5.06 1.94m0 0a3 3 0 01-3.938-3.938" />
  </svg>
);

const AppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    try {
      const data = await loginUser(email, password);
      login(data.user, data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden font-sans">

      {/* ─── LEFT BRANDING PANEL ─── */}
      <div className="hidden relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500 text-white flex-col justify-between p-12 lg:flex lg:w-1/2">

        {/* Decorative Shapes */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-[64px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-400/20 blur-[40px]" />
        <div className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-sky-300/10 blur-[40px]" />

        {/* Logo Area */}
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3 no-underline text-white hover:opacity-80 transition-opacity">
            <div className="h-12 w-12 rounded-xl bg-white/20 p-2 backdrop-blur-sm">
              <AppIcon />
            </div>
            <span className="text-3xl font-extrabold tracking-tight">Orbit</span>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-md flex flex-col gap-6">
          <h1 className="text-4xl font-extrabold leading-[1.15]">
            Streamline your workflow<br />
            <span className="text-sky-200">all in one place.</span>
          </h1>
          <p className="text-lg text-indigo-200 leading-relaxed">
            The all-in-one platform that helps you manage projects,
            collaborate with your team, and deliver results faster.
          </p>

          {/* Feature Chips */}
          <div className="flex flex-wrap gap-3 pt-2">
            {['Dashboard', 'Analytics', 'Integrations', 'Automation'].map((f) => (
              <span key={f} className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="relative z-10 text-sm text-indigo-200">
          © {new Date().getFullYear()} Your App Name. All rights reserved.
        </p>
      </div>

      {/* ─── RIGHT FORM PANEL ─── */}
      <div className="flex w-full items-center justify-center bg-white p-8 lg:p-12 lg:w-1/2">
        <div className="w-full max-w-md flex flex-col gap-8">

          {/* Mobile Logo */}
          <Link to="/" className="flex items-center justify-center gap-2 mb-4 lg:hidden no-underline hover:opacity-80 transition-opacity">
            <div className="h-10 w-10 rounded-xl bg-indigo-600 p-2 text-white">
              <AppIcon />
            </div>
            <span className="text-2xl font-extrabold text-gray-900 tracking-tight">Orbit</span>
          </Link>

          {/* Heading */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-gray-500">Sign in to your account to continue</p>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[0.8rem] text-red-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Email */}
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                id="login-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-900 transition-all duration-150 placeholder-gray-400 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-4 pr-12 text-base text-gray-900 transition-all duration-150 placeholder-gray-400 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                />
                <button
                  type="button"
                  id="login-toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors bg-transparent border-none p-1 cursor-pointer"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  id="login-remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 transition-all cursor-pointer"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors bg-transparent border-none cursor-pointer p-0">
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              id="login-submit"
              type="submit"
              disabled={isSubmitting}
              className="relative w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_15px_-3px_rgba(79,70,229,0.3)] transition-all hover:bg-indigo-700 hover:shadow-[0_10px_15px_-3px_rgba(79,70,229,0.4)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Signing in…
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative mt-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-gray-400">or</span>
            </div>
          </div>

          {/* Sign-up Link */}
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/signup" id="login-goto-signup" className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors text-decoration-none">
              Sign Up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}