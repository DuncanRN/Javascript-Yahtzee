### Yahtzee App

This Yahtzee App was built using React.

Technologies used:
Javascript, React, HTML, CSS, MongoDB

### Running the App

### Server
Install server dependencies:
cd /server
npm install (npm upgrade if necessary)

Seed the database:
npm run seeds

Run express:
npm run server:dev

Server will be available on http://localhost:9000/api/rolls

### Client
cd /client
npm install (npm upgrade if necessary)
npm start

Client will be available on http://localhost:3000/

### Brief:

MVP
User should be able to play a functional game of Yahtzee:
User should be able to roll dice, then select which dice to roll again, up to three times in total.
The user can then select a scoring category for this turn.
The current game is persisted both in state and in the database.
The program should automatically calculate the users score.

Extensions
Add a second player. Have the option to add player's names, their team's colour...
Have up to 6 players, with a scorecard matching the rulebook of Yahtzee.
Have a statistics page with details of previous games, hi scores etc.
A whole other card game Pairs/Pelmanism. 