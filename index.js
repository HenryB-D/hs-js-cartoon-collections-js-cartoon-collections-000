function dwarfRollCall(dwarves) {
  var rollcall = ""
  for (var i = 0; i< dwarves.length; i++){
    rollcall += i+1 + ". " + dwarves[i] + " "
}
return rollcall
}

function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map(a=>a.toUpperCase()+"!")
 
}

function longPlaneteerCalls(words) {
  for(var i=0;i<words.length;i++){
    if (words[i].length>4)
      return true
    }
  return false
}

function findTheCheese (foods) {
for(var i=0;i<foods.length;i++){
  if ([i]=="cheddar"
    || [i]=="gouda"
    || [i]=="camembert")
    return [i]
  }
return "no cheese!"
}
