<?php
/* functions.php *
	テーマにさまざまな付加機能を設定するためのファイル。

 */

/* -------------------------------------------------------------
//読み込み
// ------------------------------------------------------------*/
function import_header_scripts() {
     wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css');
     wp_enqueue_style( 'slick', get_template_directory_uri() . '/slick.css');
    //  wp_enqueue_style( 'noto', 'https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap');
     wp_enqueue_style( 'robot', 'https://fonts.googleapis.com/css?family=Oswald|Roboto&display=swap');

     wp_enqueue_script( 'jquery' );
}
add_action( 'wp_enqueue_scripts', 'import_header_scripts' );

/* -------------------------------------------------------------
//JSファイル追加の関数
// ------------------------------------------------------------*/
function my_load_widget_scripts() {
     wp_enqueue_script( 'main', get_template_directory_uri() . '/js/main.js', true, array());
     wp_enqueue_script( 'pic', get_template_directory_uri() . '/js/picturefill.js', true, array());
    //  wp_enqueue_script( 'icon', get_template_directory_uri() . '/js/fontawesome-all.min.js', true, array());
     wp_enqueue_script( 'slick', get_template_directory_uri() . '/js/slick.min.js', true, array());
    //  wp_enqueue_script( 'cbox', get_template_directory_uri() . '/js/jquery.colorbox-min.js', true, array());
    //  wp_enqueue_script( 'easing', get_template_directory_uri() . '/js/jquery.easing.1.3.js', true, array());
}
// wp_footerに処理を登録
add_action('wp_footer', 'my_load_widget_scripts');

/* -------------------------------------------------------------
//ｐタグ削除
// ------------------------------------------------------------*/

// function disable_page_wpautop() {
// 	if ( is_page() ) remove_filter( 'the_content', 'wpautop' );
// }
// add_action( 'wp', 'disable_page_wpautop' );


/* -------------------------------------------------------------
//カスタムメニュー
// ------------------------------------------------------------*/
//register_nav_menu('top_nav','トップページナビゲーション');
//register_nav_menu('footer_nav','フッターナビゲーション');
/* -------------------------------------------------------------
//画像の設定
// ------------------------------------------------------------*/
add_theme_support('post-thumbnails');
//アイキャッチを有効にする
// set_post_thumbnail_size(374, 230,true);
//アイキャッチの基本サイズ設定
  set_post_thumbnail_size(460, 340, false) ;

  add_image_size('size1',1185, 530, true);
  add_image_size('size2',750, 820, true);
  add_image_size('size3',1000, 515, true);
// add_image_size('size2',500, 330, true);
// add_image_size('size2',488, 302, true);
// add_image_size('size3',750, 480, true);


/* -------------------------------------------------------------
// タイトルタグ
// ------------------------------------------------------------*/
function nendebcom_theme_slug_setup() {
   add_theme_support( 'title-tag' );
}
add_action( 'after_setup_theme', 'nendebcom_theme_slug_setup' );

/* -------------------------------------------------------------
// 投稿の名前変更
// ------------------------------------------------------------*/
// function change_post_menu_label() {
//  global $menu;
//  global $submenu;
//  $menu[5][0] = 'お知らせ';
//  $submenu['edit.php'][5][0] = 'お知らせ一覧';
//  $submenu['edit.php'][10][0] = '新しいお知らせ';
//  $submenu['edit.php'][16][0] = 'タグ';
//  //echo ";
// }
// function change_post_object_label() {
//  global $wp_post_types;
//  $labels = &$wp_post_types['post']->labels;
//  $labels->name = 'お知らせ';
//  $labels->singular_name = 'お知らせ';
//  $labels->add_new = _x('追加', 'お知らせ');
//  $labels->add_new_item = 'お知らせの新規追加';
//  $labels->edit_item = 'お知らせの編集';
//  $labels->new_item = '新規お知らせ';
//  $labels->view_item = 'お知らせを表示';
//  $labels->search_items = 'お知らせを検索';
//  $labels->not_found = '記事が見つかりませんでした';
//  $labels->not_found_in_trash = 'ゴミ箱に記事は見つかりませんでした';
// }
// add_action( 'init', 'change_post_object_label' );
// add_action( 'admin_menu', 'change_post_menu_label' );

/* -------------------------------------------------------------
// カスタムポストタイプ
// ------------------------------------------------------------*/
function event_custom_post_type(){
  $labels = array(
    'name' => 'スライダー画像',
    'singular_name' => 'kvimg',
    'add_new' => '新規追加',
    'add_new_item' => '新規項目追加',
    'edit_item' => '項目を編集',
    'new_item' => '新規項目',
    'view_item' => '項目を表示',
    'search_items' => '項目検索',
    'not_found' =>  '通信が見つかりません',
    'not_found_in_trash' => 'ゴミ箱にデータはありません',
    'parent_item_colon' => '',
  );
  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'query_var' => true,
    'rewrite' => true,
    'map_meta_cap'    => true,
    'hierarchical' => false,
    'has_archive' => true,
    'menu_position' => 5,
    'show_in_rest' => true,
    'supports' => array('title','author'),
  );
  register_post_type('kvimg',$args);


//   $labels = array(
//     'name' => 'プロジェクト一覧',
//     'singular_name' => 'project',
//     'add_new' => '新規追加',
//     'add_new_item' => '新規項目追加',
//     'edit_item' => '項目を編集',
//     'new_item' => '新規項目',
//     'view_item' => '項目を表示',
//     'search_items' => '項目検索',
//     'not_found' =>  '通信が見つかりません',
//     'not_found_in_trash' => 'ゴミ箱にデータはありません',
//     'parent_item_colon' => '',
//   );
//   $args = array(
//     'labels' => $labels,
//     'public' => true,
//     'publicly_queryable' => true,
//     'show_ui' => true,
//     'query_var' => true,
//     'rewrite' => true,
//     'map_meta_cap'    => true,
//     'hierarchical' => false,
//     'has_archive' => true,
//     'menu_position' => 5,
//     'show_in_rest' => true,
//     'supports' => array('title','editor','thumbnail','author'),
//   );
//   register_post_type('project',$args);

}
add_action('init', 'event_custom_post_type');



/* -------------------------------------------------------------
// ブロックエディタ
// ------------------------------------------------------------*/

add_filter( 'allowed_block_types', 'custom_allowed_block_types' );
function custom_allowed_block_types( $allowed_block_types ) {
  $allowed_block_types = array(
    // 一般ブロック
    'core/paragraph', // 段落
    'core/heading', // 見出し
    'core/image', // 画像
    'core/quote', // 引用
    'core/gallery', // ギャラリー
    // 'core/list', // リスト
    // 'core/audio', // 音声
    // 'core/cover', // カバー
    // 'core/file', // ファイル
    // 'core/video', // 動画

    // フォーマット
    'core/code', // ソースコード
    'core/freeform', // クラシック
    'core/html', // カスタムHTML
    // 'core/preformatted', // 整形済み
    // 'core/pullquote', // プルクオート
    'core/table', // テーブル
    // 'core/verse', // 詩

    // レイアウト要素
    // 'core/button', // ボタン
    // 'core/columns', // カラム
    // 'core/media-text', // メディアと文章
    // 'core/more', // 続きを読む
    // 'core/nextpage', // 改ページ
    // 'core/separator', // 区切り
    // 'core/spacer', // スペーサー

    // ウィジェット
    // 'core/shortcode', // ショートコード
    // 'core/archives', // アーカイブ
    // 'core/categories', // カテゴリー
    // 'core/latest-comments', // 最新のコメント
    // 'core/latest-posts', // 最新の記事

    // 埋め込み
    // 'core/embed', // 埋め込み
    // 'core-embed/twitter', // Twitter
    // 'core-embed/youtube', // YouTube
    // 'core-embed/facebook', // Facebook
    // 'core-embed/instagram', // Instagram
    // 'core-embed/wordpress', // WordPress
    // 'core-embed/soundcloud', // SoundCloud
    // 'core-embed/spotify', // Spotify
    // 'core-embed/flickr', // Flickr
    // 'core-embed/vimeo', // Viemo
    // 'core-embed/animoto', // Animoto
    // 'core-embed/cloudup', // Cloudup
    // 'core-embed/collegehumor', // CollegeHumor
    // 'core-embed/dailymotion', // Dailymotion
    // 'core-embed/funnyordie', // Funny or Die
    // 'core-embed/hulu', // Hulu
    // 'core-embed/imgur', // Imgur
    // 'core-embed/issuu', // Issuu
    // 'core-embed/kickstarter', // Kickstarter
    // 'core-embed/meetup-com', // Meetup.com
    // 'core-embed/mixcloud', // Mixcloud
    // 'core-embed/photobucket', // Photobucket
    // 'core-embed/polldaddy', // Polldaddy
    // 'core-embed/reddit', // Reddit
    // 'core-embed/reverbnation', // ReverbNation
    // 'core-embed/screencast', // Screencast
    // 'core-embed/scribd', // Scribd
    // 'core-embed/slideshare', // Slideshare
    // 'core-embed/smugmug', // SmugMug
    // 'core-embed/speaker-deck', // Speaker Deck
    // 'core-embed/ted', // TED
    // 'core-embed/tumblr', // Tumblr
    // 'core-embed/videopress', // VideoPress
    // 'core-embed/wordpress-tv', // WordPress.tv
  );
  return $allowed_block_types;
}
