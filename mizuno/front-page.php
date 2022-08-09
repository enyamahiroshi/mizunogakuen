<?php
/*
front-page.php
 */
?>
<?php get_header(); ?>

<?php
  $args = array(
    'post_type' => 'kvimg',
    'showposts' => 1000,
    'post_status' => 'publish'
  );
  $wp_query = new WP_Query($args);
  if ( $wp_query->have_posts() ) :
?>

<div class="main-slider__wrapper">
  <div class="main-slider_over js-slider-logo">
    <img src="<?php print TMP_URL ;?>/img/logo-blk.svg" alt="学校法人水野学園" width="350" height="125">
  </div>
  <div class="main-slider js-slick-slider js-slick-slider-pc u-hide-sp">
    <?php
      while ( $wp_query->have_posts() ) : $wp_query->the_post();
        $pc_slide = SCF::get('pc_image');
    if(!empty($pc_slide)){
        $eye_img_pc = wp_get_attachment_image_src( $pc_slide,'size3');

        $link= get_post_meta($post->ID, 'link')[0];
    if(!empty($link)){
      print '<a href="'.esc_url($link).'">';
    }
?>
    <div class="main-slider__item">
      <div class="main-slider__item__inner main-slider__item__inner--pc"
        style="background:url(<?php print $eye_img_pc[0] ;?>)"></div>
    </div>
    <?php
    if(!empty($link)){
      print '</a>';
    }
   }
  endwhile;
?>
  </div>

  <ul class="main-slider__nav">
    <li><a href="https://jewelry.ac.jp/jewelry">Jewelry</a></li>
    <li><a href="https://jewelry.ac.jp/shoes">Shoes</a></li>
    <li><a href="https://jewelry.ac.jp/bag">Bag</a></li>
    <li><a href="https://jewelry.ac.jp/watch">Watch</a></li>
    <li><a href="https://jewelry.ac.jp/bicycle">Bicycle</a></li>
    <li><a href="https://jewelry.ac.jp/sushi_washoku">Sushi<br>&amp; Washoku</a></li>
    <li><a href="https://jewelry.ac.jp/sakana">Sakana</a></li>
  </ul>

  <div class="main-slider js-slick-slider-sp u-hide-pc">
    <?php
      while ( $wp_query->have_posts() ) : $wp_query->the_post();
        $sp_slide = SCF::get('sp_image');
    if(!empty($sp_slide)){
        $eye_img_sp = wp_get_attachment_image_src( $sp_slide,'size2');
        $link= get_post_meta($post->ID, 'link')[0];
    if(!empty($link)){
      print '<a href="'.esc_url($link).'">';
    }
?>
    <div class="main-slider__item">
      <div class="main-slider__item__inner main-slider__item__inner--sp"
        style="background:url(<?php print $eye_img_sp[0] ;?>)"></div>
    </div>
    <?php
    if(!empty($link)){
      print '</a>';
    }
  }
  endwhile;
?>
  </div>

  <h1 class="main-header__titleSp">
    <img src="<?php print TMP_URL ;?>/img/logo_long.svg" alt="学校法人水野学園" width="150" height="27">
  </h1>
</div>
<?php
  endif;
  wp_reset_query();
?>

<section id="news">
  <div class="layout-wrapper layout-wrapper--top-news">
    <h2 class="title01">News</h2>
    <a href="<?php print SITE_URL; ?>/list" class="link-right u-hide-sp">VIEW ALL</a>
    <ul class="md-list01 md-list01--proper">
      <?php
          $args = array(
            'post_type' => 'post',
            // 'showposts' => 3,
            'post_status' => 'publish'
          );
          $wp_query = new WP_Query($args);
          if ( $wp_query->have_posts() ) :
            while ( $wp_query->have_posts() ) : $wp_query->the_post();
              get_template_part('inc/temp-list');
            endwhile;
            endif;
            wp_reset_query();
        ?>
    </ul>
    <a href="<?php print SITE_URL; ?>/list" class="link-right u-hide-pc">VIEW ALL</a>
  </div>
</section>

<section id="group">
  <div class="layout-wrapper  layout-wrapper--top-group">
    <h2 class="title01">Group</h2>
    <ul class="md-list02">
      <li class="md-list02__item">
        <a href="https://jewelry.ac.jp/">
          <img class="md-list02__item__img" src="<?php print TMP_URL ;?>/img/group/group01.svg" alt="">
          <div class="md-list02__item__title">学校法人 水野学園</div>
        </a>
      </li>
      <li class="md-list02__item">
        <a href="https://www.hikohiko.jp/">
          <img class="md-list02__item__img" src="<?php print TMP_URL ;?>/img/group/group02.svg" alt="">
          <div class="md-list02__item__title">ヒコ・みづのジュエリーカレッジ</div>
        </a>
      </li>
      <li class="md-list02__item">
        <a href="https://hiko-osaka.jp/">
          <img class="md-list02__item__img" src="<?php print TMP_URL ;?>/img/group/group03.svg" alt="">
          <div class="md-list02__item__title">ヒコ・みづのジュエリー<br class="u-hide-pc">カレッジ大阪</div>
        </a>
      </li>
      <li class="md-list02__item">
        <a href="https://tcds.jp/">
          <img class="md-list02__item__img" src="<?php print TMP_URL ;?>/img/group/group04.svg" alt="">
          <div class="md-list02__item__title">東京サイクルデザイン<br class="u-hide-pc">専門学校</div>
        </a>
      </li>
      <li class="md-list02__item">
        <a href="https://www.sushi-tokyo.jp/">
          <img class="md-list02__item__img" src="<?php print TMP_URL ;?>/img/group/group05.svg" alt="">
          <div class="md-list02__item__title">東京すし和食調理専門学校</div>
        </a>
      </li>
      <li class="md-list02__item">
        <a href="https://hikohikocc.jp/">
          <img class="md-list02__item__img" src="<?php print TMP_URL ;?>/img/group/group06.svg" alt="">
          <div class="md-list02__item__title">ヒコ・みづのジュエリー<br class="u-hide-pc">カレッジ<br class="u-hide-sp">キャリアスクール</div>
        </a>
      </li>
      <li class="md-list02__item">
        <a href="https://sakana-n.jp">
          <img class="md-list02__item__img" src="<?php print TMP_URL ;?>/img/group/group10.png" alt="" width="212">
          <div class="md-list02__item__title">日本さかな専門学校<br class="u-hide-sp">（2023年4月開校予定・認可手続中）</div>
        </a>
      </li>
    </ul>
  </div>
  <div class="group-gray-back">
    <div class="layout-wrapper layout-wrapper--bottom-group">
      <ul class="md-list02">
        <li class="md-list02__item">
          <a href="https://holeinthewall.tokyo/">
            <img class="md-list02__item__img" src="<?php print TMP_URL ;?>/img/group/group07.svg" alt="">
            <div class="md-list02__item__title">学校ギャラリー<br>ホール・イン・ザ・ウォール</div>
          </a>
        </li>
        <li class="md-list02__item">
          <a href="https://made-in-hiko.jp/">
            <img class="md-list02__item__img" src="<?php print TMP_URL ;?>/img/group/group08.svg" alt="">
            <div class="md-list02__item__title">在校生インタビューサイト<br>MADE in Hiko</div>
          </a>
        </li>
        <li class="md-list02__item">
          <a href="https://www.youtube.com/channel/UCu8YwoM3MRBGZkHGpCLQ4fQ">
            <img class="md-list02__item__img" src="<?php print TMP_URL ;?>/img/group/group11.png" alt="" width="212">
            <div class="md-list02__item__title">学校法人 水野学園 動画サイト<br>YouTube</div>
          </a>
        </li>
        <li class="md-list02__item">
          <a href="https://www.hikohiko.jp/files/grad_brochure/tokyo/jewelry_jp">
            <img class="md-list02__item__img" src="<?php print TMP_URL ;?>/img/group/bnr-hiko-gworks.png" alt="" width="212">
            <div class="md-list02__item__title">ヒコ・みづのジュエリーカレッジ<br>卒業制作作品集 デジタルパンフレット</div>
          </a>
        </li>
        <li class="md-list02__item">
          <a href="https://tcds.jp/files/grad_brochure/bicycle_jp">
            <img class="md-list02__item__img" src="<?php print TMP_URL ;?>/img/group/bnr-tcd-gworks.png" alt="" width="212">
            <div class="md-list02__item__title">東京サイクルデザイン専門学校<br>卒業制作作品集 デジタルパンフレット</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>

<?php get_footer(); ?>
<!-- /index.php -->
