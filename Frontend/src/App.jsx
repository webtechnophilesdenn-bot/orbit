// src/App.jsx

import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import BusinessesSection from "./components/BusinessesSection";
import ProductPage from "./pages/ProductPage";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import WhoWeAre from "./components/WhoWeAre";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";

/* ─── Protected Route Wrapper ─── */
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

/* ---------------- HOME PAGE ---------------- */

function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-24">
        
        <Hero />

        <BusinessesSection />

        {/* Product Showcase Sections */}
        <ProductPage />

        {/* About */}
        <WhoWeAre />

        {/* Contact */}
        <ContactUs />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

/* ---------------- APP ROUTES ---------------- */

export default function App() {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<HomePage />} />

      {/* LOGIN */}
      <Route path="/login" element={<LoginPage />} />

      {/* SIGNUP */}
      <Route path="/signup" element={<SignupPage />} />

      {/* DASHBOARD (protected) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}