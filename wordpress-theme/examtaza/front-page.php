<?php
/** Homepage @package ExamTaza */
get_header();

$cat_icons = array( 'latest-jobs' => '💼', 'admit-card' => '🪪', 'results' => '🏆', 'syllabus' => '📚', 'answer-key' => '🔑', 'admission' => '🎓' );
$cat_descs = array(
    'latest-jobs' => __( 'Newest government job notifications across India.', 'examtaza' ),
    'admit-card'  => __( 'Download admit cards for upcoming exams.', 'examtaza' ),
    'results'     => __( 'Latest exam results and merit lists.', 'examtaza' ),
    'syllabus'    => __( 'Official exam syllabus and exam patterns.', 'examtaza' ),
    'answer-key'  => __( 'Provisional and final answer keys.', 'examtaza' ),
    'admission'   => __( 'College, university and course admissions.', 'examtaza' ),
);
?>
<section class="hero">
    <div class="container">
        <h1><?php esc_html_e( 'Latest Sarkari Jobs, Results & Admit Cards', 'examtaza' ); ?></h1>
        <p><?php esc_html_e( 'Your one-stop portal for government jobs, exam results, admit cards, syllabus, answer keys and admission updates — fast, free and mobile-friendly.', 'examtaza' ); ?></p>
        <form role="search" method="get" class="hero-search" action="<?php echo esc_url( home_url( '/' ) ); ?>">
            <input type="search" name="s" placeholder="<?php esc_attr_e( 'Search SSC, UPSC, Railway, Banking…', 'examtaza' ); ?>" />
            <button type="submit"><?php esc_html_e( 'Search', 'examtaza' ); ?></button>
        </form>
    </div>
</section>

<section class="section" style="padding-top:32px">
    <div class="container">
        <div class="section-head">
            <h2><?php esc_html_e( 'Browse by Category', 'examtaza' ); ?></h2>
            <p><?php esc_html_e( 'Pick a category to see the latest updates.', 'examtaza' ); ?></p>
        </div>
        <div class="cat-grid">
            <?php
            $terms = get_terms( array( 'taxonomy' => 'job_category', 'hide_empty' => false ) );
            if ( ! is_wp_error( $terms ) && $terms ) {
                foreach ( $terms as $t ) {
                    $icon = isset( $cat_icons[ $t->slug ] ) ? $cat_icons[ $t->slug ] : '★';
                    echo '<a class="cat-card" href="' . esc_url( get_term_link( $t ) ) . '">';
                    echo '<span class="cat-icon">' . esc_html( $icon ) . '</span>';
                    echo '<div class="cat-title">' . esc_html( $t->name ) . '</div>';
                    echo '</a>';
                }
            }
            ?>
        </div>
    </div>
</section>

<section class="section" style="padding-top:8px">
    <div class="container">
        <div class="layout">
            <div>
                <?php
                $terms = get_terms( array( 'taxonomy' => 'job_category', 'hide_empty' => true, 'number' => 4 ) );
                if ( ! is_wp_error( $terms ) && $terms ) {
                    foreach ( $terms as $t ) {
                        $q = new WP_Query( array(
                            'post_type'      => 'job',
                            'posts_per_page' => 6,
                            'tax_query'      => array( array( 'taxonomy' => 'job_category', 'terms' => $t->term_id ) ),
                        ) );
                        if ( ! $q->have_posts() ) continue;
                        echo '<div class="post-list" style="margin-bottom:20px">';
                        echo '<div class="post-list-head"><span>' . esc_html( $t->name ) . '</span><a href="' . esc_url( get_term_link( $t ) ) . '">' . esc_html__( 'View All →', 'examtaza' ) . '</a></div>';
                        $i = 0;
                        while ( $q->have_posts() ) { $q->the_post(); $i++;
                            echo '<a class="post-row" href="' . esc_url( get_permalink() ) . '">';
                            echo '<span class="date">' . esc_html( get_the_date( 'd M' ) ) . '</span>';
                            echo '<span class="title">' . esc_html( get_the_title() );
                            if ( $i <= 2 ) echo '<span class="badge-new">New</span>';
                            echo '</span></a>';
                        }
                        echo '</div>';
                        wp_reset_postdata();
                    }
                } else { ?>
                    <div class="notice">
                        <h2><?php esc_html_e( 'No posts yet', 'examtaza' ); ?></h2>
                        <p><?php esc_html_e( 'Add your first Job Post from the WordPress admin → Job Posts.', 'examtaza' ); ?></p>
                    </div>
                <?php }
                ?>
            </div>
            <?php get_sidebar(); ?>
        </div>
    </div>
</section>

<section class="section" style="background:var(--surface-muted)">
    <div class="container">
        <div class="section-head">
            <h2><?php esc_html_e( 'How To Use ExamTaza', 'examtaza' ); ?></h2>
            <p><?php esc_html_e( 'Three quick steps to never miss an update.', 'examtaza' ); ?></p>
        </div>
        <div class="how-grid">
            <div class="how-card"><div class="step-num">1</div><h3><?php esc_html_e( 'Choose a category', 'examtaza' ); ?></h3><p style="color:var(--muted-foreground);font-size:14px"><?php esc_html_e( 'Jobs, Results, Admit Cards, Syllabus, Answer Keys or Admission.', 'examtaza' ); ?></p></div>
            <div class="how-card"><div class="step-num">2</div><h3><?php esc_html_e( 'Open the update', 'examtaza' ); ?></h3><p style="color:var(--muted-foreground);font-size:14px"><?php esc_html_e( 'Read full details with important dates, fees and links.', 'examtaza' ); ?></p></div>
            <div class="how-card"><div class="step-num">3</div><h3><?php esc_html_e( 'Apply / Download', 'examtaza' ); ?></h3><p style="color:var(--muted-foreground);font-size:14px"><?php esc_html_e( 'Use the official link to apply or download.', 'examtaza' ); ?></p></div>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="disclaimer-box">
            <span style="font-size:20px">ℹ️</span>
            <span><?php echo esc_html( examtaza_disclaimer_text() ); ?></span>
        </div>
    </div>
</section>

<?php get_footer();
