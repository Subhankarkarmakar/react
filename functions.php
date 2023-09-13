<?php
/**
 * Functions
 */
add_action('wp_enqueue_scripts', 'react_script_and_styles');

function react_script_and_styles() {
    $version = rand(100, 9999);

    $dep_assets = array();

    if (file_exists(get_stylesheet_directory() . '/build/index.asset.php')) {
        $dep_assets = require get_stylesheet_directory() . '/build/index.asset.php';
    }

    $dep = $dep_assets['dependencies'] ?? array();

    wp_enqueue_script('learn-react-script', get_stylesheet_directory_uri() . '/build/index.js', $dep, $version, true);
    wp_enqueue_style('learn-react-style' , get_stylesheet_directory_uri(  ) . '/assets/index.css', array(), $version);
}
