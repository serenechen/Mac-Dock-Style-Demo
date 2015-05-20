	window.onload =function() {
		var oDiv = document.getElementById('div1');
		var aImg = oDiv.children;
		var aInputs = document.getElementsByTagName('input');
		document.onmousemove = function(ev) {
			var oEvent = ev||event;
			for(var i = 0; i < aImg.length; i++) {			
				//calculates the horizontal and vertival distance from cursor to the center of each image
				var a = aImg[i].offsetLeft+aImg[i].offsetWidth/2-oEvent.clientX;                 
				var b = aImg[i].offsetTop+oDiv.offsetTop+aImg[i].offsetHeight/2-oEvent.clientY;
				//calculates the staight distance from cursor to the center of each image
				var c =	Math.sqrt(a*a+b*b);   
				//as the distance becomes smaller, the scale should be larger, 500 is a factor that can be customized to adjust 
				//the distance where the dock can sense the cursor moves towards it
				var scale = 1-c/500;
				//always set the 1/2 scale no matter how far the cursor is away from the dock
				(scale<0.5) && (scale=0.5);
				aImg[i].style.width = 128*scale+'px';
				aInputs[i].value = scale;            //output the scale for test
			}
		};
	};