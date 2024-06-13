import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@alanpinhon/deep-feels-ui'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
