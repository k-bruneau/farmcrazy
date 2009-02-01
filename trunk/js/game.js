var Game = function () {
  var obj = this;
      //AJAX RECUPT X ET Y DE LA FERME
  
  obj.load_ferme = function() {
    //recuperer et creer la ferme.
    req = new Ajax();
    req.file = 'gateway.php?action=data_ferme';
    req.onsucess = function (callback) {
      $('ferme_display').innerHTML = callback;
    }
    req.start();
    
  }
  
}