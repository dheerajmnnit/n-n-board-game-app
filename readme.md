Game Development:
Develop a game with the following features:
1. A board of NxN with all cells coloured light grey.
2. There should be a score, high score, timer (starting from 120 seconds to 0) components.
3. High score should be persisted even if the browser is restarted.
4. Board size should be configurable based on the level of game selected by the user on UI.
➢ Easy: 3x3
➢ Medium: 4x4
➢ Hard: 6x6
5. On game start, in every 1 second, a randm cell is highlighted in green for 1 second.
6. If the user clicks the highlighted cell then score is incremented by 1.
7. If the user clicks any unhighlighted cell then score is decremented by 1.
8. If the score goes beyond high score then high score is updated.
9. When timer becomes 0, an alert should be displayed with message ‘Game Over !!!’ and
on click of OK on alert, game should be restarted.
10. There should be a button to restart the game.


Requirements:
The app uses Node, so you must have a recent version of Node

Installation:
run npm install
run node node_app.js
Navigate to http://localhost:3000
