import { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const App = lazy(() => import('./App'))

const container = document.getElementById('root')
if (!container) throw new Error('root element not found!')

createRoot(container).render(
  <Suspense fallback='loading...'>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
)

