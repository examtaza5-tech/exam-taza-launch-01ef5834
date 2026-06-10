<?php
/**
 * Template Name: ExamTaza — Terms & Conditions
 * @package ExamTaza
 */
get_header(); ?>
<div class="container page-wrap">
    <div class="static-page prose-article">
        <h1 class="static-h1"><?php esc_html_e( 'Terms & Conditions', 'examtaza' ); ?></h1>
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); if ( trim( get_the_content() ) ) { the_content(); } else { ?>
            <p><?php esc_html_e( 'By accessing ExamTaza.in you agree to be bound by the following terms and conditions.', 'examtaza' ); ?></p>
            <h2><?php esc_html_e( 'Use of Content', 'examtaza' ); ?></h2>
            <p><?php esc_html_e( 'All content on this website is provided for informational purposes only. You may not republish or commercially distribute content without prior permission.', 'examtaza' ); ?></p>
            <h2><?php esc_html_e( 'External Links', 'examtaza' ); ?></h2>
            <p><?php esc_html_e( 'This website contains links to official government websites. We have no control over the nature, content and availability of those sites.', 'examtaza' ); ?></p>
            <h2><?php esc_html_e( 'Changes', 'examtaza' ); ?></h2>
            <p><?php esc_html_e( 'We reserve the right to modify these terms at any time without prior notice.', 'examtaza' ); ?></p>
        <?php } endwhile; endif; ?>
    </div>
</div>
<?php get_footer();
