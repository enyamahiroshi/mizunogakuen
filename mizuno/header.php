<?php
/* header.php *
　すべてのページにおいて共通で読み込むヘッダーテンプレート。
 */

include(TEMPLATEPATH. '/inc/constants.php');

?>
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="format-detection" content="telephone=no">
  <meta name="viewport" content="width=device-width">

  <?php wp_head(); ?>
</head>

<body <?php body_class('is-menu'); ?>>
  <div class="page-wrapper">
    <!-- <header class="main-header js-header">
      <a href="<?php print SITE_URL; ?>">
        <h1 class="main-header__title">
          <img src="<?php print TMP_URL ;?>/img/logo.svg" alt="水野学園" width="100">
        </h1>
      </a>
    </header> -->

    <div class="content-wrapper">
      <div class="main-header__switch js-menu-switch"></div>
      <div class="side-bar js-side-bar">

        <nav class="side-bar-menu-wrapper">
          <h1 class="main-header__title">
            <a href="<?php print SITE_URL; ?>">
              <img src="<?php print TMP_URL ;?>/img/logo_long_pc.svg" alt="学校法人水野学園" width="150" height="27">
            </a>
          </h1>

          <ul class="side-menu side-menu01">
            <li><a href="<?php print SITE_URL; ?>">Top</a></li>
            <li><a class="js-scroll" href="<?php print SITE_URL; ?>#news">News</a></li>
            <li><a class="js-scroll" href="<?php print SITE_URL; ?>#group">Group</a></li>
          </ul>
          <ul class=" side-menu side-menu02">
            <li>
              <ul class="side-menu02__inner-list">
                <li><a href="https://jewelry.ac.jp/jewelry">Jewelry</a></li>
                <li><a href="https://jewelry.ac.jp/shoes">Shoes</a></li>
                <li><a href="https://jewelry.ac.jp/bag">Bag</a></li>
                <li><a href="https://jewelry.ac.jp/watch">Watch</a></li>
                <li><a href="https://jewelry.ac.jp/bicycle">Bicycle</a></li>
                <li><a href="https://jewelry.ac.jp/sushi_washoku">Sushi &amp; Washoku</a></li>
                <li><a href="https://jewelry.ac.jp/sakana">Sakana</a></li>
              </ul>
            </li>
            <li class="side-menu__item-border"><a href="https://jewelry.ac.jp/groupschools">
                <div class="side-menu02__inner">グループ校一覧</div>
              </a></li>
            <li class="side-menu__item-border"><a href="https://jewelry.ac.jp/about">
                <div class="side-menu02__inner">水野学園とは</div>
              </a></li>
            <li class="side-menu__item-border"><a href="https://jewelry.ac.jp/for_company">
                <div class="side-menu02__inner">企業の皆さまへ</div>
              </a></li>
          </ul>
        </nav>
      </div>
      <div class="main-content">
