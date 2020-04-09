<?php
/**
 * Created by Vitaliy 'O Korolev, vit@dev2b.ru at 09.04.2020 1:09
 */


namespace dev2b\instagram;
use dev2b\components\web\AssetBundle;

class InstagramAsset extends AssetBundle
{
    public $basePath = 'instagram.assets';

    public $css = [
        'instagram.css',
    ];

    public $js = [
        'instagram.js',
    ];

    public $dependsPackages = [
        'jquery',
        'slick',
    ];

    public function init()
    {
        //\Yii::app()->assetManager->forceCopy = true;
        \Yii::setPathOfAlias('instagram', dirname(__FILE__));
        parent::init();
    }
}