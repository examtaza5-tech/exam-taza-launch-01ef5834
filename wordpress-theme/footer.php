<?php
/** @package ExamTaza */
$socials = examtaza_socials();
$year    = date( 'Y' );
?>
</main><!-- #main -->

<footer class="site-footer" role="contentinfo">
    <div class="container">
        <div class="footer-grid">
            <div>
                <a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" style="color:#fff">
                    <span class="brand-mark">E</span>
                    <span class="brand-text">
                        <span class="brand-name" style="color:#fff"><?php bloginfo( 'name' ); ?></span>
                    </span>
                </a>
                <p style="margin-top:12px;font-size:14px;color:rgba(255,255,255,.7);line-height:1.6">
                    <?php esc_html_e( 'Latest Sarkari Jobs, Results, Admit Cards, Syllabus, Answer Keys and Admission updates — fast, mobile friendly and free for every aspirant.', 'examtaza' ); ?>
                </p>
                <div class="footer-socials">
                    <?php if ( $socials['whatsapp'] ) : ?><a class="whatsapp" href="<?php echo esc_url( $socials['whatsapp'] ); ?>" target="_blank" rel="noopener" aria-label="WhatsApp">W</a><?php endif; ?>
                    <?php if ( $socials['telegram'] ) : ?><a class="telegram" href="<?php echo esc_url( $socials['telegram'] ); ?>" target="_blank" rel="noopener" aria-label="Telegram">T</a><?php endif; ?>
                    <?php if ( $socials['instagram'] ) : ?><a class="instagram" href="<?php echo esc_url( $socials['instagram'] ); ?>" target="_blank" rel="noopener" aria-label="Instagram">I</a><?php endif; ?>
                    <?php if ( $socials['youtube'] ) : ?><a class="youtube" href="<?php echo esc_url( $socials['youtube'] ); ?>" target="_blank" rel="noopener" aria-label="YouTube">Y</a><?php endif; ?>
                </div>
            </div>

            <div>
                <h3><?php esc_html_e( 'Quick Links', 'examtaza' ); ?></h3>
                <?php if ( has_nav_menu( 'footer' ) ) {
                    wp_nav_menu( array( 'theme_location' => 'footer', 'container' => false, 'items_wrap' => '<ul>%3$s</ul>', 'depth' => 1 ) );
                } else { ?>
                    <ul>
                        <li><a href="<?php echo esc_url( home_url( '/about/' ) ); ?>"><?php esc_html_e( 'About Us', 'examtaza' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>"><?php esc_html_e( 'Contact Us', 'examtaza' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/privacy-policy/' ) ); ?>"><?php esc_html_e( 'Privacy Policy', 'examtaza' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/disclaimer/' ) ); ?>"><?php esc_html_e( 'Disclaimer', 'examtaza' ); ?></a></li>
                        <li><a href="<?php echo esc_url( home_url( '/terms/' ) ); ?>"><?php esc_html_e( 'Terms & Conditions', 'examtaza' ); ?></a></li>
                    </ul>
                <?php } ?>
            </div>

            <div>
                <h3><?php esc_html_e( 'Categories', 'examtaza' ); ?></h3>
                <ul>
                    <?php
                    $terms = get_terms( array( 'taxonomy' => 'job_category', 'hide_empty' => false ) );
                    if ( ! is_wp_error( $terms ) ) {
                        foreach ( $terms as $t ) {
                            echo '<li><a href="' . esc_url( get_term_link( $t ) ) . '">' . esc_html( $t->name ) . '</a></li>';
                        }
                    }
                    ?>
                </ul>
            </div>

            <div>
                <h3><?php esc_html_e( 'Disclaimer', 'examtaza' ); ?></h3>
                <p style="font-size:12px;color:rgba(255,255,255,.6);line-height:1.6">
                    <?php echo esc_html( examtaza_disclaimer_text() ); ?>
                </p>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            &copy; <?php echo esc_html( $year ); ?> <?php bloginfo( 'name' ); ?> &mdash; <?php esc_html_e( 'All Rights Reserved.', 'examtaza' ); ?>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
