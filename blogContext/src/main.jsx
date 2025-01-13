import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppContextProvider from './Context/AppContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
<AppContextProvider>
    <App/>
</AppContextProvider>

)
