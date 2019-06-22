const express = require('express');
const connectDb = require('./config/db');

const app = express();

//connect database
connectDb();

//Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({ msg: 'test' });
});

// Define Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
