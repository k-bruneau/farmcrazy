var Ajax = function()
{
  var xhr = null;
  var obj = this;
    
  obj.method = 'GET';
  obj.file = null;
  obj.async = false;
  obj.send = null;
  obj.out = 'txt';
  obj.timetoexec = 0;
  obj.onsucess = function() {};
  obj.onloading = function() {};
  

  obj.start = function() {
    setTimeout(function () {
      obj.lunch();
    }
    ,obj.timetoexec);
  }
  obj.lunch = function() {
    if(window.XMLHttpRequest) 
      xhr = new XMLHttpRequest();
    else if(window.ActiveXObject)
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    else
      return;
      
    xhr.open(obj.method, obj.file, obj.async);
    xhr.send(obj.send);
    
    if(obj.onloading)
      obj.onloading();
    
    if(xhr.readyState == 4) {
      if(xhr.status == 200) {
        if(obj.onloading)
          delete obj.onloading;
          
        if(obj.out == 'txt') return(obj.onsucess(xhr.responseText));
        if(obj.out == 'xml') return(obj.onsucess(xhr.responseXML));
      }
    }else
      return;
  }
};

// req = new Ajax();
// req.file = 'index.php';
// req.timetoexec = 1000;
// req.onsucess = function (callback) {
  // alert(callback);
// }
// req.start();