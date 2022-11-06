import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/system';
import { theme } from './theme/themePrincipal';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./app/store/store"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>  
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/*" element={<App/>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>

  </React.StrictMode>
);

reportWebVitals();
