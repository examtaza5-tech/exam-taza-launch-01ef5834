<?php
/** Fallback / blog index @package ExamTaza */
get_header(); ?>
<section class="section">
    <div class="container">
        <div class="layout">
            <div>
                <div class="post-list">
                    <div class="post-list-head"><span><?php is_home() ? esc_html_e( 'Latest Updates', 'examtaza' ) : single_term_title(); ?></span></div>
                    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                        <a class="post-row" href="<?php the_permalink(); ?>">
                            <span class="date"><?php echo esc_html( get_the_date( 'd M' ) ); ?></span>
                            <span class="title"><?php the_title(); ?></span>
                        </a>
                    <?php endwhile; ?>
                        <div style="padding:16px"><?php the_posts_pagination( array( 'prev_text' => '«', 'next_text' => '»' ) ); ?></div>
                    <?php else : ?>
                        <div style="padding:24px;text-align:center;color:var(--muted-foreground)"><?php esc_html_e( 'No posts found.', 'examtaza' ); ?></div>
                    <?php endif; ?>
                </div>
                <div class="disclaimer-box"><span style="font-size:20px">ℹ️</span><span><?php echo esc_html( examtaza_disclaimer_text() ); ?></span></div>
            </div>
            <?php get_sidebar(); ?>
        </div>
    </div>
</section>
<?php get_footer();
