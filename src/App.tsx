import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

const Landing = lazy(() => import('./pages/Landing'))
const Quiz = lazy(() => import('./pages/Quiz'))
const TongueReader = lazy(() => import('./pages/TongueReader'))
const BodyClock = lazy(() => import('./pages/BodyClock'))
const CravingTranslator = lazy(() => import('./pages/CravingTranslator'))
const EmotionOrgan = lazy(() => import('./pages/EmotionOrgan'))

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-8 h-8 border-2 border-forest/20 border-t-forest rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="tongue" element={<TongueReader />} />
          <Route path="clock" element={<BodyClock />} />
          <Route path="cravings" element={<CravingTranslator />} />
          <Route path="emotions" element={<EmotionOrgan />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
