import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Header from './components/Header'
import Footer from './components/Footer'
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);

root.render(
    <Router>
        <Header/>
        <div className='content'>
            <App/>
            <Footer/>
        </div>
    </Router>
)
