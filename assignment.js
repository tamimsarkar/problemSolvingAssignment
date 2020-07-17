// feetToMile

function feetToMile (howMany){
    var feet = howMany / 5280 +' Mile' ;
    return feet;
}
console.log(feetToMile(18));
console.log(feetToMile(28));

//WoodCalculation

function WoodCalculation(chair,table,bed){
  var woodForChair = chair * 1;           // 1 means one qubic feet
  var woodForTable = table * 3;           // 3 means three qubic feet
  var woodForBed = bed *5 ;               // 5 means five qubic feet
  totalWood = woodForChair + woodForTable + woodForBed;
  return totalWood;
}
var result = WoodCalculation(12,32,43);
console.log(result);

//tinyFriend
function tinyFriend(friends) {
  var shortLength = Infinity;
  var shortName = "";

  if (friends.length > 0) {
      for (var i = 0; i < friends.length; i++) {
          if (typeof friends[i] === 'string' && friends[i].length < shortLength) {
               shortName = friends[i];
              shortLength = friends[i].length;
          }
      }
  }
  return shortName;
}
var tinyShortFriend = tinyFriend([ 'Tamim', 'Sabbir','anik','Mufti','Auporna',]);
console.log(tinyShortFriend);