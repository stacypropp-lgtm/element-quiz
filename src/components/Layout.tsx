import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const navItems = [
  { to: '/', icon: '🌿', label: 'Elements' },
  { to: '/tongue', icon: '👅', label: 'Tongue' },
  { to: '/clock', icon: '🕐', label: 'Clock' },
  { to: '/cravings', icon: '🍫', label: 'Cravings' },
  { to: '/emotions', icon: '😢', label: 'Emotions' },
]

export default function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <main className="flex-1 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Disclaimer */}
      <div className="px-4 pb-24 text-center">
        <p className="text-xs text-forest/50 max-w-lg mx-auto leading-relaxed">
          This app is for educational and entertainment purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider. Created by Dr. Stacy Propp, DACM, L.Ac.
        </p>
      </div>

      {/* Bottom Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-forest/10 z-50 safe-area-bottom">
        <div className="max-w-lg mx-auto flex justify-around items-center h-16 px-2">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'text-forest scale-105'
                    : 'text-forest/40 hover:text-forest/60'
                }`
              }
            >
              <span className="text-xl leading-none">{item.icon}</span>
              <span className="text-[10px] font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
