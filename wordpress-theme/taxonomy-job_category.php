<?php
/** Category / archive — premium @package ExamTaza */
get_header();

$is_tax = is_tax( 'job_category' );
$term   = $is_tax ? get_queried_object() : null;
$title  = $is_tax ? $term->name : ( is_category() ? single_cat_title( '', false ) : ( is_search() ? sprintf( __( 'Search: %s', 'examtaza' ), get_search_query() ) : get_the_archive_title() ) );
$desc   = $is_tax ? term_description( $term ) : get_the_archive_description();
?>
<div class="container page-wrap">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Home', 'examtaza' ); ?></a>
        <span class="sep">/</span><span class="current"><?php echo esc_html( wp_strip_all_tags( $title ) ); ?></span>
    </nav>

    <header class="cat-hero">
        <h1><?php echo esc_html( wp_strip_all_tags( $title ) ); ?></h1>
        <?php if ( $desc ) : ?><p><?php echo wp_kses_post( $desc ); ?></p><?php endif; ?>
    </header>

    <div class="layout">
        <div>
            <div class="cat-list">
                <div class="cat-list-head">
                    <?php
                    global $wp_query;
                    printf( esc_html__( 'Showing %d posts', 'examtaza' ), (int) $wp_query->found_posts );
                    ?>
                </div>
                <ul class="cat-list-items">
                    <?php if ( have_posts() ) : while ( have_posts() ) : the_post();
                        $terms = get_the_terms( get_the_ID(), 'job_category' );
                        $t     = ( $terms && ! is_wp_error( $terms ) ) ? $terms[0] : null;
                    ?>
                        <li>
                            <div class="info">
                                <div class="row-meta">
                                    <?php if ( $t ) : ?>
                                        <span class="update-badge"><?php echo esc_html( examtaza_category_short( $t->name ) ); ?></span>
                                    <?php endif; ?>
                                    <span class="update-date"><?php echo examtaza_icon( 'calendar', 'icon icon-sm' ); ?> <?php echo esc_html( get_the_date( 'd M Y' ) ); ?></span>
                                </div>
                                <a class="row-title" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </div>
                            <a class="cta" href="<?php the_permalink(); ?>"><?php esc_html_e( 'View Details', 'examtaza' ); ?> <?php echo examtaza_icon( 'arrow-right', 'icon icon-sm' ); ?></a>
                        </li>
                    <?php endwhile; else : ?>
                        <li style="justify-content:center;color:var(--muted-foreground);padding:32px 16px"><?php esc_html_e( 'No posts found in this category yet. Check back soon!', 'examtaza' ); ?></li>
                    <?php endif; ?>
                </ul>
            </div>

            <?php the_posts_pagination( array( 'prev_text' => '«', 'next_text' => '»' ) ); ?>

            <div class="disclaimer-box" style="margin-top:24px">
                <?php echo examtaza_icon( 'info', 'icon icon-lg' ); ?>
                <span><?php echo esc_html( examtaza_disclaimer_text() ); ?></span>
            </div>
        </div>

        <div class="sidebar-col">
            <?php get_sidebar(); ?>
        </div>
    </div>
</div>
<?php get_footer();
