use yahtzee;
db.dropDatabase();

db.scores.insertMany([
    {
        score: 30
    }
]);