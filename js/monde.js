

function Monde(){
  this.horloge = new Horloge() ; 
  this.population = [] ; 
}

Monde.prototype.ajouterIndividu = function(unIndividu){
  this.population.push(unIndividu) ; 
}

Monde.prototype.update = function(){
  this.horloge.top() ; 
  var t  = this.horloge.t() ; 
  var dt = this.horloge.dt() ; 
  for(var x in this.population){
    x.update(dt) ; 
  } 
}

Monde.prototype.init = function(){

}
