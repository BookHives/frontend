# BookHive - Digital Library Management System

## ---

## Overview

BookHive is a comprehensive digital library management system designed to provide users with an intuitive platform for discovering, reviewing, and managing books. The application serves both regular users and librarians, offering features for book browsing, personal reading lists, reviews, and administrative book management.

**Live Application:** [https://bookhive-frontend-1d36e543d26f.herokuapp.com/](https://bookhive-frontend-1d36e543d26f.herokuapp.com/)

The platform integrates with Google OAuth for secure authentication and provides a clean, modern interface for:

* Browsing and searching the book collection
* Managing personal reading lists with different reading statuses
* Writing and reading book reviews and ratings
* Administrative tools for librarians to add new books
* Responsive design for desktop and mobile access

This project serves as a complete library management solution, enabling efficient book discovery and community engagement through reviews and ratings.

## ---

## Technology Stack

### Core Technologies

* [React](https://reactjs.org/) - JavaScript library for building user interfaces
  * [Documentation](https://reactjs.org/docs/getting-started.html)
  * [Tutorial](https://reactjs.org/tutorial/tutorial.html)
  * [GitHub Repository](https://github.com/facebook/react)
* [React Router](https://reactrouter.com/) - Declarative routing for React applications
  * [Documentation](https://reactrouter.com/docs/en/v6)
  * [GitHub Repository](https://github.com/remix-run/react-router)
* [Google OAuth](https://developers.google.com/identity/protocols/oauth2) - Secure authentication system
  * [React OAuth Google](https://www.npmjs.com/package/@react-oauth/google)
  * [Documentation](https://developers.google.com/identity/oauth2/web/guides/overview)
* [Express.js](https://expressjs.com/) - Web server framework for serving the production build
  * [Documentation](https://expressjs.com/en/starter/installing.html)
  * [GitHub Repository](https://github.com/expressjs/express)
* [React Icons](https://react-icons.github.io/react-icons/) - Icon library for consistent UI elements
  * [Documentation](https://react-icons.github.io/react-icons/)
  * [GitHub Repository](https://github.com/react-icons/react-icons)

### Package Management

* [npm](https://www.npmjs.com/) - Node.js package manager
  * [Documentation](https://docs.npmjs.com/)
  * [CLI Documentation](https://docs.npmjs.com/cli/v8)

## ---

## Workflow & Setup Guide

### Installation and Setup

#### Prerequisites

* Node.js (v18 or higher)
* npm package manager
* Google Cloud Platform account for OAuth setup

#### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd bookhive
```

#### Step 2: Install Dependencies

```bash
npm install
```

#### Step 3: Set Up Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing project
3. Enable Google+ API or Google Identity services
4. Create OAuth 2.0 credentials:
   * Go to APIs & Services > Credentials
   * Click Create Credentials > OAuth client ID
   * Select Web application
   * Add authorized JavaScript origins:
     * http://localhost:3000 (for development)
     * https://bookhive-frontend-1d36e543d26f.herokuapp.com (for production)
   * Add authorized redirect URIs if needed
   * Note your Client ID

#### Step 4: Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
REACT_APP_API_BASE_URL=https://bookhive-90e4e8826675.herokuapp.com
```

**Note:** If you skip Google OAuth setup, you can still use manual login functionality.

#### Step 5: Start the Development Server

```bash
# For development with hot reloading
npm run dev

# For production testing (requires build first)
npm run build
npm start
```

#### Step 6: Open the Application

Navigate to [http://localhost:3000](http://localhost:3000) in your browser for local development, or visit the live application at [https://bookhive-frontend-1d36e543d26f.herokuapp.com/](https://bookhive-frontend-1d36e543d26f.herokuapp.com/)

## Project Structure

```
bookhive/
├── public/                    # Static files and HTML template
│   ├── index.html                # Main HTML template
│   ├── manifest.json             # PWA manifest configuration
│   └── robots.txt                # Search engine crawler instructions
├── src/                      # Main application source code
│   ├── Components/           # React components organized by feature
│   │   ├── BookDetail/           # Individual book page components
│   │   │   ├── BookDetail.jsx        # Main book detail view with reviews
│   │   │   └── BookDetail.module.css # Styling for book detail page
│   │   ├── Favorites/            # User's reading list management
│   │   │   ├── Favorites.jsx         # Favorites page with status filtering
│   │   │   └── Favorites.module.css  # Styling for favorites interface
│   │   ├── HomePage/             # Landing page after login
│   │   │   ├── Home.jsx              # Home page with featured books
│   │   │   └── Home.module.css       # Styling for home page
│   │   ├── Library/              # Main book browsing interface
│   │   │   ├── Library.jsx           # Library page with search and filters
│   │   │   └── Library.module.css    # Styling for library grid
│   │   ├── Librarian/            # Administrative interface
│   │   │   ├── Librarian.jsx         # Admin dashboard for adding books
│   │   │   └── Librarian.module.css  # Styling for admin interface
│   │   ├── LoginForm/            # Authentication components
│   │   │   ├── LoginForm.jsx         # Google OAuth login interface
│   │   │   └── Login.module.css      # Styling for login page
│   │   ├── SignupForm/           # Legacy signup components (unused)
│   │   │   ├── SignupForm.jsx        # Traditional signup form
│   │   │   └── Signup.module.css     # Styling for signup form
│   │   ├── Layout.jsx            # Main layout wrapper with navigation
│   │   ├── Layout.module.css     # Global layout styling
│   │   ├── Navigation.jsx        # Top navigation bar component
│   │   └── Navigation.module.css # Navigation styling
│   ├── App.js                # Main application component with routing
│   ├── App.css               # Global application styles
│   ├── index.js              # React application entry point
│   ├── index.css             # Global CSS with font imports
│   └── reportWebVitals.js    # Performance monitoring setup
├── server.js                 # Express server for production deployment
├── package.json              # Dependencies and build scripts
├── .gitignore                # Git ignore patterns
└── README.md                 # Project documentation
```

### Key Directories and Files

#### Core Components

* **BookDetail/**: Individual book page with reviews and rating system
  * BookDetail.jsx handles book data fetching, review submission, and photo management
  * Displays book information, user reviews, and administrative controls
* **Library/**: Main book browsing interface with search and filtering
  * Library.jsx manages book collection display and genre-based filtering
  * Provides grid layout for book cards with metadata
* **Favorites/**: User's personal reading list management
  * Favorites.jsx handles reading status tracking and list organization
  * Supports filtering by reading status (Want to Read, Currently Reading, Already Read)

#### Authentication and Navigation

* **LoginForm/**: Google OAuth authentication interface
  * LoginForm.jsx integrates with Google OAuth for secure user authentication
  * Handles user session management and redirection
* **Navigation.jsx**: Top navigation bar with user menu and route links
* **Layout.jsx**: Main layout wrapper that provides consistent page structure

#### Administrative Features

* **Librarian/**: Administrative interface for book management
  * Librarian.jsx provides forms for adding new books to the collection
  * Includes image upload, metadata entry, and validation

#### Routing and State

* **App.js**: Central routing configuration with protected routes
* **server.js**: Express server configuration for production deployment

## ---

## Critical Functions

Here are the key functions that are crucial to the application's operation:

### Authentication Management

**LoginForm.jsx** - Handles Google OAuth authentication flow

```javascript
// Processes Google OAuth response and creates user session
const handleGoogleLoginSuccess = async (credentialResponse) => {
  try {
    const decoded = jwtDecode(credentialResponse.credential);
    
    const userData = {
      username: decoded.email.split('@')[0],
      email: decoded.email,
      password: `google_${Date.now()}`,
      is_librarian: 0,
      profile_image: decoded.picture || null,
    };

    const response = await fetch('https://bookhive-90e4e8826675.herokuapp.com/api/users/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    localStorage.setItem('user', JSON.stringify({
      user_id: data.user.user_id,
      username: data.user.username,
      is_librarian: data.user.is_librarian,
      email: data.user.email
    }));

    navigate('/home');
  } catch (error) {
    setError('An error occurred during login. Please try again.');
  }
}
```

### Book Data Management

**Library.jsx** - Main book collection management

```javascript
// Fetches all books from the API
const fetchAllBooks = async () => {
  const response = await fetch('https://bookhive-90e4e8826675.herokuapp.com/api/books/');
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  const data = await response.json();
  setBooks(data);
}

// Filters books by genre
const handleGenreSelect = async (genre) => {
  const response = await fetch(`https://bookhive-90e4e8826675.herokuapp.com/api/books/search/?q=${genre}`);
  if (response.ok) {
    const data = await response.json();
    setBooks(data);
  }
}
```

### Book Details and Reviews

**BookDetail.jsx** - Individual book page functionality

```javascript
// Fetches complete book data including reviews
const fetchBookData = async () => {
  try {
    const response = await fetch(`https://bookhive-90e4e8826675.herokuapp.com/api/books/${bookId}/`);
    if (response.ok) {
      const data = await response.json();
      setBookData(data);
    }
  } catch (error) {
    console.error('Error fetching book data:', error);
  }
};

// Submits new review with rating
const handleReviewSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('https://bookhive-90e4e8826675.herokuapp.com/api/reviews/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: user.user_id,
        book_id: bookId,
        rating: newReview.rating,
        review_text: newReview.review_text
      }),
    });

    if (response.ok) {
      const updatedData = await fetch(`https://bookhive-90e4e8826675.herokuapp.com/api/books/${bookId}/`);
      const newData = await updatedData.json();
      setBookData(newData);
      setNewReview({ rating: 5, review_text: '' });
    }
  } catch (error) {
    console.error('Error submitting review:', error);
  }
};

// Deletes a review (librarian only)
const handleDeleteReview = async (reviewId) => {
  try {
    const response = await fetch(`https://bookhive-90e4e8826675.herokuapp.com/api/reviews/${reviewId}/delete/`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: user.user_id })
    });

    if (response.ok) {
      const updatedData = await fetch(`https://bookhive-90e4e8826675.herokuapp.com/api/books/${bookId}/`);
      const newData = await updatedData.json();
      setBookData(newData);
    }
  } catch (error) {
    console.error('Error deleting review:', error);
  }
};

// Adds book to user's favorites
const addToFavorites = async () => {
  try {
    const response = await fetch('https://bookhive-90e4e8826675.herokuapp.com/api/favorites/add/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: user.user_id,
        book_id: bookId,
        reading_status: 'WANT_TO_READ'
      }),
    });

    if (response.ok) {
      alert('Added to favorites!');
    }
  } catch (error) {
    console.error('Error adding to favorites:', error);
  }
};
```

### Favorites Management

**Favorites.jsx** - Reading list and status management

```javascript
// Fetches user's favorite books with optional status filtering
const fetchFavorites = async () => {
  try {
    setLoading(true);
    let url = `https://bookhive-90e4e8826675.herokuapp.com/api/users/${user.user_id}/favorites/`;
    
    if (activeStatus !== 'ALL') {
      url = `https://bookhive-90e4e8826675.herokuapp.com/api/users/${user.user_id}/reading/${activeStatus}/`;
    }

    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch favorites');
    
    const data = await response.json();
    setFavorites(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

// Updates reading status for a book
const updateReadingStatus = async (bookId, newStatus) => {
  try {
    const response = await fetch('https://bookhive-90e4e8826675.herokuapp.com/api/favorites/status/update/', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: user.user_id,
        book_id: bookId,
        reading_status: newStatus
      }),
    });

    if (!response.ok) throw new Error('Failed to update status');
    fetchFavorites();
  } catch (err) {
    setError(err.message);
  }
};

// Removes book from favorites
const removeFavorite = async (bookId) => {
  try {
    const response = await fetch(
      `https://bookhive-90e4e8826675.herokuapp.com/api/favorites/${user.user_id}/${bookId}/remove/`,
      { method: 'DELETE' }
    );

    if (!response.ok) throw new Error('Failed to remove favorite');
    fetchFavorites();
  } catch (err) {
    setError(err.message);
  }
};
```

### Administrative Functions

**Librarian.jsx** - Book creation and management

```javascript
// Creates new book entry (librarian only)
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('https://bookhive-90e4e8826675.herokuapp.com/api/books/create/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...newBook,
        user_id: user.user_id
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('Book created successfully!');
      setNewBook({
        title: '',
        author: '',
        description: '',
        genre: '',
        published_date: '',
        cover_image: '',
        available_copies: 1
      });
    } else {
      setMessage(data.error || 'Failed to create book');
    }
  } catch (err) {
    setMessage('Error creating book: ' + err.message);
  }
};
```

### Navigation and Session Management

**Navigation.jsx** - User session and logout handling

```javascript
// Handles user logout and session cleanup
const handleLogout = async () => {
  try {
    const response = await fetch('https://bookhive-90e4e8826675.herokuapp.com/api/users/logout/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: user.user_id }),
    });

    if (response.ok) {
      localStorage.removeItem('user');
      navigate('/');
    }
  } catch (error) {
    console.error('Logout error:', error);
  }
};
```

### Route Protection

**App.js** - Authentication and authorization guards

```javascript
// Protects routes requiring authentication
const ProtectedRoute = ({ children }) => {
  const userStr = localStorage.getItem('user');
  if (!userStr) {
    return <Navigate to="/" replace />;
  }
  return children;
};

// Protects librarian-only routes
const LibrarianRoute = ({ children }) => {
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;
  if (!user || !user.is_librarian) {
    return <Navigate to="/home" replace />;
  }
  return children;
};
```

## ---

## User Workflow

### Regular User Experience

**1. Authentication**
* Visit [https://bookhive-frontend-1d36e543d26f.herokuapp.com/](https://bookhive-frontend-1d36e543d26f.herokuapp.com/)
* Sign in using Google account credentials through the OAuth interface
* The application requests basic profile information and email access
* Upon successful authentication, users are redirected to the home page

**2. Browse Books**
* The home page displays featured books randomly selected from the collection
* Users can navigate to the Library to view the complete book collection
* Books can be filtered by genre (Classic, Non-Fiction, Fantasy)
* Each book card displays title, author, genre, description, and availability

**3. Book Details and Reviews**
* Clicking "View Details" opens the complete book information page
* Users can read existing reviews and ratings from other users
* Users can submit their own reviews with a 1-5 star rating system
* Users can add books to their personal favorites/reading list

**4. Manage Reading Lists**
* The Favorites page displays all books added to the user's reading list
* Books can be organized by reading status:
  * Want to Read
  * Currently Reading
  * Already Read
* Users can update reading status or remove books from their list
* Filtering options help users focus on specific categories

### Librarian Administrative Workflow

**1. Access Administrative Features**
* Librarians have access to an additional "Admin" section in the navigation
* The librarian dashboard provides tools for book management

**2. Add New Books**
* Librarians can add new books to the collection using a comprehensive form
* Required information includes:
  * Title and author
  * Description and genre selection
  * Publication date
  * Cover image URL
  * Number of available copies
* Cover image previews are displayed for validation

**3. Content Moderation**
* Librarians can delete inappropriate reviews from any book page
* Review deletion helps maintain community standards

## ---

## Feature Details

### Authentication System

The application uses Google OAuth 2.0 for secure user authentication:

* **Single Sign-On**: Users authenticate using existing Google accounts
* **Automatic Account Creation**: New users are automatically registered on first login
* **Session Management**: User sessions are maintained using localStorage
* **Role-Based Access**: The system differentiates between regular users and librarians
* **Client ID Configuration**: Uses Google OAuth client ID `567112089666-3hjf1cqcgvk1n40s4uvj6o0n44pn8tv5.apps.googleusercontent.com`

### Book Management

#### Book Collection
* Books are stored with comprehensive metadata including title, author, genre, description, publication date, and cover images
* The system supports three main genres: Classic, Non-Fiction, and Fantasy
* Each book tracks available copies for potential lending functionality
* Book covers are displayed with fallback options for missing images

#### Search and Filtering
* Users can filter books by genre using dedicated filter buttons
* The search functionality queries the backend API for relevant results
* Books are displayed in a responsive grid layout with consistent card design
* "All Books" option returns the complete collection

### Review and Rating System

#### User Reviews
* Users can submit text reviews with corresponding 1-5 star ratings
* Reviews are tied to user accounts and display submission timestamps
* The review system encourages community engagement and book discovery
* Star ratings are displayed visually using React Icons

#### Content Moderation
* Librarians have the ability to delete inappropriate or spam reviews
* Review deletion is performed through API calls that remove content from the database
* The moderation system helps maintain quality community standards
* Only librarian accounts can access deletion functionality

### Personal Reading Management

#### Favorites System
* Users can add books to their personal reading list from any book detail page
* The favorites system supports multiple reading statuses for organization
* Status updates are immediately reflected in the user interface
* Books are added with default status "WANT_TO_READ"

#### Reading Status Tracking
* **Want to Read**: Books the user intends to read in the future
* **Currently Reading**: Books the user is actively reading
* **Already Read**: Books the user has completed

#### List Management
* Users can filter their reading list by status for easy organization
* Books can be removed from the reading list entirely
* Status changes are persisted to the backend database
* Visual indicators show current reading status

## ---

## API Integration

The application integrates with a backend API hosted at `https://bookhive-90e4e8826675.herokuapp.com` with the following endpoints:

### Authentication Endpoints
* `POST /api/users/login/` - User authentication and registration
  * Creates user account if not exists
  * Returns user data including librarian status
* `POST /api/users/logout/` - User session termination
  * Cleans up server-side session data

### Book Management Endpoints
* `GET /api/books/` - Retrieve all books in the collection
  * Returns complete book metadata for library display
* `GET /api/books/search/?q={query}` - Search books by query string
  * Supports genre-based filtering
* `GET /api/books/{bookId}/` - Get detailed book information with reviews
  * Includes all associated reviews and ratings
* `POST /api/books/create/` - Create new book (librarian only)
  * Requires authentication and librarian privileges

### Review System Endpoints
* `POST /api/reviews/` - Submit new book review
  * Requires user authentication
  * Accepts rating (1-5) and review text
* `DELETE /api/reviews/{reviewId}/delete/` - Delete review (librarian only)
  * Requires librarian authentication

### Favorites Management Endpoints
* `GET /api/users/{userId}/favorites/` - Get user's favorite books
  * Returns all favorited books with metadata
* `GET /api/users/{userId}/reading/{status}/` - Get books by reading status
  * Filters by specific reading status
* `POST /api/favorites/add/` - Add book to favorites
  * Sets initial reading status
* `PUT /api/favorites/status/update/` - Update reading status
  * Changes between Want to Read, Currently Reading, Already Read
* `DELETE /api/favorites/{userId}/{bookId}/remove/` - Remove from favorites
  * Completely removes book from user's list

## ---

## Deployment Configuration

### Production Deployment

The application is deployed on Heroku at: [https://bookhive-frontend-1d36e543d26f.herokuapp.com/](https://bookhive-frontend-1d36e543d26f.herokuapp.com/)

### Production Server

The application includes an Express.js server (`server.js`) configured for production deployment:

```javascript
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log(`Server is up and running on port ${port}`);
```

### Build Scripts

The `package.json` includes deployment-ready scripts:

* `npm start` - Runs the production server (points to server.js)
* `npm run build` - Creates optimized production build using react-scripts
* `npm run heroku-postbuild` - Automatic build process for Heroku deployment

### Environment Configuration

* Node.js version: 18.x
* npm version: 9.x
* Configured for Heroku deployment with automatic build process
* Static JSON configuration for client-side routing support

### Heroku Configuration

The application includes a `static.json` file for proper routing:

```json
{
  "root": "build/",
  "routes": {
    "/**": "index.html"
  },
  "https_only": true
}
```

## ---

## Contributing

This project follows standard React development practices and welcomes contributions from developers interested in library management systems.

### Development Guidelines

* Follow component-based architecture patterns
* Maintain consistent styling using CSS modules
* Implement proper error handling for API calls
* Write descriptive commit messages and documentation
* Use functional React components with hooks

### Code Quality Standards

* Use modern JavaScript ES6+ features
* Implement proper error boundaries and loading states
* Maintain responsive design principles
* Follow accessibility best practices
* Consistent naming conventions for components and functions

### Testing Recommendations

* Implement unit tests for utility functions
* Add integration tests for API interactions
* Include component tests for UI elements using React Testing Library
* Consider end-to-end testing for critical user workflows
* Test authentication flows thoroughly

## Next Steps for Future Development

### Enhanced Features

**1. Advanced Search and Filtering**
* Implement full-text search across book content and descriptions
* Add advanced filtering options (publication year ranges, rating ranges)
* Create tag-based categorization system beyond current genres
* Add sorting options (popularity, average rating, recent additions)
* Implement autocomplete for search functionality

**2. Social Features**
* User profiles with reading statistics and achievements
* Book recommendations based on reading history and ratings
* Discussion forums for book clubs and reading groups
* Social sharing of reviews and reading lists
* Following other users and seeing their reading activity

**3. Library Management**
* Book lending/checkout system with due dates and notifications
* Inventory management for physical copies with barcode scanning
* Reservation system for popular books with waitlists
* Integration with existing library catalog systems
* Late fee calculation and management

### Technical Improvements

**1. Performance Optimization**
* Implement lazy loading for book images and components
* Add pagination for large book collections to improve load times
* Optimize API calls with caching strategies using React Query
* Implement service worker for offline functionality
* Add image optimization and compression

**2. Enhanced User Experience**
* Dark mode theme option with user preference storage
* Accessibility improvements (screen reader support, keyboard navigation)
* Mobile app development using React Native
* Progressive Web App (PWA) features with installable app
* Improved responsive design for tablets and mobile devices

**3. Administrative Tools**
* Bulk book import functionality from CSV or external APIs
* User management and moderation tools for librarians
* Analytics dashboard for usage statistics and popular books
* Automated content moderation systems for reviews
* Book recommendation engine management

### Integration Possibilities

**1. External APIs**
* [Goodreads API](https://www.goodreads.com/api) for book metadata and reviews
* [Google Books API](https://developers.google.com/books) for cover images and descriptions
* [Open Library API](https://openlibrary.org/developers/api) for comprehensive book data
* ISBN lookup services for automatic book verification
* Library of Congress integration for authoritative metadata

**2. Third-Party Services**
* Email notifications for new books, due dates, and updates
* SMS reminders for due dates and reservations
* Integration with popular e-reader platforms (Kindle, Kobo)
* Social media integration for sharing reading progress
* Payment processing for late fees or book purchases

**3. Educational Features**
* Reading challenges and goal tracking
* Book clubs with scheduled discussions
* Author information and biography integration
* Reading level recommendations for younger users
* Integration with educational platforms for assigned reading

### Security and Scalability

**1. Enhanced Security**
* Implement rate limiting for API endpoints
* Add input validation and sanitization
* Secure file upload handling for book covers
* Two-factor authentication option
* Audit logging for administrative actions

**2. Scalability Improvements**
* Database optimization and indexing
* CDN integration for static assets
* Microservices architecture for large-scale deployment
* Containerization with Docker
* Load balancing for high traffic scenarios

This comprehensive README provides everything needed for developers to understand, set up, and contribute to the BookHive digital library management system. The application offers a solid foundation for library management while providing extensive opportunities for future enhancement and customization.
