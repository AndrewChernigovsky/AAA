<?php
class Head
{
  private $title;
  private $styles;
  private $scripts;

  public function __construct(string $title = null, array $styles = [], array $scripts = [])
  {
    $this->title = $title;
    $this->styles = $styles;
    $this->scripts = $scripts;
  }

  public function setHead(): string
  {
    $title = $this->title ?? 'ААА Академия Андрея Андреевича Изосимова, создание и продвижение сайтов';

    $headContent = <<<HTML
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>$title</title>
            <link rel='stylesheet' href='/assets/libs/libs.css?v=1.0.0'>
            <link rel='stylesheet' href='/css/style.css?v=1.0.0'>
            <script src='https://www.google.com/recaptcha/api.js' async defer></script>
            <script src='/assets/libs/libs.js?v=1.0.0' defer type='module'></script>
    HTML;

    foreach ($this->styles as $style) {
      $headContent .= "<link rel='stylesheet' href='$style'>";
    }

    foreach ($this->scripts as $script) {
      $headContent .= "<script src='$script?v=1.0.0' defer type='module'></script>\n";
    }

    $headContent .= $this->setYandexMetrika();

    return $headContent;
  }

  public function setYandexMetrika()
  {
    return <<<HTML
    <!-- Yandex.Metrika counter -->
    <script type='text/javascript'>
       (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
       m[i].l=1*new Date();
       for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
       k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
       (window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

       ym(99037128, 'init', {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
       });
    </script>
    <noscript><div><img src='https://mc.yandex.ru/watch/99037128' style='position:absolute; left:-9999px;' alt='' /></div></noscript>
    <!-- /Yandex.Metrika counter -->
    HTML;
  }
}
?>