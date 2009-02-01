<? 
if ($PHPSESSID)session_start($PHPSESSID);else session_start(); 
if($_GET['a'] == "logout" || $_POST['a'] == "login") header('Location: index.php');
include('include/header.html');
?>
<div id="left_pan">
<? include('div/left_pan.div'); ?>
</div>
<?
include('include/pre_core.inc.php');
//INITIALISATON DE LA CLASS JOUEUR
$user = new Joueur();
//VERIF ETAT JOUEUR
if($_SESSION['user'] == 1) {
	//SWITCH ACTION NIVEAU 1
	switch($_GET['a']) {
		case "logout":
			$user->logout();
		break;
		case "account":
			$user->account();
		break;
		case "ferme":
			Ferme::view_ferme();
		break;
		default:
			$user->lobby();
		break;
	}
	//FIN SWITCH
}elseif(!empty($_POST['login']) && !empty($_POST['pass']) && $_POST['a'] == 'login') {
	$user->login($_POST['login'],$_POST['pass']);//LOGIN 
}elseif(!empty($_POST['login']) && !empty($_POST['pass']) && !empty($_POST['email']) && $_POST['a'] == 'logon') {
	$user->logon($_POST['login'],$_POST['pass'],$_POST['email']);//LOGON
}else{
	//SWITCH ACTION NIVEAU 0
	switch($_GET['a']) {
		case "logon":
			include('div/logon.div');
		break;
		default:
			include('div/login.div');
		break;
	}
	//FIN SWITCH
}
include('include/footer.html');
?>