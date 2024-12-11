import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import "./index.scss";
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </StrictMode>,
)
