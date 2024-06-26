import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/add" element={<AddMovie />} />
                <Route path="/edit/:id" element={<EditMovie />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
