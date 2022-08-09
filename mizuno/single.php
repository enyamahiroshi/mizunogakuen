<?php
/*
single.php
 */
?>
<?php get_header(); ?>

<div class="single-wrapper">
  <div class="layout-wrapper">
    <article class="single-wrapper__inner">

      <h1 class="title02">News</h1>
      <ul class="single-wrapper__categorys">
        <?php
          $categorys=get_the_category();
          foreach($categorys as $category){
            print '<li class="single-wrapper__categorys__item">'.$category->name.'</li>';
          }
      ?>
      </ul>
      <time class="single-wrapper__time"
        datetime="<?php print get_the_date(" Y-m-d ") ?>"><?php print get_the_date("Y.m") ?></time>

      <h2 class="blog-title"><?php the_title(); ?></h2>

      <div class="blog-body">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <?php the_content(); ?>
        <?php endwhile; endif; ?>
      </div>
    </article>
  </div>

  <aside class="other-wrapper">
    <div class="layout-wrapper">

      <h2 class="title03 title03--other">Other News</h2>

      <ul class="md-list01 md-list01--single">
      <?php
          $args = array(
            'post_type' => 'post',
            'showposts' => 4,
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
    </div>
  </aside>
</div>

<?php get_footer(); ?>
<!-- /index.php -->
