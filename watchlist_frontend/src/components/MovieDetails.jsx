import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './MovieDetails.module.css'; // Import the CSS module

function MovieDetails() {
    const { id } = useParams();
    const movie = useSelector(state => state.movies.movies.find(m => m.id === parseInt(id)));

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div className={styles.container}> {/* Apply container style */}
            <h1 className={styles.movieTitle}><Link to={'/'} className={styles.heading}>Movie Watchlist</Link></h1>
            <div>
                <h2 className={styles.movieTitle}>{movie.title}</h2>
                {movie.image && <img className={styles.movieImage} src={movie.image} alt={movie.title} width="300" />} {/* Apply image style */}
                <p className={styles.movieDetails}><strong>Description:</strong> {movie.description}</p>
                <p className={styles.movieDetails}><strong>Release Year:</strong> {movie.release_year}</p>
                <p className={styles.movieDetails}><strong>Genre:</strong> {movie.genre}</p>
                <p className={styles.movieDetails}><strong>Watched:</strong> {movie.watched ? 'Yes' : 'No'}</p>
                <p className={styles.movieDetails}><strong>Review:</strong> {movie.review}</p>
                <p className={styles.movieDetails}><strong>Rating:</strong> {movie.rating}/5</p>
            </div>
        </div>
    );
}

export default MovieDetails;
