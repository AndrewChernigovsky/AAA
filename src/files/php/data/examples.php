<?php
include_once __DIR__ . '/../helpers/classes/setVariables.php';

class Examples
{
  public $examples;
  private $path;

  public function __construct()
  {

    $initPath = new SetVariables();
    $initPath->setVar();
    $this->path = $initPath->getPathFileURL();
    $examples = [
      [
        "image" => [
          "src" => $this->path . "/assets/images/portfolio/site-1/site-1-size.avif",
          "alt" => "сайт аквафильтры",
          "width" => 300,
          "height" => 500
        ],
        "title" => "Данил, Компания 'Аквалайв'",
        "desc" => "Хочу выразить вам огромное благодарность за проделанную работу, спасибо за вашу отзывчивость и терпение. Я конечно
    не знаю как другие заказчики, но я подозреваю, что я очень придирчивый клиент, поэтому спасибо, что сделали все
    как я хотел. Надеюсь на дальнейшее сотрудничество с вами!",
        "link" => $this->path . "/files/php/pages/portfolio/site-1.php"
      ],
      [
        "image" => [
          "src" => $this->path . "/assets/images/portfolio/site-2/site-2-size.avif",
          "alt" => "сайт, создание сайтов, продвижение сайтов",
          "width" => 300,
          "height" => 500
        ],
        "title" => "Рожков Олег Владимирович",
        "desc" => "Создание сайта с Андреем Андреевичем было легким и приятным процессом. Он быстро понял наши пожелания и предложил
    решения, которые сделали сайт функциональным и удобным. Андрей Андреевич действительно мастер своего дела —
    результат радует и нас, и наших клиентов!",
        "link" => $this->path . "/files/php/pages/portfolio/site-2.php"
      ],
      [
        "image" => [
          "src" => $this->path . "/assets/images/portfolio/site-3/site-3-size.avif",
          "alt" => "сайт, создание сайтов, продвижение сайтов",
          "width" => 300,
          "height" => 500
        ],
        "title" => "Александр Белошапкин",
        "desc" => "У нас приболел разработчик по фронтенду и нужно было сделать пару правок для сайта, я на тот момент учился в ШТМЛ
    Академии и моим наставником был Андрей Андреевич. Слово за слово и я решил обратится к нему за помощью по своей
    работе. Андрей справился с задачей в срок и помог нашей компании. Рекомендую его как специалиста.",
        "link" => $this->path . "/files/php/pages/portfolio/site-3.php"
      ],
      [
        "image" => [
          "src" => $this->path . "/assets/images/portfolio/site-4/site-4-size.avif",
          "alt" => "сайт, создание сайтов, продвижение сайтов",
          "width" => 300,
          "height" => 500
        ],
        "title" => "Пример сайта'",
        "desc" => "Пример того как может выглядеть ваш сайт",
        "link" => $this->path . "/files/php/pages/portfolio/site-4.php"
      ],
      [
        "image" => [
          "src" => $this->path . "/assets/images/portfolio/site-5/site-5-size.avif",
          "alt" => "сайт, создание сайтов, продвижение сайтов",
          "width" => 300,
          "height" => 500
        ],
        "title" => "Пример сайта'",
        "desc" => "Пример того как может выглядеть ваш сайт",
        "link" => $this->path . "/files/php/pages/portfolio/site-5.php"
      ]
    ];
    $this->examples = $examples;
  }
}

?>