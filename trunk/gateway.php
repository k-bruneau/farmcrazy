<?
include('include/utils.php');

if(!empty($_GET['action'])) {
  switch($_GET['action']) {
    case 'data_ferme' :
    $map = array(5,5);
    $bat_test = array(3,3);
      
      echo'<div id="ferme" onclick="drag(this.id);">';
      echo'<table>';
      for($i=0;$i<$map[1];$i++) {
        echo'<tr>';
        for($j=0;$j<$map[0];$j++) {
          if($i == $map[1]-1 OR $i == 0) 
            echo'<td background="img/herbe_tb.png"></td>';
          elseif($j == 0) 
            echo'<td background="img/herbe_l.png"></td>';
          elseif($j == $map[0]-1) 
            echo'<td background="img/herbe_r.png"></td>';
          elseif($bat_test[0] == $j AND $bat_test[1] == $i) 
            echo'<td background="img/bat.png"></td>';
          else
            echo'<td background="img/herbe.png"></td>';
        }
        echo'</tr>';
      }
      echo'</table></div>';
    break;
  
    default:
      echo'Erreur : action inconue';
    break;
  }
}else{
  echo'Erreur : action is empty';
}
?>