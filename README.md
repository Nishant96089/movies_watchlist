# Movie Watchlist Application

## Project Overview

The Movie Watchlist application is a web-based tool that allows users to manage a list of movies they want to watch. Users can add, edit, and delete movies from their watchlist, mark movies as watched or unwatched, and rate and review movies. State management is handled using Redux to ensure efficient and predictable state updates.

## Key Features

1. **Add Movies**
   - Users can add movies to their watchlist by providing details such as the movie title, description, release year, genre, and an image.
   - Each movie has a unique identifier.
2. **Edit Movies**
   - Users can edit the details of movies already in their watchlist.
3. **Delete Movies**
   - Users can delete movies from their watchlist.
4. **Mark Movies as Watched/Unwatched**
   - Users can toggle the status of a movie between watched and unwatched.
5. **Rate and Review Movies**
   - Users can rate movies on a scale of 1 to 5 stars.
   - Users can provide a text review for each movie.
6. **State Management with Redux**
   - All state changes (adding, editing, deleting movies, marking as watched/unwatched, rating, and reviewing) are managed using Redux.

## Technology Stack

- **Frontend:**
  - React.js for building the user interface.
  - Redux for state management.
  - CSS/SCSS for styling.
- **Backend:**
  - Django for building the backend API.
  - Django REST Framework for creating the API endpoints.
- **Database:**
  - SQLite (default for Django projects).

## Installation

### Prerequisites

- Node.js and npm
- Python and pip
- Virtualenv (optional but recommended)

### Backend Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/Nishant96089/movies_watchlist.git
   cd movies-watchlist
   ```

2. Create a virtual environment and activate it:

   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Navigate to the backend directory:

   ```sh
   cd watchlist_backend
   ```

4. Install the backend dependencies:

   ```sh
   pip install -r requirements.txt
   ```

5. Apply the migrations:

   ```sh
   python manage.py migrate
   ```

6. Create a superuser to access the Django admin:

   ```sh
   python manage.py createsuperuser
   ```

7. Start the Django development server:
   ```sh
   python manage.py runserver
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```sh
   cd watchlist_frontend
   ```

2. Install the frontend dependencies:

   ```sh
   npm install
   ```

3. Start the React development server:
   ```sh
   npm run dev
   ```

## Usage

### Adding a Movie

1. Click on the "Add Movie" button.
2. Fill in the movie details, including title, description, release year, genre, and an image.
3. Click "Save" to add the movie to your watchlist.

### Editing a Movie

1. Click on the "Edit" button next to the movie you want to edit.
2. Update the movie details as needed.
3. Click "Save" to apply the changes.

### Deleting a Movie

1. Click on the "Delete" button next to the movie you want to remove.
2. Confirm the deletion.

### Marking a Movie as Watched/Unwatched

1. Click on the "Watched" or "Unwatched" button next to the movie to toggle its status.

### Rating and Reviewing a Movie

1. Click on the movie you want to rate and review.
2. Use the star rating component to rate the movie.
3. Write a review in the provided textarea.
4. Click "Save" to submit your rating and review.

## Folder Structure

movies_watchlist/
│
├── watchlist_backend/
│ ├── manage.py
│ ├── requirements.txt
│ ├── watchlist/
│ ├── init.py
│ ├── admin.py
│ ├── apps.py
│ ├── models.py
│ ├── serializers.py
│ ├── urls.py
│ ├── views.py
│
├── watchlist_frontend/
│ ├── public/
│ ├── src/
│ ├── features/
│ ├── movies/
│ ├── AddMovie.jsx
│ ├── EditMovie.jsx
│ ├── movieSlice.js
│ ├── MovieDetails.jsx
│ ├── App.jsx
│ ├── index.jsx
│ ├── package.json
│ ├── vite.config.js
│
├── README.md

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
