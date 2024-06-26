import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../features/movies/movieSlice';
import { Link } from 'react-router-dom';
import styles from './MovieList.module.css';

function MovieList() {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies);
    const status = useSelector(state => state.movies.status);
    const error = useSelector(state => state.movies.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchMovies());
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Movie Watchlist</h1>
            <Link to="/add" className={styles.add}>Add Movie</Link>
            <div className={styles.movieContainer}>
                {movies.length === 0 ? (
                    <p>No movies found. Add a new movie to get started!</p>
                ) : (
                    <ul className={styles.movieList}>
                        {movies.map(movie => (
                            <li key={movie.id}>
                                {movie.image && <img src={movie.image} alt={movie.title} width="150" height="180" />}
                                <h2 className={styles.movieName}>{movie.title}</h2>
                                <p>{movie.description}</p>
                                <div className={styles.editDetails}>
                                    <Link to={`/edit/${movie.id}`}>Edit</Link>
                                    <Link to={`/movie/${movie.id}`}>Details</Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default MovieList;
