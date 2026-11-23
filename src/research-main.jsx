import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ResearchPage from './components/ResearchPage'
import { useTheme } from './hooks/useTheme'
import './index.css'

function ResearchApp() {
  const { theme, toggleTheme } = useTheme()
  return <ResearchPage theme={theme} onToggleTheme={toggleTheme} />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResearchApp />
  </StrictMode>,
)
