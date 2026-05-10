import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signupUser } from '../services/authService';

/* ─── Icon Helpers ─── */
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.1rem] w-[1.1rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.1rem] w-[1.1rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 012.293-3.95M6.938 6.938A9.966 9.966 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.973 9.973 0 01-4.293 5.063M6.938 6.938L3 3m3.938 3.938l3.124 3.124M17.06 17.06L21 21m-3.94-3.94l-3.122-3.122M17.06 17.06a9.966 9.966 0 01-5.06 1.94m0 0a3 3 0 01-3.938-3.938" />
  </svg>
);

const AppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

export default function SignupPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const COUNTRY_CODES = [
    { code: '+91', label: '🇮🇳 +91' },
    { code: '+1', label: '🇺🇸 +1' },
    { code: '+44', label: '🇬🇧 +44' },
    { code: '+61', label: '🇦🇺 +61' },
    { code: '+81', label: '🇯🇵 +81' },
    { code: '+49', label: '🇩🇪 +49' },
    { code: '+33', label: '🇫🇷 +33' },
    { code: '+86', label: '🇨🇳 +86' },
    { code: '+55', label: '🇧🇷 +55' },
    { code: '+7', label: '🇷🇺 +7' },
    { code: '+82', label: '🇰🇷 +82' },
    { code: '+39', label: '🇮🇹 +39' },
    { code: '+34', label: '🇪🇸 +34' },
    { code: '+971', label: '🇦🇪 +971' },
    { code: '+65', label: '🇸🇬 +65' },
    { code: '+60', label: '🇲🇾 +60' },
    { code: '+966', label: '🇸🇦 +966' },
    { code: '+27', label: '🇿🇦 +27' },
    { code: '+234', label: '🇳🇬 +234' },
    { code: '+52', label: '🇲🇽 +52' },
  ];

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setPhone(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please try again.');
      return;
    }

    setIsSubmitting(true);
    try {
      const data = await signupUser(`${firstName} ${surname}`, email, password);
      login(data.user, data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden font-sans">

      {/* ─── LEFT BRANDING PANEL ─── */}
      <div className="hidden relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500 text-white flex-col justify-between px-10 py-8 lg:flex lg:w-1/2">

        {/* Decorative Shapes */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-[64px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-400/20 blur-[40px]" />
        <div className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-sky-300/10 blur-[40px]" />

        {/* Logo Area */}
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3 no-underline text-white hover:opacity-80 transition-opacity">
            <div className="h-10 w-10 rounded-xl bg-white/20 p-1.5 backdrop-blur-sm">
              <AppIcon />
            </div>
            <span className="text-2xl font-extrabold tracking-tight">Orbit</span>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[26rem] flex flex-col gap-4">
          <h1 className="text-3xl font-extrabold leading-[1.15]">
            Get started today<br />
            <span className="text-sky-200">and grow with us.</span>
          </h1>
          <p className="text-base text-indigo-200 leading-relaxed">
            Join thousands of users already using our platform to boost
            productivity, streamline workflows, and achieve their goals.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 pt-1">
            {[
              { value: '10K+', label: 'Users' },
              { value: '50M+', label: 'Tasks Done' },
              { value: '99.9%', label: 'Uptime' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-white/10 p-3 text-center backdrop-blur-sm">
                <p className="text-xl font-bold">{s.value}</p>
                <p className="text-[0.8rem] text-indigo-200">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="relative z-10 text-[0.8rem] text-indigo-200">
          © {new Date().getFullYear()} Your App Name. All rights reserved.
        </p>
      </div>

      {/* ─── RIGHT FORM PANEL ─── */}
      <div className="flex w-full items-center justify-center bg-white p-6 lg:w-1/2">
        <div className="w-full max-w-[26rem] flex flex-col gap-4">

          {/* Mobile Logo */}
          <Link to="/" className="flex items-center justify-center gap-2 mb-1 lg:hidden no-underline hover:opacity-80 transition-opacity">
            <div className="h-9 w-9 rounded-xl bg-indigo-600 p-1.5 text-white">
              <AppIcon />
            </div>
            <span className="text-xl font-extrabold text-gray-900 tracking-tight">Orbit</span>
          </Link>

          {/* Heading */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
            <p className="mt-1 text-sm text-gray-500">Get started for free — no credit card required</p>
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">

            {/* Name Row */}
            <div className="flex gap-2">
              <div className="flex-1 min-w-0">
                <label htmlFor="signup-firstname" className="block text-[0.8rem] font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  id="signup-firstname"
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3.5 py-2 text-sm text-gray-900 transition-all duration-150 placeholder-gray-400 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/15"
                />
              </div>
              <div className="flex-1 min-w-0">
                <label htmlFor="signup-surname" className="block text-[0.8rem] font-medium text-gray-700 mb-1">
                  Surname
                </label>
                <input
                  id="signup-surname"
                  type="text"
                  required
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  placeholder="Doe"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3.5 py-2 text-sm text-gray-900 transition-all duration-150 placeholder-gray-400 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/15"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="signup-email" className="block text-[0.8rem] font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="signup-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3.5 py-2 text-sm text-gray-900 transition-all duration-150 placeholder-gray-400 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/15"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="signup-phone" className="block text-[0.8rem] font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="flex items-stretch gap-2">
                <select
                  id="signup-country-code"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-24 shrink-0 cursor-pointer appearance-none rounded-lg border border-gray-300 bg-gray-50 py-2 pl-2.5 pr-6 text-[0.8rem] text-gray-900 transition-all duration-150 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/15 bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%2212%22_height=%2212%22_viewBox=%220_0_24_24%22_fill=%22none%22_stroke=%22%239ca3af%22_stroke-width=%222.5%22_stroke-linecap=%22round%22_stroke-linejoin=%22round%22%3E%3Cpath_d=%22M6_9l6_6_6-6%22/%3E%3C/svg%3E')] bg-[length:0.7rem] bg-[position:right_0.4rem_center] bg-no-repeat"
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <input
                  id="signup-phone"
                  type="tel"
                  inputMode="numeric"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="98765 43210"
                  className="block w-full flex-1 min-w-0 rounded-lg border border-gray-300 bg-gray-50 px-3.5 py-2 text-sm text-gray-900 transition-all duration-150 placeholder-gray-400 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/15"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="signup-password" className="block text-[0.8rem] font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-3.5 pr-11 text-sm text-gray-900 transition-all duration-150 placeholder-gray-400 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/15"
                />
                <button
                  type="button"
                  id="signup-toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer border-none bg-transparent p-0 text-gray-400 transition-colors hover:text-indigo-600"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="signup-confirm-password" className="block text-[0.8rem] font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="signup-confirm-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-3.5 pr-11 text-sm text-gray-900 transition-all duration-150 placeholder-gray-400 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/15"
                />
                <button
                  type="button"
                  id="signup-toggle-confirm-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer border-none bg-transparent p-0 text-gray-400 transition-colors hover:text-indigo-600"
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <p className="mt-1 text-[11px] leading-relaxed text-gray-500">
              By creating an account you agree to our{' '}
              <button type="button" className="cursor-pointer border-none bg-transparent p-0 text-[11px] font-medium text-indigo-600 hover:underline">Terms of Service</button>{' '}
              and{' '}
              <button type="button" className="cursor-pointer border-none bg-transparent p-0 text-[11px] font-medium text-indigo-600 hover:underline">Privacy Policy</button>.
            </p>

            {/* Submit Button */}
            <button
              id="signup-submit"
              type="submit"
              disabled={isSubmitting}
              className="relative mt-2 w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_15px_-3px_rgba(79,70,229,0.3)] transition-all hover:bg-indigo-700 hover:shadow-[0_10px_15px_-3px_rgba(79,70,229,0.4)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Creating account…
                </span>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative mt-1">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-[0.8rem]">
              <span className="bg-white px-4 text-gray-400">or</span>
            </div>
          </div>

          {/* Login Link */}
          <p className="text-center text-[0.8rem] text-gray-500">
            Already have an account?{' '}
            <Link to="/login" id="signup-goto-login" className="font-semibold text-indigo-600 transition-colors hover:text-indigo-500">
              Sign In
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}