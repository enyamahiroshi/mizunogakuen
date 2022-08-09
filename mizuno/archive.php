<?php get_header(); ?>

<section class="archive-wrapper">
  <div class="layout-wrapper">
    <h2 class="title01">News</h2>
    <ul class="categorys_list">
      <li class="categorys_list__item"><a href="<?php print SITE_URL; ?>/list/">ALL</a></li>
      <?php
        $args = array(
            'order' => 'ASC'
        );

        $categorys= get_categories( $args );
        foreach($categorys as $category){
          if('uncategorized'!=$category->slug){
            if(single_term_title( '', false )==$category->name){
              print '<li class="categorys_list__item is-current"><a href="'. SITE_URL .'/category/'.$category->slug.'">'.$category->name.'</a></li> ' ;
            }else{
              print '<li class="categorys_list__item"><a href="'. SITE_URL .'/category/'.$category->slug.'">'.$category->name.'</a></li> ' ;
            }
          }
        }
      ?>
    </ul>

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
        wp_pagenavi();
      endif;
    ?>
  </div>
</section>

<?php get_footer(); ?>
<!-- /index.php -->
