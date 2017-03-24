
function Mobile(id,m,gr){

	this.id  = id ;
	this.pos = gr.getAttribute('position') ; 
	this.m   = m ; 
	this.gr  = gr ;

	this.vit = vec3Creer() ; 
	this.acc = vec3Creer() ;  
}

Mobile.prototype.appliquerForce = function(f){
	vec3Accumuler(this.acc,1.0,f) ; 
}

Mobile.prototype.update = function(dt){
	vec3Scale(this.acc,1.0/this.m);
	vec3Accumuler(this.pos,dt,this.vit) ; 
	vec3Accumuler(this.vit,dt,this.acc) ;
	vec3Set(this.acc,0.0,0.0,0.0) ; 

	this.gr.setAttribute('position',this.pos) ; 
}
