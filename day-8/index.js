const express = require('express');
const app = express();
const noteRoutes = require('./routes/noteRoutes');

app.use(express.json());
app.use('/api/notes', noteRoutes);

app.listen(3000, () => {
    console.log('Server is running on PORT 3000');
});