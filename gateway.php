<?
include('include/utils.php');

if(!empty($_GET['action'])) {
  switch($_GET['action']) {
    case 'data_ferme' :
    $x = 10;
    $y = 10;
    $bat_test = array(3,3);
    
      echo'<div id="ferme"><table>';
      for($i=0;$i<$y;$i++) {
        echo'<tr>';
        for($j=0;$j<$x;$j++) {
          if($i == $y-1 OR $i == 0) 
            echo'<td background="img/herbe_tb.png"></td>';
          elseif($j == 0) 
            echo'<td background="img/herbe_l.png"></td>';
          elseif($j == $x-1) 
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