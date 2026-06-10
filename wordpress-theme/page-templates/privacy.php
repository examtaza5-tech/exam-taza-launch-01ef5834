<?php
/**
 * Template Name: ExamTaza — Privacy Policy
 * @package ExamTaza
 */
get_header(); ?>
<div class="container page-wrap">
    <div class="static-page prose-article">
        <h1 class="static-h1"><?php esc_html_e( 'Privacy Policy', 'examtaza' ); ?></h1>
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); if ( trim( get_the_content() ) ) { the_content(); } else { ?>
            <p><?php esc_html_e( 'ExamTaza.in respects your privacy. We do not sell or share your personal data with third parties.', 'examtaza' ); ?></p>
            <h2><?php esc_html_e( 'Information We Collect', 'examtaza' ); ?></h2>
            <p><?php esc_html_e( 'We may collect basic analytics data to improve user experience. No personally identifying information is stored without consent.', 'examtaza' ); ?></p>
            <h2><?php esc_html_e( 'Cookies', 'examtaza' ); ?></h2>
            <p><?php esc_html_e( 'This website may use cookies to enhance browsing experience. You can disable cookies from your browser settings.', 'examtaza' ); ?></p>
            <h2><?php esc_html_e( 'Third Party Links', 'examtaza' ); ?></h2>
            <p><?php esc_html_e( 'Our website may contain links to official government websites. We are not responsible for the privacy practices of those websites.', 'examtaza' ); ?></p>
            <h2><?php esc_html_e( 'Contact', 'examtaza' ); ?></h2>
            <p><?php esc_html_e( 'For any privacy-related questions, please write to contact@examtaza.in.', 'examtaza' ); ?></p>
        <?php } endwhile; endif; ?>
    </div>
</div>
<?php get_footer();
