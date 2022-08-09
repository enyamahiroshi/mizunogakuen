<?php
/*
home.php
 */
?>
<?php get_header(); ?>

<section class="archive-wrapper">
  <div class="layout-wrapper">
    <h2 class="title01">News</h2>
    <ul class="categorys_list">
      <li class="categorys_list__item is-current"><a href="<?php print SITE_URL; ?>/list/">ALL</a></li>
      <?php
        $args = array(
            'order' => 'ASC'
        );

        $categorys= get_categories( $args );
        foreach($categorys as $category){
          if('uncategorized'!=$category->slug){
            print '<li class="categorys_list__item"><a href="'. SITE_URL .'/category/'.$category->slug.'">'.$category->name.'</a></li> ' ;
          }
        }
?>
    </ul>

    <?php
          $paged = get_query_var('paged') ? get_query_var('paged') : 1;
          $args = array(
            'paged' => $paged ,
            'post_type' => 'post',
            'post_status' => 'publish',
            'ignore_sticky_posts'=>true,
          );
          $wp_query = new WP_Query($args);
          ?>

    <ul class="md-list01 md-list01--simple">
      <?php
          if ( $wp_query->have_posts() ) :
            while ( $wp_query->have_posts() ) : $wp_query->the_post();
              get_template_part('inc/temp-list');
            endwhile;
            endif;
        ?>
    </ul>

    <?php
      if(function_exists('wp_pagenavi')):
        wp_pagenavi();    //wp_pagenavi()の呼び出し
      endif;
      wp_reset_postdata();
    ?>
  </div>
</section>

<?php get_footer(); ?>
<!-- /index.php -->
