## Project Overview

### Initialization of Express, Passport, and Other Dependencies

This sets up the server with necessary libraries and middleware.

### Session Handling

This keeps track of users across requests by creating and managing sessions.

### Spotify Strategy Configuration

This sets up the Passport Spotify strategy, including client ID, secret, and callback URL, to authenticate users with their Spotify accounts.

### Serialization and Deserialization of Users

These functions are part of how Passport keeps track of users across sessions.

### Basic Endpoints

- `GET /`: A welcome message.
- `GET /auth/spotify`: Redirects the user to Spotify for authentication.
- `GET /callback`: Handles the callback from Spotify after authentication, redirecting to the home page.
- `GET /top100`: Fetches the top 100 tracks of the authenticated user from Spotify's API and sends them as a JSON response.
