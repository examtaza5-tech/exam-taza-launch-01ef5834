<?php
/**
 * Template Name: ExamTaza — Disclaimer
 * @package ExamTaza
 */
get_header(); ?>
<div class="container page-wrap">
    <div class="static-page">
        <h1 class="static-h1"><?php esc_html_e( 'Disclaimer', 'examtaza' ); ?></h1>
        <div class="disclaimer-box">
            <?php echo examtaza_icon( 'info', 'icon icon-lg' ); ?>
            <span><?php echo esc_html( examtaza_disclaimer_text() ); ?></span>
        </div>
        <div class="prose-article">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); if ( trim( get_the_content() ) ) { the_content(); } else { ?>
                <p><?php esc_html_e( 'The information presented on ExamTaza.in is collected from various publicly available sources and is provided in good faith for the convenience of users preparing for government examinations. We make every effort to keep the information accurate and up to date.', 'examtaza' ); ?></p>
                <p><?php esc_html_e( 'However, ExamTaza.in does not provide any warranty regarding the completeness, accuracy or reliability of any information on this website. Any action you take upon the information you find on this website is strictly at your own risk.', 'examtaza' ); ?></p>
            <?php } endwhile; endif; ?>
        </div>
    </div>
</div>
<?php get_footer();
