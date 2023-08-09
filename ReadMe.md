# Spotify Top 100 Songs App

This is a simple web application that displays the top 100 songs from the Spotify API. It uses React for the frontend and an Express server for the backend to fetch and display the song data.

## Features

- Fetches the top 100 songs from the Spotify API using the user's authentication token.
- Displays the list of songs along with their artists.
- Provides a clean and responsive user interface.
- Utilizes Tailwind CSS for styling.

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/spotify-top-100-app.git
```

2. Navigate to the project directory:

```bash
cd spotify-top-100-app
```

3. Install dependencies for both the frontend and backend:

```bash
cd client
npm install

cd ../server
npm install
```

## Configuration

1. Create a Spotify Developer account and create a new application to obtain the client ID and client secret.

2. Update the `server/index.js` file with your Spotify client ID and client secret:

```javascript
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;

// ...

passport.use(new SpotifyStrategy({
  clientID: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  callbackURL: 'http://localhost:4000/callback',
},
// ...
```

3. Set the callback URL in your Spotify Developer Dashboard to match `http://localhost:4000/callback`.

## Usage

1. Start the backend server:

```bash
cd server
npm start
```

2. Start the frontend development server:

```bash
cd client
npm start
```

3. Visit `http://localhost:3000` in your browser to see the app in action.

4. Click on the "Login with Spotify" button to authenticate and see the list of top 100 songs.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to add more information to the README as needed, such as deployment instructions, troubleshooting tips, or any additional features you plan to implement.
