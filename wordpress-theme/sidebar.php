<?php
/** @package ExamTaza */
$socials = examtaza_socials();
?>
<aside class="site-sidebar sidebar-stack" role="complementary">
    <div class="sidebar-card no-head">
        <h3><?php esc_html_e( 'Join Our Community', 'examtaza' ); ?></h3>
        <div class="join-buttons">
            <?php if ( $socials['whatsapp'] ) : ?><a class="btn btn-whatsapp" href="<?php echo esc_url( $socials['whatsapp'] ); ?>" target="_blank" rel="noopener"><?php echo examtaza_icon( 'message', 'icon icon-sm' ); ?> <?php esc_html_e( 'Join WhatsApp Group', 'examtaza' ); ?></a><?php endif; ?>
            <?php if ( $socials['telegram'] ) : ?><a class="btn btn-telegram" href="<?php echo esc_url( $socials['telegram'] ); ?>" target="_blank" rel="noopener"><?php echo examtaza_icon( 'send', 'icon icon-sm' ); ?> <?php esc_html_e( 'Join Telegram Channel', 'examtaza' ); ?></a><?php endif; ?>
        </div>
    </div>

    <div class="sidebar-card">
        <h3 class="card-title"><?php esc_html_e( 'Latest Updates', 'examtaza' ); ?></h3>
        <ul class="sidebar-list">
            <?php
            $latest = new WP_Query( array( 'post_type' => array( 'job', 'post' ), 'posts_per_page' => 6, 'ignore_sticky_posts' => true ) );
            if ( $latest->have_posts() ) {
                while ( $latest->have_posts() ) { $latest->the_post(); ?>
                    <li><a href="<?php the_permalink(); ?>">
                        <?php echo examtaza_icon( 'chev-right', 'chev' ); ?>
                        <span>
                            <?php the_title(); ?>
                            <span class="meta"><?php echo esc_html( get_the_date( 'd M Y' ) ); ?></span>
                        </span>
                    </a></li>
                <?php }
                wp_reset_postdata();
            } else {
                echo '<li style="padding:14px 16px;color:var(--muted-foreground)">' . esc_html__( 'No posts yet.', 'examtaza' ) . '</li>';
            }
            ?>
        </ul>
    </div>

    <div class="sidebar-card">
        <h3 class="card-title"><?php esc_html_e( 'Top Categories', 'examtaza' ); ?></h3>
        <div class="top-cats">
            <?php
            $terms = get_terms( array( 'taxonomy' => 'job_category', 'hide_empty' => false ) );
            if ( ! is_wp_error( $terms ) && $terms ) {
                foreach ( $terms as $t ) {
                    echo '<a href="' . esc_url( get_term_link( $t ) ) . '">' . esc_html( examtaza_category_short( $t->name ) ) . '</a>';
                }
            }
            ?>
        </div>
    </div>

    <?php if ( is_active_sidebar( 'sidebar-1' ) ) { dynamic_sidebar( 'sidebar-1' ); } ?>
</aside>
