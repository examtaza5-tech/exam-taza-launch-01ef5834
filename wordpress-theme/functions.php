<?php
/**
 * ExamTaza theme functions
 *
 * @package ExamTaza
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

define( 'EXAMTAZA_VERSION', '1.1.0' );

require_once get_template_directory() . '/inc/icons.php';

/* =========================================================
 * Theme setup
 * ========================================================= */
function examtaza_setup() {
    load_theme_textdomain( 'examtaza', get_template_directory() . '/languages' );

    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'automatic-feed-links' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
    add_theme_support( 'custom-logo', array(
        'height'      => 60,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ) );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'align-wide' );

    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'examtaza' ),
        'footer'  => __( 'Footer Menu', 'examtaza' ),
    ) );
}
add_action( 'after_setup_theme', 'examtaza_setup' );

/* =========================================================
 * Enqueue assets
 * ========================================================= */
function examtaza_enqueue_assets() {
    wp_enqueue_style( 'examtaza-style', get_stylesheet_uri(), array(), EXAMTAZA_VERSION );
    wp_enqueue_script( 'examtaza-main', get_template_directory_uri() . '/assets/js/main.js', array(), EXAMTAZA_VERSION, true );

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'examtaza_enqueue_assets' );

/* =========================================================
 * Sidebar (widget area)
 * ========================================================= */
function examtaza_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Main Sidebar', 'examtaza' ),
        'id'            => 'sidebar-1',
        'description'   => __( 'Shown on posts, archives and pages.', 'examtaza' ),
        'before_widget' => '<div id="%1$s" class="sidebar-widget widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
}
add_action( 'widgets_init', 'examtaza_widgets_init' );

/* =========================================================
 * Custom Post Type: Job Post
 * ========================================================= */
function examtaza_register_job_cpt() {
    $labels = array(
        'name'               => __( 'Job Posts', 'examtaza' ),
        'singular_name'      => __( 'Job Post', 'examtaza' ),
        'add_new'            => __( 'Add New Job', 'examtaza' ),
        'add_new_item'       => __( 'Add New Job Post', 'examtaza' ),
        'edit_item'          => __( 'Edit Job Post', 'examtaza' ),
        'new_item'           => __( 'New Job Post', 'examtaza' ),
        'view_item'          => __( 'View Job Post', 'examtaza' ),
        'search_items'       => __( 'Search Job Posts', 'examtaza' ),
        'menu_name'          => __( 'Job Posts', 'examtaza' ),
    );
    register_post_type( 'job', array(
        'labels'             => $labels,
        'public'             => true,
        'show_in_rest'       => true,
        'has_archive'        => 'jobs',
        'menu_icon'          => 'dashicons-portfolio',
        'menu_position'      => 5,
        'supports'           => array( 'title', 'editor', 'excerpt', 'thumbnail', 'comments', 'revisions' ),
        'rewrite'            => array( 'slug' => 'post', 'with_front' => false ),
    ) );

    register_taxonomy( 'job_category', 'job', array(
        'labels' => array(
            'name'          => __( 'Categories', 'examtaza' ),
            'singular_name' => __( 'Category', 'examtaza' ),
        ),
        'hierarchical'      => true,
        'public'            => true,
        'show_admin_column' => true,
        'show_in_rest'      => true,
        'rewrite'           => array( 'slug' => 'category', 'with_front' => false ),
    ) );
}
add_action( 'init', 'examtaza_register_job_cpt' );

/* =========================================================
 * Seed default categories on activation
 * ========================================================= */
function examtaza_seed_categories() {
    $cats = array(
        'latest-jobs' => 'Latest Jobs',
        'admit-card'  => 'Admit Card',
        'results'     => 'Results',
        'syllabus'    => 'Syllabus',
        'answer-key'  => 'Answer Key',
        'admission'   => 'Admission',
    );
    foreach ( $cats as $slug => $name ) {
        if ( ! term_exists( $slug, 'job_category' ) ) {
            wp_insert_term( $name, 'job_category', array( 'slug' => $slug ) );
        }
    }
}
add_action( 'after_switch_theme', 'examtaza_seed_categories' );
add_action( 'after_switch_theme', 'flush_rewrite_rules' );

/* =========================================================
 * Meta boxes for Job Post (structured fields)
 * ========================================================= */
function examtaza_add_meta_boxes() {
    add_meta_box( 'examtaza_job_meta', __( 'Job Post Details', 'examtaza' ), 'examtaza_render_meta_box', 'job', 'normal', 'high' );
}
add_action( 'add_meta_boxes', 'examtaza_add_meta_boxes' );

function examtaza_render_meta_box( $post ) {
    wp_nonce_field( 'examtaza_save_meta', 'examtaza_meta_nonce' );

    $fields = array(
        'subtitle_hi'      => __( 'Hindi Title (optional)', 'examtaza' ),
        'age_limit'        => __( 'Age Limit (short text)', 'examtaza' ),
        'conclusion'       => __( 'Conclusion (1-2 lines)', 'examtaza' ),
    );

    echo '<style>
        .examtaza-meta label { display:block; font-weight:600; margin-top:14px; }
        .examtaza-meta input[type=text], .examtaza-meta textarea { width:100%; padding:8px; }
        .examtaza-meta textarea { min-height:80px; font-family:monospace; font-size:12px; }
        .examtaza-meta .desc { color:#666; font-size:12px; margin-top:4px; }
    </style>';

    echo '<div class="examtaza-meta">';
    foreach ( $fields as $key => $label ) {
        $val = get_post_meta( $post->ID, '_examtaza_' . $key, true );
        printf( '<label for="examtaza_%1$s">%2$s</label><input type="text" id="examtaza_%1$s" name="examtaza_%1$s" value="%3$s" />', esc_attr( $key ), esc_html( $label ), esc_attr( $val ) );
    }

    $textareas = array(
        'content_hi'        => array( __( 'Hindi Content (HTML allowed)', 'examtaza' ), 'Optional: full Hindi version of the post body. Will appear when user clicks हिंदी toggle.' ),
        'important_dates'   => array( __( 'Important Dates', 'examtaza' ), 'One per line: Event | Date  (e.g. "Apply Start | 05/06/2026")' ),
        'application_fee'   => array( __( 'Application Fee', 'examtaza' ), 'One per line: Category | Fee  (e.g. "General/OBC | ₹100/-")' ),
        'vacancy_table'     => array( __( 'Vacancy Details', 'examtaza' ), 'One per line: Post | Vacancy | Qualification' ),
        'salary_table'      => array( __( 'Salary', 'examtaza' ), 'One per line: Post | Pay Scale' ),
        'selection_process' => array( __( 'Selection Process', 'examtaza' ), 'One step per line.' ),
        'how_to_apply'      => array( __( 'How To Apply (Steps)', 'examtaza' ), 'One step per line.' ),
        'important_links'   => array( __( 'Important Links', 'examtaza' ), 'One per line: Label | URL | type   (type: apply | download | official | notification)' ),
        'faqs'              => array( __( 'FAQs', 'examtaza' ), 'Format per FAQ on two lines: Q: ...  /  A: ...  separated by a blank line.' ),
    );

    foreach ( $textareas as $key => $cfg ) {
        list( $label, $desc ) = $cfg;
        $val = get_post_meta( $post->ID, '_examtaza_' . $key, true );
        printf( '<label for="examtaza_%1$s">%2$s</label><textarea id="examtaza_%1$s" name="examtaza_%1$s">%3$s</textarea><div class="desc">%4$s</div>', esc_attr( $key ), esc_html( $label ), esc_textarea( $val ), esc_html( $desc ) );
    }
    echo '</div>';
}

function examtaza_save_meta( $post_id ) {
    if ( ! isset( $_POST['examtaza_meta_nonce'] ) || ! wp_verify_nonce( $_POST['examtaza_meta_nonce'], 'examtaza_save_meta' ) ) return;
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
    if ( ! current_user_can( 'edit_post', $post_id ) ) return;

    $keys = array( 'subtitle_hi', 'age_limit', 'conclusion', 'content_hi', 'important_dates', 'application_fee', 'vacancy_table', 'salary_table', 'selection_process', 'how_to_apply', 'important_links', 'faqs' );
    foreach ( $keys as $key ) {
        if ( isset( $_POST[ 'examtaza_' . $key ] ) ) {
            $value = wp_unslash( $_POST[ 'examtaza_' . $key ] );
            if ( in_array( $key, array( 'content_hi' ), true ) ) {
                $value = wp_kses_post( $value );
            } else {
                $value = sanitize_textarea_field( $value );
            }
            update_post_meta( $post_id, '_examtaza_' . $key, $value );
        }
    }
}
add_action( 'save_post_job', 'examtaza_save_meta' );

/* =========================================================
 * Helpers — parse pipe-delimited meta into rows
 * ========================================================= */
function examtaza_parse_rows( $raw, $cols ) {
    $rows  = array();
    $lines = preg_split( '/\r\n|\r|\n/', trim( (string) $raw ) );
    foreach ( $lines as $line ) {
        $line = trim( $line );
        if ( '' === $line ) continue;
        $parts = array_map( 'trim', explode( '|', $line ) );
        $row   = array();
        for ( $i = 0; $i < $cols; $i++ ) {
            $row[] = isset( $parts[ $i ] ) ? $parts[ $i ] : '';
        }
        $rows[] = $row;
    }
    return $rows;
}

function examtaza_parse_lines( $raw ) {
    $out   = array();
    $lines = preg_split( '/\r\n|\r|\n/', trim( (string) $raw ) );
    foreach ( $lines as $l ) {
        $l = trim( $l );
        if ( $l !== '' ) $out[] = $l;
    }
    return $out;
}

function examtaza_parse_faqs( $raw ) {
    $out    = array();
    $blocks = preg_split( '/\n\s*\n/', trim( (string) $raw ) );
    foreach ( $blocks as $b ) {
        if ( preg_match( '/Q:\s*(.+?)\s*(?:\r\n|\r|\n)\s*A:\s*(.+)/si', $b, $m ) ) {
            $out[] = array( 'q' => trim( $m[1] ), 'a' => trim( $m[2] ) );
        }
    }
    return $out;
}

/* =========================================================
 * Helpers — social URLs, disclaimer
 * ========================================================= */
function examtaza_disclaimer_text() {
    return get_theme_mod( 'examtaza_disclaimer', "Disclaimer: Examtaza.in is an independent platform and is not associated with any official or government organization. All information provided on this website is for general informational purposes only and should not be considered as legal or official advice. We strongly advise visitors to verify all details through official government notifications and websites before making any decision." );
}

function examtaza_socials() {
    return array(
        'whatsapp'  => get_theme_mod( 'examtaza_whatsapp',  'https://chat.whatsapp.com/' ),
        'telegram'  => get_theme_mod( 'examtaza_telegram',  'https://t.me/' ),
        'instagram' => get_theme_mod( 'examtaza_instagram', 'https://instagram.com/' ),
        'youtube'   => get_theme_mod( 'examtaza_youtube',   'https://youtube.com/' ),
    );
}

/* =========================================================
 * Customizer — socials + disclaimer
 * ========================================================= */
function examtaza_customize_register( $wp_customize ) {
    $wp_customize->add_section( 'examtaza_settings', array(
        'title'    => __( 'ExamTaza Settings', 'examtaza' ),
        'priority' => 30,
    ) );

    $fields = array(
        'examtaza_whatsapp'   => __( 'WhatsApp Group URL', 'examtaza' ),
        'examtaza_telegram'   => __( 'Telegram Channel URL', 'examtaza' ),
        'examtaza_instagram'  => __( 'Instagram URL', 'examtaza' ),
        'examtaza_youtube'    => __( 'YouTube URL', 'examtaza' ),
    );
    foreach ( $fields as $id => $label ) {
        $wp_customize->add_setting( $id, array( 'default' => '', 'sanitize_callback' => 'esc_url_raw' ) );
        $wp_customize->add_control( $id, array(
            'label'   => $label,
            'section' => 'examtaza_settings',
            'type'    => 'url',
        ) );
    }

    $wp_customize->add_setting( 'examtaza_disclaimer', array(
        'default'           => examtaza_disclaimer_text(),
        'sanitize_callback' => 'sanitize_textarea_field',
    ) );
    $wp_customize->add_control( 'examtaza_disclaimer', array(
        'label'   => __( 'Disclaimer Text', 'examtaza' ),
        'section' => 'examtaza_settings',
        'type'    => 'textarea',
    ) );
}
add_action( 'customize_register', 'examtaza_customize_register' );

/* =========================================================
 * Excerpt length & read more
 * ========================================================= */
function examtaza_excerpt_length( $length ) { return 24; }
add_filter( 'excerpt_length', 'examtaza_excerpt_length', 999 );

function examtaza_excerpt_more( $more ) { return '…'; }
add_filter( 'excerpt_more', 'examtaza_excerpt_more' );

/* =========================================================
 * Body class
 * ========================================================= */
function examtaza_body_classes( $classes ) {
    if ( is_singular( 'job' ) ) { $classes[] = 'is-job-single'; }
    return $classes;
}
add_filter( 'body_class', 'examtaza_body_classes' );
