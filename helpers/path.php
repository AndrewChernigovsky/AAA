<?php
class setPaths
{
  public $baseDir;
  private $path;

  public function __construct($baseDir, $path)
  {
    if (strpos($baseDir, 'pages') !== false) {
      $this->baseDir = "./" . $path;
    } else {
      $this->baseDir = "./../" . $path;
    }
  }
}