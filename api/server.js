const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.get('/reservation', (req, res) => {
  // Render the reservation form view
  res.render('reservationForm');
});

app.post('/reservation', (req, res) => {
  // Process reservation form submission
  const formData = req.body;
  // Handle form data (e.g., save to database)
  console.log(formData);
  // Redirect or render a success view
  res.send('Reservation created successfully');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
