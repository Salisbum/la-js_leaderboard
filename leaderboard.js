var gameInfo = function(){
  return [
   {
     home_team: "Patriots",
     away_team: "Broncos",
     home_score: 7,
     away_score: 3
   },
   {
     home_team: "Broncos",
     away_team: "Colts",
     home_score: 3,
     away_score: 0
   },
   {
     home_team: "Patriots",
     away_team: "Colts",
     home_score: 11,
     away_score: 7
   },
   {
     home_team: "Steelers",
     away_team: "Patriots",
     home_score: 7,
     away_score: 21
   }
 ];
};

// YOUR CODE HERE
function Team(name, rank, wins, losses) {
  this.name = name;
  this.rank = rank;
  this.wins = wins;
  this.losses = losses;
}

var patriots_wins = 0;
var broncos_wins = 0;
var colts_wins = 0;
var steelers_wins = 0;

var patriots_losses = 0;
var broncos_losses = 0;
var colts_losses = 0;
var steelers_losses = 0;

for (var i = 0; i < gameInfo.length; i++) {
  return this.name;
}
