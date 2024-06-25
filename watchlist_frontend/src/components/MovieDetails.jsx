import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteExistingMovie } from '../features/movies/movieSlice';

function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = useSelector(state => state.movies.movies.find(m => m.id === parseInt(id)));
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteExistingMovie(movie.id));
        navigate('/');
    };

    return (
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>Release Year: {movie.release_year}</p>
            <p>Genre: {movie.genre}</p>
            <p>Watched: {movie.watched ? 'Yes' : 'No'}</p>
            <p>Rating: {movie.rating}</p>
            <p>Review: {movie.review}</p>
            <button onClick={() => navigate(`/edit/${movie.id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default MovieDetails;
