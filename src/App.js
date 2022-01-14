import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './pages/index'


function App() {
    return (
        <Router>
            <Pages />
        </Router>
    );
}

export default App;
