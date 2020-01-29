const express = require('express');
const app = express();
app.use(express.json());
const port = 4000
const ctrl = require('./controllers/petController')

// Pet Endpoints
app.get('/api/pets', ctrl.getPets)
app.post('/api/create', ctrl.createPet)
app.delete('/api/delete/:id', ctrl.deletePet)
app.put('/api/update/:id', ctrl.updatePet)


app.listen(port, () => console.log(`Server running on port ${port}`));

