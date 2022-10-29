use yahtzee;
db.dropDatabase();

db.scores.insertMany([
    {
        score: 30
    }
]);

db.rolls.insertMany([
    {roll:[1,2,3,4,5]}
])