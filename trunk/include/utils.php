<?
function bdd() {
  mysql_connect("localhost", "dokan", "dokan");
  mysql_select_db("dokan");
}
function secure($varpost) {
   $out = null;
   $out = addslashes(htmlentities($varpost));
   return($out);
}
?>