<?
class Ferme extends Joueur {
	private $name_ferme;
	
	public function __construct() {
		$this->name_ferme = 'test';
	}
	
	public function view_ferme() {
		include('div/ferme.div');
	}
	
}
?>