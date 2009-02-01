function $(id) {
  return document.getElementById(id);
}

function $C(tag,class) {
  var TagName = document.getElementsByTagName(tag);
  var out = new Array();
  var j=0;
  
    for(var i=0;i < TagName.length; i++)  {
      var _class = " " + TagName[i].className + " ";
      if(_class.indexOf(" " + class + " ") != -1) {
        out[j++] = TagName[i];
      }
    }
  return out;
}

function verif_mail(chaine) {
  var maReg = new RegExp ( "^\\w[\\w+\.\-]*@[\\w\-]+\.\\w[\\w+\.\-]*\\w$", "gi" ) ;
  if(chaine.search( maReg ) == -1 ) return true;
}