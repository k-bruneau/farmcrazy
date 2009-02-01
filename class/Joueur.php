<?php
class Joueur {
	private $idJoueur;
	private $login;
	private $pass;
	private $email;
	private $avatar;
	private $Tocreate;
	
	function __tostring() {
		return "Class Joueur.<br/>";
	}
	
	public function __construct() {
			if($_SESSION['user'] == 1) {
				$this->idJoueur = $_SESSION['idJoueur'];
				$this->login = $_SESSION['login'];
				$this->pass = $_SESSION['pass'];
				$this->mail = $_SESSION['mail'];
				$this->avatar = $_SESSION['avatar'];
				$this->Tocreate = $_SESSION['Tocreate'];
			}else{
				$_SESSION['user'] = 0;
			}
	}
	
	public function logon ($login ,$pass,$email,$avatar = 2142,$Tocreate = 'CURRENT_TIMESTAMP') {
		if($_SESSION['user'] != 1) {
			bdd();
			$sql = "INSERT INTO `Joueurs` (`idJoueurs`, `login`, `pass`, `mail`, `avatar`, `Tocreate`) VALUES (NULL, '".secure($login)."', '".secure($pass)."', '".secure($mail)."', ".secure($avatar).", ".$Tocreate.");";
			$req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error());
			mysql_close();
			echo 'Inscription avec succes.<br/>';
		}
	}
	
	public function login ($login,$pass) {
		if($_SESSION['user'] != 1) {
			bdd();
			$sql = "SELECT * FROM Joueurs WHERE login = '".secure($login)."'";
			$req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error());
			mysql_close();
		
			$data = mysql_fetch_assoc($req);
			if($data['pass'] == $pass) {
				$_SESSION['user'] = 1;
				foreach ($data as $key => $value)
					$_SESSION[$key] = $value;
				self::lobby();
			}else{ 
				echo "Mauvais Mot de passe ou login.<br/>";
			}
		}
	}
	
	public function logout () {
		$_SESSION = array(0); 
		session_destroy();
	}
	
	public function account() {
		if($_SESSION['user'] == 1) {
			include('div/account.div');
		}
	}

	public function lobby () {
		if($_SESSION['user'] == 1) {
			include('div/lobby.div');
		}
	}
}
?>