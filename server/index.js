//Express
const express = require('express')
const app = express()

//CORS
const cors = require('cors');
app.use(cors());

//Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//Port
const port = (process.env.port || 8080)

//Routes
app.post("/login", (req, res) => {
  console.log(req.body.username);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})