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

var gameData = gameInfo();
// YOUR CODE HERE
function team(name, rank, wins, losses) {
  this.name = name;
  this.rank = 0;
  this.wins = 0;
  this.losses = 0;
}

var teamName = function(array){
 var allTeams = [];
 var uniqueTeams = [];
 for (i = 0; i < array.length; i++) {
   allTeams.push(array[i].home_team);
   allTeams.push(array[i].away_team);
 }

 for ( var i in allTeams ){
   if( uniqueTeams.indexOf(allTeams[i]) === -1){
     uniqueTeams.push(allTeams[i]);
   }
 }

 var teams = [];
 for (i = 0; i < uniqueTeams.length; i++) {
   teams.push(new team(name = uniqueTeams[i]));
 }
 return teams;
};

var teamObjects = teamName(gameInfo());

var winsLosses = function(array){
  for (var i = 0; i < array.length; i++) {
    if (array[i].home_score > array[1].away_score) {
       for (var i = 0; i < teamObjects.length; i++) {
         if (teamObjects[i].name === array[i].home_team) {
           teamObjects[i].wins++;
         } else {
           teamObjects[i].losses++;
         }
       }
    }
  }
  return teamObjects;
};










// console.log(teamObjects);
console.log(winsLosses(gameData));
