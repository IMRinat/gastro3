<?php

echo "<pre>";
echo "privet\n";

$session = curl_init("http://ya.ru");
echo $session."\n";

echo "\n";
print_r($_SERVER);
echo "\n";
print_r($_ENV);



print_r($_GET);
if($_GET["a"] === "") echo "a is an empty string\n";
if($_GET["a"] === false) echo "a is false\n";
if($_GET["a"] === null) echo "a is null\n";
if(isset($_GET["a"])) echo "a is set\n";
if(!empty($_GET["a"])) echo "a is not empty";

echo "</pre>";


?>