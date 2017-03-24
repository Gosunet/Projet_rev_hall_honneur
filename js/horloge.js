

function Horloge(){
  this.date      = new Date() ; 
  this.horloge0  = this.date.getTime() ; 
  this.horloge   = 0.0 ; 
  this.deltaTime = 0.0 ; 
}

Horloge.prototype.top = function(){
  this.date      = new Date() ; 
  var h          = this.date.getTime()  - this.horloge0 ; 
  this.deltaTime = h - this.horloge ; 
  this.horloge   = h ; 
} 

Horloge.prototype.t  = function(){return this.horloge/1000.0;}

Horloge.prototype.dt = function(){return this.deltaTime/1000.0;} 
