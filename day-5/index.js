const express = require('express');
const app = express();



app.use(express.json()); // Middleware to parse JSON request bodies

// app.get('/', (req, res) => {
//     res.json({ message: 'GET Request' });
// });

let students = ['jay' , 'gofau' , 'ewfrggbf'];

app.get('/students', (req, res) => {
    res.json(students);
});

app.post('/students', (req, res) => {
    let data = req.body.name
    students.push(data);
    res.json(students);
    
});

app.put('/students/:id', (req, res) => {
    let id = req.params.id;
    let data = req.body.name;
    students[id] = data;
    res.json(students);
}); 

app.delete('/students/:id', (req, res) => {
    let id = req.params.id;
    students.splice(id, 1);
    res.json(students);
}); 



app.listen(5137, () => {
    console.log('Server is running on PORT 5137');
}); 