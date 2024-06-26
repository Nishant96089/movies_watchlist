import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewMovie } from "../features/movies/movieSlice";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AddMovie.module.css";

function AddMovie() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [watched, setWatched] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      description,
      release_year: parseInt(releaseYear, 10),
      genre,
      image,
      watched,
      review,
      rating: parseInt(rating, 10),
    };
    dispatch(addNewMovie(newMovie));
    navigate('/'); // Navigate to '/' after adding movie
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
    <>
    <center>
    <h1 className={styles.heading}>
        <Link to={"/"} className={styles.heading}>Movie Watchlist</Link>
      </h1>
    </center>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Release Year:</label>
          <input
            type="number"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} />
          {imagePreview && <img src={imagePreview} alt="Preview" width="100" />}
        </div>
        <div>
          <label>Watched:</label>
          <input
            type="checkbox"
            checked={watched}
            onChange={(e) => setWatched(e.target.checked)}
          />
        </div>
        <div>
          <label>Review:</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="0"
            max="5"
            required
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </>
  );
}

export default AddMovie;
