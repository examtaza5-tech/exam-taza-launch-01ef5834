<?php get_header(); ?>
<div class="container page-wrap">
    <div class="layout">
        <div>
            <div class="cat-list">
                <div class="cat-list-head"><?php printf( esc_html__( 'Search results for: "%s"', 'examtaza' ), esc_html( get_search_query() ) ); ?></div>
                <ul class="cat-list-items">
                    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                        <li>
                            <div class="info">
                                <div class="row-meta"><span class="update-date"><?php echo examtaza_icon( 'calendar', 'icon icon-sm' ); ?> <?php echo esc_html( get_the_date( 'd M Y' ) ); ?></span></div>
                                <a class="row-title" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </div>
                            <a class="cta" href="<?php the_permalink(); ?>"><?php esc_html_e( 'View Details', 'examtaza' ); ?> <?php echo examtaza_icon( 'arrow-right', 'icon icon-sm' ); ?></a>
                        </li>
                    <?php endwhile; else : ?>
                        <li style="justify-content:center;color:var(--muted-foreground);padding:32px 16px"><?php esc_html_e( 'No matching posts found.', 'examtaza' ); ?></li>
                    <?php endif; ?>
                </ul>
            </div>
            <?php the_posts_pagination( array( 'prev_text' => '«', 'next_text' => '»' ) ); ?>
        </div>
        <div class="sidebar-col"><?php get_sidebar(); ?></div>
    </div>
</div>
<?php get_footer();
