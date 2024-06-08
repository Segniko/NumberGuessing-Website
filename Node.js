const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

// Replace with your actual Firebase service account key (download from Firebase project)
const serviceAccount = require('./serviceAccountKey.json');

// Initialize Firebase app (admin SDK)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); // Access Firestore database

const app = express();
app.use(bodyParser.json());

// Endpoint for user registration (replace with actual implementation)
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Handle user registration logic (store in Firestore)
  // ... (implement user creation with password hashing)

  res.send({ message: 'Registration successful' });
});

// Endpoint for login validation (using Firebase Authentication)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  admin.auth().signInWithEmailAndPassword(username, password)
    .then((user) => {
      // Login successful, return a token (replace with JWT)
      const token = 'your_jwt_token'; // Replace with actual token generation
      res.send({ message: 'Login successful', token });
    })
    .catch((error) => {
      res.status(401).send({ message: 'Login failed: ' + error.message });
    });
});

// Get a random number for the game (replace with desired logic)
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1; // Example: generates a number between 1 and 100
}

// Endpoint for starting a game session (requires authentication)
app.post('/start-game', async (req, res) => {
  const token = req.headers.authorization; // Get token from headers
  // Validate token (replace with JWT validation)

  const correctNumber = getRandomNumber();  // Generate random number

  // Update user data in Firestore with game state (optional)
  const userRef = db.collection('users').doc(userId); // Replace with user ID retrieval
  await userRef.set({ correctNumber });  // Store correct number in user data

  res.send({ message: 'Game started!', correctNumber }); // Don't send the actual number to the user!
});

// Endpoint for handling user guesses (requires authentication)
app.post('/submit-guess', async (req, res) => {
  const token = req.headers.authorization; // Get token from headers
  // Validate token (replace with JWT validation)

  const guess = req.body.guess;
  const userId = req.body.userId; // Replace with user ID retrieval (from token)

  // Retrieve user data from Firestore
  const userRef = db.collection('users').doc(userId);
  const userDoc = await userRef.get();
  const userData = userDoc.data();

  if (!userData) {
    return res.status(400).send({ message: 'Invalid user' });
  }

  const { correctNumber } = userData; // Retrieve correct number from user data

  // Compare guess with correct number and update game state (optional)
  // Update bonus points, timer, etc. based on the guess (replace with your logic)

  res.send({ message: 'Guess submitted!', feedback: 'Guess feedback' }); // Replace with actual feedback message
});

const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000
app.listen(port, () => console.log(`Server listening on port ${port}`));
