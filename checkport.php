<?php
$host = $_GET['host'];
$port = $_GET['port'];

$connection = @fsockopen($host, $port, $errno, $errstr, 5);

if (is_resource($connection))
{
    echo 'Open';
	fclose($connection);
}
else
{
    echo 'Closed';
}
?>