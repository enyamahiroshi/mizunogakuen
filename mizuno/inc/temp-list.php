<li class="md-list01__item">
  <a href="<?php the_permalink() ?>">
    <?php
      $thumbnail_id = get_post_thumbnail_id();
      $eye_img = wp_get_attachment_image_src( $thumbnail_id, full, false);
    ?>

    <div class="md-list01__item__img" style="background-image:url(<?php print $eye_img[0]; ?>)"></div>

    <div class="md-list01__item__data">
      <div class="md-list01__item__title">
        <?php
        $categorys=get_the_category();
        $cate_count=0;
        foreach($categorys as $category){
          if($cate_count==0){
          print '<span>'.$category->name.'</span>';
          }else{
          print '<span>,'.$category->name.'</span>';
          }
          $cate_count++;
        }
      ?>
            <time datetime="<?php print get_the_date("Y-m-d") ?>"
        class="md-list01__item__time"><?php print get_the_date("Y.m") ?></time>
        <?php
           // print the_title();
          // if(mb_strlen(get_the_title(), 'UTF-8')>21){
          //   $title= mb_substr(get_the_title(), 0, 21, 'UTF-8');
          //   print $title.'…';
          // }else{
          //   print get_the_title();
          // }
        ?>

      </div>

    </div>
  </a>
</li>
