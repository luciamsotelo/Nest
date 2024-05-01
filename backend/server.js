const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models'); // Assuming your models are exported from a file named 'models'

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
// const Bridesmaid = require('./routes/bridesmaid_route');
// const Category = require('./routes/category_route');
// const Groomsman = require('./routes/groomsman_route');
// const Guest = require('./routes/guest_route');
// const Guestlist = require('./routes/guestlist_route');
const User = require('./routes/user_route');
// const WeddingData = require('./routes/weddingdata_route');

// app.use('/api/bridesmaid', Bridesmaid);
// app.use('/api/category', Category);
// app.use('/api/groomsman', Groomsman);
// app.use('/api/guest', Guest);
// app.use('/api/guestlist', Guestlist);
app.use('/api/user', User);
// app.use('/api/weddingdata', WeddingData);

// Start the server
const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
