const express = require('express');
const app = express();
const port = 8010;
const cors = require('cors');
require('./server/config/mongoose.config');

    

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
require('./server/routes/routes')(app);


app.listen(port, () => {console.log(`Listening on port: ${port}`) });