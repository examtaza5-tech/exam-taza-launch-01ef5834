<?php get_header(); ?>
<section class="section">
    <div class="container">
        <div class="layout">
            <div>
                <div class="post-list">
                    <div class="post-list-head"><span><?php printf( esc_html__( 'Search results for: %s', 'examtaza' ), '"' . esc_html( get_search_query() ) . '"' ); ?></span></div>
                    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                        <a class="post-row" href="<?php the_permalink(); ?>">
                            <span class="date"><?php echo esc_html( get_the_date( 'd M' ) ); ?></span>
                            <span class="title"><?php the_title(); ?></span>
                        </a>
                    <?php endwhile; else : ?>
                        <div style="padding:24px;text-align:center;color:var(--muted-foreground)"><?php esc_html_e( 'No matching posts found.', 'examtaza' ); ?></div>
                    <?php endif; ?>
                </div>
            </div>
            <?php get_sidebar(); ?>
        </div>
    </div>
</section>
<?php get_footer();
