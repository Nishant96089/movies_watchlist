import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import MovieList from './components/MovieList';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/add" element={<AddMovie />} />
                <Route path="/edit/:id" element={<EditMovie />} />
            </Routes>
        </Router>
    );
}

export default App;
