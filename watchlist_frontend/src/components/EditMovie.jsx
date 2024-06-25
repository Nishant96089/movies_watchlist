import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateExistingMovie } from '../features/movies/movieSlice';

function EditMovie() {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = useSelector(state => state.movies.movies.find(m => m.id === parseInt(id)));
    const [title, setTitle] = useState(movie.title);
    const [description, setDescription] = useState(movie.description);
    const [releaseYear, setReleaseYear] = useState(movie.release_year);
    const [genre, setGenre] = useState(movie.genre);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(movie.image ? `http://127.0.0.1:8000${movie.image}` : null);
    const [watched, setWatched] = useState(movie.watched);
    const [review, setReview] = useState(movie.review);
    const [rating, setRating] = useState(movie.rating);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedMovie = {
            ...movie,
            title,
            description,
            release_year: parseInt(releaseYear, 10),
            genre,
            image,
            watched,
            review,
            rating: parseInt(rating, 10),
        };
        dispatch(updateExistingMovie(updatedMovie));
        navigate('/');
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);

        // Display the image preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Release Year:</label>
                <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} required />
            </div>
            <div>
                <label>Genre:</label>
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div>
                <label>Image:</label>
                <input type="file" onChange={handleImageChange} />
                {imagePreview && <img src={imagePreview} alt="Preview" width="100" />}
            </div>
            <div>
                <label>Watched:</label>
                <input type="checkbox" checked={watched} onChange={(e) => setWatched(e.target.checked)} />
            </div>
            <div>
                <label>Review:</label>
                <textarea value={review} onChange={(e) => setReview(e.target.value)} />
            </div>
            <div>
                <label>Rating:</label>
                <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} min="0" max="5" required />
            </div>
            <button type="submit">Update Movie</button>
        </form>
    );
}

export default EditMovie;
