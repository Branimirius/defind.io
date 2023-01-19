if(window.innerWidth > 700){
	SmoothScroll({
		animationTime    : 600,
		stepSize         : 75,
		accelerationDelta : 20,  
		accelerationMax   : 1,   
		keyboardSupport   : true,  
		arrowScroll       : 50,
		pulseAlgorithm   : true,
		pulseScale       : 4,
		pulseNormalize   : 1,
		touchpadSupport   : true,
	});
}else{
SmoothScroll({
		animationTime    : 600,
		stepSize         : 120,
		accelerationDelta : 25,  
		accelerationMax   : 3,   
		keyboardSupport   : true,  
		arrowScroll       : 50,
		pulseAlgorithm   : true,
		pulseScale       : 4,
		pulseNormalize   : 1,
		touchpadSupport   : true,
	});
}