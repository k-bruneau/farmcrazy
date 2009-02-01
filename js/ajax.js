var Ajax = function()
{
  var xhr = null;
  var obj = this;
  
  if(window.XMLHttpRequest) 
    xhr = new XMLHttpRequest();
  else if(window.ActiveXObject)
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  else
    return;
    
  obj.method = 'GET';
  obj.file = null;
  obj.async = false;
  obj.send = null;
  obj.out = 'txt';
  obj.timetoexec = 0;
  obj.onsucess = null;
  

  obj.start = function() {
    setTimeout(function () {
      obj.lunch();
    }
    ,obj.timetoexec);
  }
  obj.lunch = function() {
    xhr.open(obj.method, obj.file, obj.async);
    xhr.send(obj.send);
    
    if(xhr.readyState == 4) {
      if(xhr.status == 200) {
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