import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks for async actions
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/movies/');
    return response.data;
});

export const addNewMovie = createAsyncThunk('movies/addNewMovie', async (movie) => {
    const formData = new FormData();
    formData.append('title', movie.title);
    formData.append('description', movie.description);
    formData.append('release_year', movie.release_year);
    formData.append('genre', movie.genre);
    formData.append('image', movie.image);
    formData.append('watched', movie.watched);
    formData.append('review', movie.review);
    formData.append('rating', movie.rating);

    const response = await axios.post('http://127.0.0.1:8000/api/movies/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
});

export const updateExistingMovie = createAsyncThunk('movies/updateExistingMovie', async (movie) => {
    const formData = new FormData();
    formData.append('title', movie.title);
    formData.append('description', movie.description);
    formData.append('release_year', movie.release_year);
    formData.append('genre', movie.genre);
    if (movie.image) {
        formData.append('image', movie.image);
    }
    formData.append('watched', movie.watched);
    formData.append('review', movie.review);
    formData.append('rating', movie.rating);

    const response = await axios.put(`http://127.0.0.1:8000/api/movies/${movie.id}/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
});

export const deleteExistingMovie = createAsyncThunk('movies/deleteExistingMovie', async (movieId) => {
    await axios.delete(`http://127.0.0.1:8000/api/movies/${movieId}/`);
    return movieId;
});

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addNewMovie.fulfilled, (state, action) => {
                state.movies.push(action.payload);
            })
            .addCase(updateExistingMovie.fulfilled, (state, action) => {
                const index = state.movies.findIndex(movie => movie.id === action.payload.id);
                state.movies[index] = action.payload;
            })
            .addCase(deleteExistingMovie.fulfilled, (state, action) => {
                state.movies = state.movies.filter(movie => movie.id !== action.payload);
            });
    }
});

export default movieSlice.reducer;
