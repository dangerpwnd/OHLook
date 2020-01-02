<?php
/**
 * Ohlook a Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Ohlook_a_Theme
 */

if ( ! function_exists( 'ohlook_a_theme_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function ohlook_a_theme_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Ohlook a Theme, use a find and replace
		 * to change 'ohlook-a-theme' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'ohlook-a-theme', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'ohlook-a-theme' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'ohlook_a_theme_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 400,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'ohlook_a_theme_setup' );

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

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function ohlook_a_theme_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'ohlook_a_theme_content_width', 1024 );
}
add_action( 'after_setup_theme', 'ohlook_a_theme_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function ohlook_a_theme_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'ohlook-a-theme' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'ohlook-a-theme' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'ohlook_a_theme_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function ohlook_a_theme_scripts() {
	wp_enqueue_style( 'ohlook-a-theme-style', get_stylesheet_uri() );

	wp_enqueue_style( 'about', get_stylesheet_uri() . '/assets/css/about.css', false, '1.0', 'all' );

	wp_enqueue_style( 'auditions', get_stylesheet_uri() . '/assets/css/auditions.css', false, '1.0', 'all' );

	wp_enqueue_style( 'awards', get_stylesheet_uri() . '/assets/css/awards.css', false, '1.0', 'all' );

	wp_enqueue_style( 'class', get_stylesheet_uri() . '/assets/css/class.css', false, '1.0', 'all' );

	wp_enqueue_style( 'contact', get_stylesheet_uri() . '/assets/css/contact.css', false, '1.0', 'all' );

	wp_enqueue_style( 'donate', get_stylesheet_uri() . '/assets/css/donate.css', false, '1.0', 'all' );

	wp_enqueue_style( 'events', get_stylesheet_uri() . '/assets/css/events.css', false, '1.0', 'all' );

	wp_enqueue_style( 'grads', get_stylesheet_uri() . '/assets/css/grads.css', false, '1.0', 'all' );

	wp_enqueue_style( 'index', get_stylesheet_uri() . '/assets/css/index.css', false, '1.0', 'all' );

	wp_enqueue_style( 'latenight', get_stylesheet_uri() . '/assets/css/latenight.css', false, '1.0', 'all' );

	wp_enqueue_style( 'main', get_stylesheet_uri() . '/assets/css/main.css', false, '1.0', 'all' );

	wp_enqueue_style( 'masterclass', get_stylesheet_uri() . '/assets/css/masterclass.css', false, '1.0', 'all' );

	wp_enqueue_style( 'party', get_stylesheet_uri() . '/assets/css/party.css', false, '1.0', 'all' );
	
	wp_enqueue_style( 'prod', get_stylesheet_uri() . '/assets/css/prod.css', false, '1.0', 'all' );

	wp_enqueue_style( 'purchase', get_stylesheet_uri() . '/assets/css/purchase.css', false, '1.0', 'all' );

	wp_enqueue_style( 'sponsors', get_stylesheet_uri() . '/assets/css/sponsors.css', false, '1.0', 'all' );

	wp_enqueue_script( 'ohlook-a-theme-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'ohlook-a-theme-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	wp_enqueue_script( 'about', get_template_directory_uri() . '/assets/js/about.js', array('jquery'), '1.0', true );

	wp_enqueue_script( 'awards', get_template_directory_uri() . '/assets/js/awards.js', array('jquery'), '1.0', true );

	wp_enqueue_script( 'class', get_template_directory_uri() . '/assets/js/class.js', array('jquery'), '1.0', true );

	wp_enqueue_script( 'contact', get_template_directory_uri() . '/assets/js/contact.js', array('jquery'), '1.0', true );

	wp_enqueue_script( 'grads', get_template_directory_uri() . '/assets/js/grads.js', array('jquery'), '1.0', true );

	wp_enqueue_script( 'index', get_template_directory_uri() . '/assets/js/index.js', array('jquery'), '1.0', true );

	wp_enqueue_script( 'modal', get_template_directory_uri() . '/assets/js/modal.js', array('jquery'), '1.0', true );

	wp_enqueue_script( 'party', get_template_directory_uri() . '/assets/js/party.js', array('jquery'), '1.0', true );

	wp_enqueue_script( 'prod', get_template_directory_uri() . '/assets/js/prod.js', array('jquery'), '1.0', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'ohlook_a_theme_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}



