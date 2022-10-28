How to Access: 
Server
Install server dependencies:
cd server
npm install

Seed the database:
npm run seeds

Run express:
npm run server:dev

Client
cd ../client
npm install
npm start

Brief:
MVP
User should be able to play a functional game of Yahtzee:
User should be able to roll dice, then select which dice to roll again, up to three times in total.
The user can then select a scoring category for this turn.
The current game is persisted both in state and in the database.
The program should automatically calculate the users score.

Extensions
Add a second player. Have the option to add player's names, their team's colour...
Have a statistics page with details of previous games, hi scores etc.
A whole other card game Pairs/Pelmanism. 

Technologies Used: 
Javascript, React, HTML, CSS, MongoDB