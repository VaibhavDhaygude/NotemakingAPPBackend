const express=require('express');
const mongoose = require("mongoose");
var cors = require('cors')

mongoose.connect("mongodb://127.0.0.1/notepadDB", { useNewUrlParser: true });
// mongoose.connect("mongodb+srv://Vaibhav:AxGBnIkRDB1u4vq8@cluster0.2i8vbo6.mongodb.net/?retryWrites=true&w=majority", 
// {dbName:'NotePadDB', useNewUrlParser: true ,useUnifiedTopology: true}).then(()=>{
//   console.log("connected to DB")
// }).catch(console.error); ;


const app = express()
app.use(cors())
const port = 5000


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})