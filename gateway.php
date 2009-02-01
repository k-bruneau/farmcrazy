<?
include('include/utils.php');

if(!empty($_GET['action'])) {
	switch($_GET['action']) {
		case 'data_ferme' :
			echo'<table>';
			for($i=0;$i<10;$i++) {
				echo'<tr>';
				for($j=0;$j<10;$j++) {
					echo'<td class="case"></td>';
				}
				echo'</tr>';
			}
			echo'</table>';
		break;
	
		default:
			echo'Erreur : action inconue';
		break;
	}
}else{
	echo'Erreur : action is empty';
}
?>