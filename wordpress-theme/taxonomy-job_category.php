<?php
/** Job category archive @package ExamTaza */
get_header();
$term = get_queried_object();
?>
<section class="hero" style="padding:28px 0">
    <div class="container">
        <h1 style="font-size:clamp(20px,3vw,28px);margin-bottom:6px"><?php echo esc_html( $term->name ); ?></h1>
        <p style="margin:0;font-size:14px;opacity:.9"><?php echo esc_html( $term->description ? $term->description : sprintf( __( 'All latest updates in %s.', 'examtaza' ), $term->name ) ); ?></p>
    </div>
</section>
<section class="section">
    <div class="container">
        <div class="layout">
            <div>
                <div class="post-list">
                    <div class="post-list-head"><span><?php echo esc_html( $term->name ); ?></span></div>
                    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                        <a class="post-row" href="<?php the_permalink(); ?>">
                            <span class="date"><?php echo esc_html( get_the_date( 'd M Y' ) ); ?></span>
                            <span class="title"><?php the_title(); ?></span>
                        </a>
                    <?php endwhile; else : ?>
                        <div style="padding:24px;text-align:center;color:var(--muted-foreground)"><?php esc_html_e( 'No posts in this category yet.', 'examtaza' ); ?></div>
                    <?php endif; ?>
                </div>
                <div class="pagination"><?php echo paginate_links(); ?></div>
                <div class="disclaimer-box"><span style="font-size:20px">ℹ️</span><span><?php echo esc_html( examtaza_disclaimer_text() ); ?></span></div>
            </div>
            <?php get_sidebar(); ?>
        </div>
    </div>
</section>
<?php get_footer();
