<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Data</title>
</head>
/<?
if(isset($_POST['DistName'])){
    $del = "\	";
    $data[1] = $_POST['subject1'];
    $data[2] = $_POST['DistNumber'];
    $data[3] = $_POST['Period10'];
    $data[4] = $_POST['Period11'];
    $data[5] = $_POST['Period12'];
    $file = fopen("data.csv", "a");
    $data = "\\r\
".implode($del, $data);
    fwrite($file, $data);
    fclose($file);
    echo "The data has been added successfully";
}else{
    header("location: form.php");
}
?>
<body>
</body>
</html>