<?php


class Database {
public $server;
public $user;
public $pass;
public $name;
public $data;

/**
 * __construct
 *
 * @param  mixed $server
 * @param  mixed $user
 * @param  mixed $pass
 * @param  mixed $name
 * @return void
 */
public function __construct($server, $user, $pass, $name)
{
    $this->server = $server;
    $this->user = $user;
    $this->pass = $pass;
    $this->name = $name;
}
/**
 * connect
 * Začne spojení s databízí
 * @return object
 */
public function connect(): object
{
    $this->data= mysqli_connect($this->server, $this->user, $this->pass,  $this->name);
    if ($this->data == NULL){
        die;
    }
    return $this->data;
}
/**
 * toJson
 * Změní určitou databázovou tabulku na Json file
 * 
 * @param  mixed $filename
 * @param  mixed $tablename
 * @return Json file
 */
public function toJson(string $tablename)
{
    $h = mysqli_query($this->data, 'SELECT * FROM '. $tablename);
    $h = mysqli_fetch_all($h, MYSQLI_ASSOC);
    return json_encode($h);
}
/**
 * setData
 *
 * @param  mixed $data
 * @return void
 */
public function setData($data){
    $this->data = $data;
} 
 /**
  * closeDatabase
  * Ukončí spojení s databází
  * @return void
  */
 public function closeDatabase(){
     return mysqli_close($this->data);
 }

}
$a = new Database('127.0.0.1', 'root','', 'sklad');
$a->setdata("data");
$a->connect();
echo $a->toJson("zbozi");
$a->closeDatabase();