const express = require('express');
const app = express();
const port = `8089`;
const cors = require('cors')
const bodyParser = require('body-parser')
const corsOptions = { origin: 'http://localhost:4200' };


app.use(bodyParser.json());
app.use(cors(corsOptions))
require('./defaultCollection')(app);
app.use('/api/login', require('./routes/loginRoutes'))
app.use((req, res) => { res.status(404).send(`Requested Resource Not avaliable`) })
app.listen(port, console.log(`Server is Running on Port ${port}`));