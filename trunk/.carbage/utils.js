function $(id) {
	return document.getElementById(id);
}

function $C(tag,class) {
// A FINIR
	var TagName = document.getElementsByTagName(tag);
	var out = new Array();
	var j=0;
	
		for(var i=0;i < TagName.length; i++)	{
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

//Created by Genosite 'Phedrik Benjabria'
//--------------------------------------
//Version 1.0
//--------------------------------------
//is ok with firefox and internet explorer
//______________________________________
function edit(id)
{
	var activate = false;
	
	this.save = function()
	{
		var val_ch_edit = $('bt_save').previousSibling.value;
		
		$(id).innerHTML = val_ch_edit;
		
		activate = false;
	}
	if(activate == false)
	{
		activate = true;
		var val = $(id).firstChild.data;
		
		$(id).innerHTML = '<form><textarea>'+ val +'</textarea><input id="bt_save" type="button" value="Enregistrer"></form>';
		$('bt_save').onclick = this.save
	}
}

window.onmousedown = function () {
	var drag_class = $C("div","drag");
	
	for(el in drag_class){
		drag_class[el].onmousedown = function(e) {
		var x = parseInt($('1').style.left);
		var y = parseInt($('1').style.top);
		posX = e.pageX - x;
		posY = e.pageY - y;
		$('1').style.opacity = '0.5';
			window.onmousemove = function(e) {
				var x = parseInt($('1').style.left);
				var y = parseInt($('1').style.top);
				
				$('1').style.top = (e.pageY-posY)+'px';
				$('1').style.left = (e.pageX-posX)+'px';
			}
		}
	drag_class[el].onmouseup = function() {
		delete window.onmousemove;
		$('1').style.opacity = '1';
	}
}}

/* drag = function (id) {
	$(id).onmousedown = function(e) {
		var x = parseInt($(id).style.left);
		var y = parseInt($(id).style.top);
		posX = e.pageX - x;
		posY = e.pageY - y;
		$(id).style.opacity = '0.5';
			window.onmousemove = function(e) {
				var x = parseInt($(id).style.left);
				var y = parseInt($(id).style.top);
			
				$(id).style.position = 'absolute';
				$(id).style.top = (e.pageY-posY)+'px';
				$(id).style.left = (e.pageX-posX)+'px';
			}
		}
	$(id).onmouseup = function() {
		delete window.onmousemove;
		$(id).style.opacity = '1';
	}
} */

function matrice(x,y) {
	var matrice = new Array();
	for(var i=0; i<=x; i++) {
		matrice[i] = new Array();
		for(var j=0; j<=y; j++) {
			matrice[i][j] = null;
		}
	}
	return matrice;
}