import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './App.jsx'
import './Home.jsx'
import './login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)