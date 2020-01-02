<?php 

// Wordpress settings

@ini_set( 'upload_max_size', '256M' );


// Adding custom css/js
function ohlook_scripts(){

	$rand = rand(1,9999999);

    wp_enqueue_style( 'style', get_stylesheet_uri() );

    wp_enqueue_style( 'index', '/wp-content/themes/ohlook-a-theme/assets/css/index.css', NULL, microtime());

    wp_enqueue_style( 'about_css', '/wp-content/themes/ohlook-a-theme/assets/css/about.css', '', $rand);

	wp_enqueue_style( 'auditions_css', '/wp-content/themes/ohlook-a-theme/assets/css/auditions.css', NULL, microtime());
	
	wp_enqueue_style( 'awards_css', '/wp-content/themes/ohlook-a-theme/assets/css/awards.css', '', $rand);

	wp_enqueue_style( 'class_css', '/wp-content/themes/ohlook-a-theme/assets/css/class.css', '', $rand);

	wp_enqueue_style( 'contact_css', '/wp-content/themes/ohlook-a-theme/assets/css/contact.css', '', $rand);

	wp_enqueue_style( 'donate_css', '/wp-content/themes/ohlook-a-theme/assets/css/donate.css', '', $rand);

	wp_enqueue_style( 'grad_css', '/wp-content/themes/ohlook-a-theme/assets/css/grads.css', '', $rand);

	wp_enqueue_style( 'latenight_css', '/wp-content/themes/ohlook-a-theme/assets/css/latenight.css', '', $rand);

	wp_enqueue_style( 'masterclass_css', '/wp-content/themes/ohlook-a-theme/assets/css/masterclass.css', '', $rand);

	wp_enqueue_style( 'party_css', '/wp-content/themes/ohlook-a-theme/assets/css/party.css', '', $rand);

	wp_enqueue_style( 'prod_css', '/wp-content/themes/ohlook-a-theme/assets/css/prod.css', '', $rand);

	wp_enqueue_style( 'purchase_css', '/wp-content/themes/ohlook-a-theme/assets/css/purchase.css', '', $rand);

	wp_enqueue_style( 'sponsor_css', '/wp-content/themes/ohlook-a-theme/assets/css/sponsor.css', '', $rand);

    wp_enqueue_style( 'GFonts_Lato', 'https://fonts.googleapis.com/css?family=Lato&display=swap' );

    wp_enqueue_script( 'jquery' );

    wp_enqueue_script( 'nav', '/wp-content/themes/ohlook-a-theme/assets/js/nav.js');

    // microtime() should only be used in development to disable caching, true is setting javascript to footer rather than header

    wp_enqueue_script( 'index_js', '/wp-content/themes/ohlook-a-theme/assets/js/index.js', NULL, microtime(), true );

	wp_enqueue_script( 'about_js', '/wp-content/themes/ohlook-a-theme/assets/js/about.js', NULL, microtime(), true );
	
	wp_enqueue_script( 'awards_js', '/wp-content/themes/ohlook-a-theme/assets/js/awards.js', NULL, microtime(), true );

	wp_enqueue_script( 'class_js', '/wp-content/themes/ohlook-a-theme/assets/js/class.js', NULL, microtime(), true );

	wp_enqueue_script( 'contact_js', '/wp-content/themes/ohlook-a-theme/assets/js/contact.js', NULL, microtime(), true );

	wp_enqueue_script( 'prod_js', '/wp-content/themes/ohlook-a-theme/assets/js/prod.js', NULL, microtime(), true );

	wp_enqueue_script( 'grad_js', '/wp-content/themes/ohlook-a-theme/assets/js/grads.js', NULL, microtime(), true );

	wp_enqueue_script( 'party_js', '/wp-content/themes/ohlook-a-theme/assets/js/party.js', NULL, microtime(), true );

	wp_enqueue_script( 'modal_js', '/wp-content/themes/ohlook-a-theme/assets/js/modal.js', NULL, microtime(), true );

	wp_enqueue_script( 'TweenMax', '/wp-content/themes/ohlook-a-theme/assets/js/greensock/TweenMax.min.js');
	
	wp_enqueue_script( 'ScrollMagic', '/wp-content/themes/ohlook-a-theme/assets/js/scrollmagic/scrollmagic.js');

    wp_enqueue_script( 'Font_Awesome', 'https://kit.fontawesome.com/0ef99a5ae8.js');

}

add_action('wp_enqueue_scripts','ohlook_scripts');

// Flush Rewrite Rules
add_action('after_switch_theme', 'flush_rewrite_rules');

// Adding Wordpress Features
function ohlook_features(){
	register_nav_menu('footerMenu1', 'footer menu location');
	register_nav_menu('footerMenu2', 'footer menu location2');
    add_theme_support('title tag');
}

add_action('after_setup_theme', 'ohlook_features');

// Productions Post Type

function ohlook_custom_post_production() {
	register_post_type('production',
	array(
		'rewrite' => array('slug' => 'productions'),
		'labels' => array(
			'name' => 'Productions',
			'singular_name' => 'Production',
			'add_new_item' => 'Add New Production',
			'edit_item' => 'Edit Production'
		),
		'menu-icon' => 'dashicons-controls-play',
		'public' => true,
		'has_archive' => true,
		'supports' => array(
			'title', 'thumbnail', 'editor', 'excerpt'
		)
	)
		);
}

add_action('init', 'ohlook_custom_post_production');

// Class Post Type

function ohlook_custom_post_class() {
	register_post_type('class',
	array(
		'rewrite' => array('slug' => 'pclasses'),
		'labels' => array(
			'name' => 'Classes',
			'singular_name' => 'Class',
			'add_new_item' => 'Add New Class',
			'edit_item' => 'Edit Class'
		),
		'menu-icon' => 'dashicons-universal-access-alt',
		'public' => true,
		'has_archive' => true,
		'supports' => array(
			'title', 'thumbnail', 'editor', 'excerpt'
		)
	)
		);
}

add_action('init', 'ohlook_custom_post_class');

// Bio Post Type

function ohlook_custom_post_bio() {
	register_post_type('bio',
	array(
		'rewrite' => array('slug' => 'pbios'),
		'labels' => array(
			'name' => 'Bios',
			'singular_name' => 'Bio',
			'add_new_item' => 'Add New Bio',
			'edit_item' => 'Edit Bio'
		),
		'menu-icon' => 'dashicons-universal-access-alt',
		'public' => true,
		'has_archive' => true,
		'supports' => array(
			'title', 'thumbnail', 'editor', 'excerpt'
		)
	)
		);
}

add_action('init', 'ohlook_custom_post_bio');

// Sponsor Post Type

function ohlook_custom_post_sponsor() {
	register_post_type('sponsor',
	array(
		'rewrite' => array('slug' => 'psponsors'),
		'labels' => array(
			'name' => 'Sponsors',
			'singular_name' => 'Sponsor',
			'add_new_item' => 'Add New Sponsor',
			'edit_item' => 'Edit Sponsor'
		),
		'menu-icon' => 'dashicons-universal-access-alt',
		'public' => true,
		'has_archive' => true,
		'supports' => array(
			'title', 'thumbnail', 'editor', 'excerpt'
		)
	)
		);
}

add_action('init', 'ohlook_custom_post_sponsor');

?>
