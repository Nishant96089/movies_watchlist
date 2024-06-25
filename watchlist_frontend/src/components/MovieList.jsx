import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../features/movies/movieSlice';
import { Link } from 'react-router-dom';

function MovieList() {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <div>
            <h1>Movie Watchlist</h1>
            <Link to="/add">Add Movie</Link>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <h2>{movie.title}</h2>
                        {movie.image && <img src={movie.image} alt={movie.title} width="100" />}
                        <p>{movie.description}</p>
                        <Link to={`/edit/${movie.id}`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieList;
