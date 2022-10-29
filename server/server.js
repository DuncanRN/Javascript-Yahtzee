const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://127.0.0.1:27017', {
    useUnifiedTopology: true
}).then((client) => {
    const db = client.db('yahtzee');
    const scoresCollection = db.collection('scores');
    const scoresRouter = createRouter(scoresCollection);
    app.use('/api/scores', scoresRouter);
}).catch(console.err);

MongoClient.connect('mongodb://127.0.0.1:27017', {
    useUnifiedTopology: true
}).then((client) => {
    const db = client.db('yahtzee');
    const rollsCollection = db.collection('rolls');
    const rollsRouter = createRouter(rollsCollection);
    app.use('/api/rolls', rollsRouter);
}).catch(console.err);

app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});