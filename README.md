---

### **Frontend Documentation (React App)**

---

# Frontend: Recipe Blog

## Table of Contents
1. [Overview](#overview)
2. [Setup Instructions](#setup-instructions)
3. [Available Scripts](#available-scripts)
4. [Environment Variables](#environment-variables)
5. [Project Structure](#project-structure)
6. [API Integration](#api-integration)
7. [Contributing](#contributing)

---

## Overview
This is the frontend application for the Recipe Blog, built using React. The app allows users to browse, add, edit, and delete recipes. It integrates with a Django backend that handles the database and API logic.

---

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone <your-repo-url>
   cd recipe-blog-frontend
   ```

2. **Install Dependencies:**
   Ensure that you have Node.js and Yarn installed on your system. Then run:
   ```bash
   yarn install
   ```

3. **Create Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```
   REACT_APP_API_URL=http://127.0.0.1:8000/api/
   ```

   This points the frontend to your local backend API.

4. **Run the Application:**
   ```bash
   yarn start
   ```
   The app will be available at `http://localhost:3000`.

---

## Available Scripts

In the project directory, you can run:

- **`yarn start`**: Runs the app in the development mode.
- **`yarn build`**: Builds the app for production.
- **`yarn test`**: Launches the test runner.
- **`yarn lint`**: Lints the codebase for issues.

---

## Environment Variables

Ensure the `.env` file contains the following:
```
REACT_APP_API_URL=http://127.0.0.1:8000/api/
```
This should be configured to point to your local or production backend URL.

---

## Project Structure
Here is a brief overview of the main directories:
- **`src/components/`**: Contains reusable React components.
- **`src/pages/`**: Contains the main pages like LandingPage, EditRecipe, AddRecipes.
- **`src/api/`**: Contains API service functions for communication with the backend.
- **`src/styles/`**: Contains the CSS files for styling.

---

## API Integration
The frontend integrates with the backend via REST API calls. All API requests are handled in `src/api/` using Axios.

Example configuration in `src/api/recipeService.js`:
```javascript
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Example API call
export const getRecipes = () => axios.get(`${API_URL}/recipes/`);
```

---

## Contributing
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request once the changes are made.
