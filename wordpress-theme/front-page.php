<?php
/** Homepage @package ExamTaza */
get_header();

$cat_descs = array(
    'latest-jobs' => __( 'Newest government job notifications across India.', 'examtaza' ),
    'admit-card'  => __( 'Download admit cards for upcoming exams.', 'examtaza' ),
    'results'     => __( 'Latest exam results and merit lists.', 'examtaza' ),
    'syllabus'    => __( 'Official exam syllabus and exam patterns.', 'examtaza' ),
    'answer-key'  => __( 'Provisional and final answer keys.', 'examtaza' ),
    'admission'   => __( 'College, university and course admissions.', 'examtaza' ),
);
$socials = examtaza_socials();
?>
<div class="container page-wrap">
    <div class="stack">

        <!-- Hero -->
        <section class="hero-card">
            <div class="hero-inner">
                <span class="hero-badge"><?php echo examtaza_icon( 'sparkles', 'icon icon-sm' ); ?> <?php esc_html_e( 'Updated daily', 'examtaza' ); ?></span>
                <h1 class="hero-title">
                    <?php esc_html_e( 'Latest Sarkari Jobs, Results &', 'examtaza' ); ?>
                    <span class="accent"><?php esc_html_e( 'Admit Cards', 'examtaza' ); ?></span>
                </h1>
                <form role="search" method="get" class="hero-search" action="<?php echo esc_url( home_url( '/' ) ); ?>">
                    <div class="hero-search-input">
                        <?php echo examtaza_icon( 'search' ); ?>
                        <input type="search" name="s" placeholder="<?php esc_attr_e( 'Search SSC, UPSC, Railway, Banking…', 'examtaza' ); ?>" />
                    </div>
                    <button type="submit"><?php esc_html_e( 'Search', 'examtaza' ); ?></button>
                </form>
                <div class="hero-ctas">
                    <?php if ( $socials['whatsapp'] ) : ?><a class="btn btn-whatsapp" href="<?php echo esc_url( $socials['whatsapp'] ); ?>" target="_blank" rel="noopener"><?php echo examtaza_icon( 'message', 'icon icon-sm' ); ?> <?php esc_html_e( 'Join WhatsApp', 'examtaza' ); ?></a><?php endif; ?>
                    <?php if ( $socials['telegram'] ) : ?><a class="btn btn-telegram" href="<?php echo esc_url( $socials['telegram'] ); ?>" target="_blank" rel="noopener"><?php echo examtaza_icon( 'send', 'icon icon-sm' ); ?> <?php esc_html_e( 'Join Telegram', 'examtaza' ); ?></a><?php endif; ?>
                </div>
            </div>
        </section>

        <!-- Categories -->
        <section>
            <div class="section-head">
                <h2><?php esc_html_e( 'Browse by Category', 'examtaza' ); ?></h2>
                <p><?php esc_html_e( 'Explore all updates organised by what you need.', 'examtaza' ); ?></p>
            </div>
            <div class="cat-grid">
                <?php
                $terms = get_terms( array( 'taxonomy' => 'job_category', 'hide_empty' => false ) );
                if ( ! is_wp_error( $terms ) && $terms ) {
                    foreach ( $terms as $t ) {
                        $icon = examtaza_category_icon_name( $t->slug );
                        $desc = isset( $cat_descs[ $t->slug ] ) ? $cat_descs[ $t->slug ] : '';
                        echo '<a class="cat-card" href="' . esc_url( get_term_link( $t ) ) . '">';
                        echo '<span class="cat-icon">' . examtaza_icon( $icon ) . '</span>';
                        echo '<div class="cat-title">' . esc_html( $t->name ) . '</div>';
                        if ( $desc ) echo '<div class="cat-desc">' . esc_html( $desc ) . '</div>';
                        echo '</a>';
                    }
                }
                ?>
            </div>
        </section>

        <!-- Latest Updates -->
        <section>
            <div class="section-row">
                <div class="section-head inline">
                    <h2><?php esc_html_e( 'Latest Updates', 'examtaza' ); ?></h2>
                    <p><?php esc_html_e( 'Freshly posted notifications and updates.', 'examtaza' ); ?></p>
                </div>
                <?php
                $jobs_term = get_term_by( 'slug', 'latest-jobs', 'job_category' );
                if ( $jobs_term ) {
                    echo '<a class="view-all" href="' . esc_url( get_term_link( $jobs_term ) ) . '">' . esc_html__( 'View All →', 'examtaza' ) . '</a>';
                }
                ?>
            </div>
            <?php
            $latest = new WP_Query( array( 'post_type' => array( 'job', 'post' ), 'posts_per_page' => 8, 'ignore_sticky_posts' => true ) );
            if ( $latest->have_posts() ) :
            ?>
            <div class="update-grid">
                <?php while ( $latest->have_posts() ) : $latest->the_post();
                    $terms = get_the_terms( get_the_ID(), 'job_category' );
                    $term  = ( $terms && ! is_wp_error( $terms ) ) ? $terms[0] : null;
                ?>
                    <a class="update-card" href="<?php the_permalink(); ?>">
                        <span class="update-icon"><?php echo examtaza_icon( 'bell' ); ?></span>
                        <span class="update-body">
                            <span class="update-meta">
                                <?php if ( $term ) : ?>
                                    <span class="update-badge"><?php echo esc_html( examtaza_category_short( $term->name ) ); ?></span>
                                <?php endif; ?>
                                <span class="update-date"><?php echo esc_html( get_the_date( 'd M Y' ) ); ?></span>
                            </span>
                            <span class="update-title"><?php the_title(); ?></span>
                        </span>
                        <span class="update-arrow"><?php echo examtaza_icon( 'chev-right' ); ?></span>
                    </a>
                <?php endwhile; ?>
            </div>
            <?php wp_reset_postdata(); else : ?>
                <div class="notice"><h2><?php esc_html_e( 'No posts yet', 'examtaza' ); ?></h2><p><?php esc_html_e( 'Add your first Job Post from WordPress admin → Job Posts.', 'examtaza' ); ?></p></div>
            <?php endif; ?>
        </section>

        <!-- How To Use -->
        <section class="how-section">
            <div class="section-head">
                <h2><?php esc_html_e( 'How To Use ExamTaza.in', 'examtaza' ); ?></h2>
                <p><?php esc_html_e( 'Three simple steps to never miss a Sarkari update.', 'examtaza' ); ?></p>
            </div>
            <div class="how-grid">
                <div class="how-card">
                    <span class="step-badge">STEP 01</span>
                    <span class="step-icon"><?php echo examtaza_icon( 'search' ); ?></span>
                    <h3><?php esc_html_e( 'Search or Browse', 'examtaza' ); ?></h3>
                    <p><?php esc_html_e( 'Use the search bar or category cards to find the exact notification, admit card or result you need.', 'examtaza' ); ?></p>
                </div>
                <div class="how-card">
                    <span class="step-badge">STEP 02</span>
                    <span class="step-icon"><?php echo examtaza_icon( 'mouse' ); ?></span>
                    <h3><?php esc_html_e( 'Read Full Details', 'examtaza' ); ?></h3>
                    <p><?php esc_html_e( 'Open a post for clean, organised details — important dates, fee, eligibility, vacancies and official links.', 'examtaza' ); ?></p>
                </div>
                <div class="how-card">
                    <span class="step-badge">STEP 03</span>
                    <span class="step-icon"><?php echo examtaza_icon( 'check-circle' ); ?></span>
                    <h3><?php esc_html_e( 'Apply & Stay Updated', 'examtaza' ); ?></h3>
                    <p><?php esc_html_e( 'Apply through the official link and join our WhatsApp / Telegram for instant notifications of every update.', 'examtaza' ); ?></p>
                </div>
            </div>
        </section>

        <!-- Join CTA -->
        <section class="join-grid">
            <?php if ( $socials['whatsapp'] ) : ?>
            <a class="wa" href="<?php echo esc_url( $socials['whatsapp'] ); ?>" target="_blank" rel="noopener">
                <span class="ico"><?php echo examtaza_icon( 'message', 'icon icon-lg' ); ?></span>
                <span><span class="label"><?php esc_html_e( 'Join WhatsApp Group', 'examtaza' ); ?></span><span class="sub"><?php esc_html_e( 'Get instant Sarkari Job alerts on WhatsApp', 'examtaza' ); ?></span></span>
            </a>
            <?php endif; ?>
            <?php if ( $socials['telegram'] ) : ?>
            <a class="tg" href="<?php echo esc_url( $socials['telegram'] ); ?>" target="_blank" rel="noopener">
                <span class="ico"><?php echo examtaza_icon( 'send', 'icon icon-lg' ); ?></span>
                <span><span class="label"><?php esc_html_e( 'Join Telegram Channel', 'examtaza' ); ?></span><span class="sub"><?php esc_html_e( 'Never miss results, admit cards & notifications', 'examtaza' ); ?></span></span>
            </a>
            <?php endif; ?>
        </section>

        <!-- Disclaimer -->
        <div class="disclaimer-box">
            <?php echo examtaza_icon( 'info', 'icon icon-lg' ); ?>
            <span><?php echo esc_html( examtaza_disclaimer_text() ); ?></span>
        </div>

    </div>
</div>
<?php get_footer();
