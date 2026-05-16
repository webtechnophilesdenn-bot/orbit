import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Rocket } from 'lucide-react';

/* Map route segments to display names */
const productNames = {
  crm: 'CRM',
  hrms: 'HRMS',
  mail: 'Mail System',
  helpdesk: 'Helpdesk',
  bookings: 'Bookings',
  survey: 'Survey',
};

export default function ProductPlaceholder() {
  const { product } = useParams();
  const displayName = productNames[product] || product;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="mx-4 w-full max-w-md text-center"
      >
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-lg shadow-indigo-200">
          <Rocket className="h-10 w-10" strokeWidth={1.5} />
        </div>

        <h1 className="text-3xl font-bold text-slate-800">
          Welcome to <span className="text-indigo-600">{displayName}</span>
        </h1>

        <p className="mt-3 text-slate-500">
          This product is under development and will be available soon.
          <br />
          Stay tuned for updates!
        </p>

        <Link
          to="/dashboard"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition-all hover:shadow-lg hover:shadow-indigo-300 hover:-translate-y-0.5"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
      </motion.div>
    </div>
  );
}
