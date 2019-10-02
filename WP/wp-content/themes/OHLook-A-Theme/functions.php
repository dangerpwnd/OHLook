<?php function index_wp_script(){
    wp_enqueue_script( 'index-index_wp_script', get_template_directory_uri() . '/assets/js/index.js', array('jquery'), true );
}

add_action( 'wp_enqueue_scripts', 'index_wp_script' );

?>