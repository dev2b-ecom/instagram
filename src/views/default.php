<?php
/* @var $this \dev2b\instagram\Widget */
?>

<div class="instagram">
    <div class="instagram__logo"></div>
    <div class="instagram-widget" data-name="<?=$this->username;?>" data-limit="<?=$this->limit?>"></div>
    <p class="instagram__follow">
        <a href="/x?https://instagram.com/<?=$this->username;?>" target="_blank" rel="nofollow"><i class="fa fa-instagram"></i> Подписаться</a>
    </p>
</div>

<?php Yii::app()->clientScript->beginScript(); ?>
<script>

</script>
<?php Yii::app()->clientScript->endScript(); ?>