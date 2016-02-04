function constructThis(name, whoCares, whereAmIGoing) {
  this.name = name;
  this.whoCares = whoCares;
  this.whereAmIGoing = whereAmIGoing;
};
var allNames = [new constructThis("Mars", "Nobody", "Marshall\'s House"),
                new constructThis("Marshall", "Nobody", "Already here")];



var easterEgg = document.getElementById('easterEgg');
easterEgg.addEventListener('click', alertFunction);


function alertFunction() {
  alert('Fuck you!')
}
