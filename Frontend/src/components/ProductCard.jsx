import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Clock } from 'lucide-react';

/* ─── Color Map ─── */
const colorMap = {
  blue: {
    bg: 'bg-blue-50/80',
    icon: 'bg-gradient-to-br from-blue-500 to-blue-600',
    text: 'text-blue-600',
    border: 'group-hover:border-t-blue-500',
    shadow: 'hover:shadow-blue-100/60',
    iconBg: 'bg-blue-50',
  },
  green: {
    bg: 'bg-emerald-50/80',
    icon: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    text: 'text-emerald-600',
    border: 'group-hover:border-t-emerald-500',
    shadow: 'hover:shadow-emerald-100/60',
    iconBg: 'bg-emerald-50',
  },
  indigo: {
    bg: 'bg-indigo-50/80',
    icon: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
    text: 'text-indigo-600',
    border: 'group-hover:border-t-indigo-500',
    shadow: 'hover:shadow-indigo-100/60',
    iconBg: 'bg-indigo-50',
  },
  orange: {
    bg: 'bg-orange-50/80',
    icon: 'bg-gradient-to-br from-orange-400 to-orange-500',
    text: 'text-orange-500',
    border: 'group-hover:border-t-orange-400',
    shadow: 'hover:shadow-orange-100/60',
    iconBg: 'bg-orange-50',
  },
  purple: {
    bg: 'bg-purple-50/80',
    icon: 'bg-gradient-to-br from-purple-500 to-purple-600',
    text: 'text-purple-600',
    border: 'group-hover:border-t-purple-500',
    shadow: 'hover:shadow-purple-100/60',
    iconBg: 'bg-purple-50',
  },
  pink: {
    bg: 'bg-pink-50/80',
    icon: 'bg-gradient-to-br from-pink-500 to-pink-600',
    text: 'text-pink-600',
    border: 'group-hover:border-t-pink-500',
    shadow: 'hover:shadow-pink-100/60',
    iconBg: 'bg-pink-50',
  },
};

/* ─── Card Variants ─── */
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/* ═══════════════════════════════════════
   Active Product Card
   ═══════════════════════════════════════ */
export function ProductCard({ product, index }) {
  const { name, description, icon: Icon, color, route } = product;
  const c = colorMap[color] || colorMap.blue;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <Link
        to={route}
        id={`product-card-${route.replace('/', '')}`}
        className={`group relative flex flex-col gap-4 rounded-2xl border border-gray-100 border-t-2 border-t-transparent bg-white p-6 shadow-md transition-all duration-200 hover:shadow-xl ${c.shadow} hover:-translate-y-1.5 ${c.border}`}
      >
        {/* Icon in tinted rounded square */}
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.iconBg} transition-colors duration-200`}>
          <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${c.icon} text-white shadow-sm`}>
            <Icon className="h-5 w-5" strokeWidth={1.8} />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 min-h-[3.5rem]">
          <h3 className="text-[15px] font-bold text-gray-900 tracking-tight">{name}</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-gray-400">{description}</p>
        </div>

        {/* Open Arrow — always slightly visible, full on hover */}
        <div className={`flex items-center gap-1.5 text-[13px] font-semibold ${c.text} opacity-40 transition-all duration-200 group-hover:opacity-100`}>
          Open
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}

/* ═══════════════════════════════════════
   Coming Soon Card
   ═══════════════════════════════════════ */
export function ComingSoonCard({ index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="group relative flex flex-col gap-4 rounded-2xl border border-dashed border-gray-200/80 bg-gray-50/40 p-6 grayscale-[40%] opacity-50 select-none transition-all duration-200 hover:opacity-60"
    >
      {/* Icon Placeholder */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200/80 text-gray-400">
          <Clock className="h-5 w-5" strokeWidth={1.8} />
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 min-h-[3.5rem]">
        <h3 className="text-[15px] font-bold text-gray-400 tracking-tight">Coming Soon</h3>
        <p className="mt-1 text-[13px] text-gray-400">New product launching soon</p>
      </div>

      {/* Badge — pill style top right */}
      <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-gray-200/80 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-gray-500 uppercase">
        <Lock className="h-2.5 w-2.5" />
        Soon
      </span>
    </motion.div>
  );
}
