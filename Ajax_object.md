# Method & Propriete #

method = 'POST' OR 'GET' DEFAULT : 'GET'<br>
file = void OBLIGATOIRE<br>
async = true OR false DEFAULT : false<br>
send = void DEFAULT : null<br>
out = 'TXT' OR 'XML' DEFAULT : 'TXT'<br>
timetoexec = temp pour executer la requette DEFAULT 0<br>

onsucess = FUNCTION DE RETOUR en cas de réussite<br>
onloading = FONCTION DE CHARGEMENT<br>
start() = methode pour lancer lexecution de la requette<br>


<h1>Exemple</h1>

<h2>1</h2>
req = new Ajax();<br>
req.file = 'index.php';<br>
req.timetoexec = 1000;<br>
req.start();<br>

<h2>2</h2>
req = new Ajax();<br>
req.file = 'index.php';<br>
req.out = 'XML';<br>
req.async = true;<br>
req.start();<br>

<h2>3</h2>
req = new Ajax();<br>
req.file = 'index.php';<br>
req.timetoexec = 1000;<br>
req.onsucess = function (callback) {<br>
<blockquote>alert(callback);<br>
}<br>
req.start();<br></blockquote>

<h2>4</h2>
req = new Ajax();<br>
req.file = 'index.php';<br>
req.timetoexec = 1000;<br>
req.onloading = function () {<br>
<blockquote>alert('loading');<br>
}<br>
req.onsucess = function (callback) {<br>
alert(callback);<br>
}<br>
req.start();<br>