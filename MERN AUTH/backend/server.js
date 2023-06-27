
import express from 'express';
import bodyParser from 'body-parser';
import mongodb from 'mongodb';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Rest of your code...


app.get('/',(req,res) => res.send('Server is ready'));

app.listen(port,() => console.log('Server stared on port ${port}'));