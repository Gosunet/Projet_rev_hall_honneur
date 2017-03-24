

function creerTexte3d(laScene, leTexte){
	var res = document.createElement('a-entity') ; 
	res.setAttribute('text','text: ' + leTexte) ; 
	res.setAttribute('material','color', '#FAA') ;
	y = 0.2*Math.random() + 1.0
	z = (1 - Math.random())*5.0 ; 
	x = (1 - Math.random())*5.0 ; 
	p = {} ;
	p.x = x ;
	p.y = y ;
	p.z = z ;
	res.setAttribute('position',p) ; 
	res.setAttribute('scale','0.2 0.2 0.2') ; 
	laScene.appendChild(res) ; 
	return res ;
}

function creerTexte3dPositionColore(laScene, leTexte,x,y,z,couleur){
	var res = document.createElement('a-entity') ; 
	res.setAttribute('text','text: ' + leTexte) ; 
	res.setAttribute('material','color',couleur) ;
	y = 0.2*Math.random() + 1.0
	z = (1 - Math.random())*5.0 ; 
	x = (1 - Math.random())*5.0 ; 
	p = {} ;
	p.x = x ;
	p.y = y ;
	p.z = z ;
	res.setAttribute('position',p) ; 
	res.setAttribute('scale','0.2 0.2 0.2') ; 
	laScene.appendChild(res) ; 
	return res ;
}

function creerTexte3dColore(laScene, leTexte,couleur){
	var res = document.createElement('a-entity') ; 
	res.setAttribute('text','text: ' + leTexte) ; 
	res.setAttribute('material','color',couleur) ;
	y = 0.2*Math.random() + 1.0
	z = (1 - Math.random())*5.0 ; 
	x = (1 - Math.random())*5.0 ; 
	p = {} ;
	p.x = x ;
	p.y = y ;
	p.z = z ;
	res.setAttribute('position',p) ; 
	res.setAttribute('scale','0.2 0.2 0.2') ; 
	laScene.appendChild(res) ; 
	return res ;
}
