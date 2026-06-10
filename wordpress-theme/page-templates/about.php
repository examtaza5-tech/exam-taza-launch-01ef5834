<?php
/**
 * Template Name: ExamTaza — About
 * @package ExamTaza
 */
get_header(); ?>
<div class="container page-wrap">
    <div class="static-page">
        <header class="static-head">
            <h1><?php esc_html_e( 'About ExamTaza.in', 'examtaza' ); ?></h1>
            <p><?php esc_html_e( 'Helping millions of Indian aspirants stay updated with the latest Sarkari opportunities.', 'examtaza' ); ?></p>
        </header>
        <div class="prose-article">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); the_content(); endwhile; else : ?>
                <p><strong>ExamTaza.in</strong> <?php esc_html_e( 'is an independent informational portal dedicated to bringing the fastest and most accurate updates on government jobs, results, admit cards, syllabus, answer keys and admissions across India.', 'examtaza' ); ?></p>
                <h2><?php esc_html_e( 'Our Mission', 'examtaza' ); ?></h2>
                <p><?php esc_html_e( 'We believe every aspirant deserves equal access to opportunity information. Our mission is to make government exam information clean, fast, mobile-friendly and free for everyone.', 'examtaza' ); ?></p>
                <h2><?php esc_html_e( 'What We Cover', 'examtaza' ); ?></h2>
                <ul>
                    <li><?php esc_html_e( 'Latest Sarkari job notifications from across India', 'examtaza' ); ?></li>
                    <li><?php esc_html_e( 'Admit card and hall ticket releases', 'examtaza' ); ?></li>
                    <li><?php esc_html_e( 'Exam results and merit lists', 'examtaza' ); ?></li>
                    <li><?php esc_html_e( 'Detailed syllabus and exam pattern', 'examtaza' ); ?></li>
                    <li><?php esc_html_e( 'Provisional and final answer keys', 'examtaza' ); ?></li>
                    <li><?php esc_html_e( 'College and university admissions', 'examtaza' ); ?></li>
                </ul>
            <?php endif; ?>
        </div>
        <div class="disclaimer-box">
            <?php echo examtaza_icon( 'info', 'icon icon-lg' ); ?>
            <span><?php echo esc_html( examtaza_disclaimer_text() ); ?></span>
        </div>
    </div>
</div>
<?php get_footer();
