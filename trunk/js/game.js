var Game = function () {
  var obj = this;
      //AJAX RECUPT X ET Y DE LA FERME
  
  obj.load_ferme = function() {
    //recuperer et creer la ferme.
    req = new Ajax();
    req.file = 'gateway.php?action=data_ferme';
    req.onloading = function () {
      $('ferme_loading').style.visibility = 'visible';
    }
    req.onsucess = function (callback) {
      $('ferme_loading').style.visibility = 'hidden';
      $('ferme_display').innerHTML = callback;
    }
    req.start();
    
  }
}
 drag = function (id) {
 var ondrag = null;
	$(id).onclick = function() {
		ondrag = 1;
	}
	
	$(id).onmousemove = function(e) {
		if(ondrag) {
			$(id).style.position = 'absolute';
			$(id).style.top = (e.clientY)+'px';
			$(id).style.left = (e.clientX)+'px';
		}
	}
	$(id).onclick = function() {
		ondrag = null;
	}
} 
