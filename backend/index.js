//main server file

const express = require('express');
const session = require('express-session');
const passport = require('passport'); 
const SpotifyStrategy = require('passport-spotify').Strategy;
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 4000;

// Secret key
const secret = crypto.randomBytes(64).toString('hex');
const axios = require('axios');




// Initialize Passport and set up session handling
app.use(session({
  secret: secret,
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

// Configure Passport and Spotify Strategy
passport.use(new SpotifyStrategy({
  clientID: 'c9fdd3ba87e846eba854d3bdbad01869', // Use the constants directly
  clientSecret: '5faa6ae8ed154b9bab64cfa57e4711be',
  callbackURL: 'http://localhost:4000/callback',
},
(accessToken, refreshToken, expires_in, profile, done) => {
  return done(null, { accessToken, profile });
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Spotify Top 100 Tracker!');
});

app.get('/auth/spotify', passport.authenticate('spotify', {
  scope: ['user-top-read']
}));

app.get('/callback', passport.authenticate('spotify', { failureRedirect: '/' }), (req, res) => {
  // Successful authentication
  res.redirect('/');
});

app.get('/top100', (req, res) => {
  // Make sure the user is authenticated
  if (!req.isAuthenticated()) {
    return res.status(401).send('Unauthorized');
  }
  const accessToken = req.user.accessToken;
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
  };

  axios.get('https://api.spotify.com/v1/me/top/tracks?limit=100', { headers })
    .then(response => {
      const topSongs = response.data.items
      res.json(topSongs);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred while fetching top tracks.');
    });
});





app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});





// This sets up basic Spotify authentication. Users can visit /auth/spotify to start the authentication process and will be redirected to /success when successful.

// You can now access the user's profile and access token in your routes by using req.user.profile and req.user.accessToken.