var MatchGame = {};
var cardValues = [];

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

$(document).ready(

  function() {
    MatchGame.generateCardValues();
  });

$(document).ready(
  function() {
  MatchGame.renderCards(cardValues, $('#game .row'));
}
);

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var numbers = [];

  for (i=0;i<cardValues.length;i++) {
    cardValues.splice(i);
  }

  for (i=1;i<9;i++) {
    numbers.push(i);
    numbers.push(i);
  }

  while(numbers.length>0) {
    var random = Math.floor(Math.random() * numbers.length);
    cardValues.push(numbers[random]);
    numbers.splice(random, 1);
  }
  return cardValues;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cards, $game) {
  $game.empty();

  var cardColors = ['hsl(25,85%,65%)','hsl(55,85%,65%)','hsl(90,85%,65%)','hsl(160,85%,65%)',
  'hsl(220,85%,65%)','hsl(265,85%,65%)','hsl(310,85%,65%)','hsl(360,85%,65%)'];

  for (i=0;i<cardValues.length;i++) {
    var $card = $('<div class="card col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>');
    $card.data('value', cardValues[i]);
    $card.data('flipped', false);
    $card.data('color',cardColors[cardValues[i]-1]);
    $game.append($card);
  }
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
