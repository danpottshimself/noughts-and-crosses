# noughts-and-crosses
Noughts and Crosses game made with angular as a training exercise.
*****************************************************************************************************

NoughtsAndCrossesGameEngine
A basic Noughts And Crosses Game api. Information about the current game is stored in the cookie - so of you delete or alter that, an error will occur.

API
All methods are currently HTTP POST only. Only expects and responds with appliction/json type. All errors (except for actual HTTP ones) are status 500, I'll change this if it proves to be a problem.

Be liberal with what you expect is for the weak :)

/api/v1.0/newgame

Creates a new game, re-setting existing board. Player 1 always goes first - but doesn't need to be human, indeed both players can be robotic.

Expected Body

{"player1": "playertype", "player2":"playertype" }

playertype:

playertype is the type of player, valid values:

'human' - the only non-robotic player supported, move sent by client from
'random' - a robotic player that chooses a random square
'pre-trained' - a pre trained robot using a MENACE style engine. This robot should be fairly competant. Note that the training algorithm is not currently supported, so it won't get better with time.
If you set both players to be non-human when creating a game, the response should be a completed game, if you set player two only as human, the response will povide the robots's first move.

Response

{ "outcome": "outcome", "gameboard": "gameboard", "winner": "winner player number" }

outcome

outcome is the outcome of the game, valid values

'Continue' - Continue to play the game - no one has won and squares are available
'Draw' - The game ended in draw.
'Win' - A player has won the game.
winner

winner is player number of player who won the game. 1. If outcome is win it will be either 1 or 2, depending on whether player 1 or 2 won 2. Otherwise, it will be 0, even if outcome is a draw

gameboard

gameboard is a representation of the game board. It is a string containing 9 digits, the position/index of each representing one square on the board:

0	1	2
3	4	5
6	7	8
Valid values of the digits are 0 - unoccupied, 1 - player 1 has chose, 2 - player two has chosen.

Examples:

000000000 - A new blank board
000010000 - Player 1 has chosen the middle square
000010020 - Player 1 has chosen the middle square, player 2 chose the centre square of the bottom row.
220111022 - Player 1 has won by choosing the whole middle row.
Error responses

player1 is undefined - No value has been supplied for player1
player2 is undefined - No value has been supplied for player 2
unrecognised player type - One or both player types have been given an unrecognised player type.

/api/v1.0/makemove

Makes a move on the existing game - the client must have called newgame before this for it to work.

Expected Body

{"playerNumber": "playerNumber", "chosenSquare":"chosenSquare" }

playerNumber

playerNumber is the number of the player making the move, must be either 1 or 2.

chosenSquare

chosenSquare is the index of the square the player wants to play. Must be integer in the range 0-9 and unoccupied.

Response

The valid response is exactly the same as the newgame response.

Error responses

player number is not a number Either the player number is missing, or it is not a number
square number is not a number Either the square number is missing, or it is not a number
player number must be either 1 or 2 The player number is invalid, must be a whole number 1 or 2
the square position must be an integer in the range 0-8 The player number is invalid, must be a whole number in the range 0 to 8
Square already occupied The chosen square is already selected - choose again
Player Cannot Play Again The player made the last move - they cannot move twice!
game already won Can't continue to make moves when the game is ended.
