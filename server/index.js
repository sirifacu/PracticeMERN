import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import path from 'path';
import routes from './routes/';
import cors from 'cors';

// Connect to database
mongoose.Promise = global.Promise;
// const dbUrl = 'mongodb://localhost:27017/interview';
const dbUrl = 'mongodb+srv://sirifacu:river91218@valhallamern.fsoqd.mongodb.net/interview?retryWrites=true&w=majority'
mongoose.connect(dbUrl, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err));

const app = express();
app.set('port', process.env.PORT || 3005);

// Middlewares
app.use(morgan('dev'));
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', routes);

// Port
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'))
});