<?php
namespace dev2b\instagram;

class Widget extends \CWidget
{
    /**
     * @var string Логин в инстаграм
     */
    public $username = 'saiprex';

    /**
     * @var int Количество постов
     */
    public $limit = 8;

    public function run()
    {
        InstagramAsset::register();
        $this->render('default');
    }
}
