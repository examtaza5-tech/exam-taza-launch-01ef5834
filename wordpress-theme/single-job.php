<?php
/** Single Job Post — premium design @package ExamTaza */
get_header();
while ( have_posts() ) : the_post();
    $pid           = get_the_ID();
    $title_hi      = get_post_meta( $pid, '_examtaza_subtitle_hi', true );
    $content_hi    = get_post_meta( $pid, '_examtaza_content_hi', true );
    $age_limit     = get_post_meta( $pid, '_examtaza_age_limit', true );
    $conclusion    = get_post_meta( $pid, '_examtaza_conclusion', true );
    $dates         = examtaza_parse_rows( get_post_meta( $pid, '_examtaza_important_dates', true ), 2 );
    $fees          = examtaza_parse_rows( get_post_meta( $pid, '_examtaza_application_fee', true ), 2 );
    $vacancy       = examtaza_parse_rows( get_post_meta( $pid, '_examtaza_vacancy_table', true ), 3 );
    $salary        = examtaza_parse_rows( get_post_meta( $pid, '_examtaza_salary_table', true ), 2 );
    $selection     = examtaza_parse_lines( get_post_meta( $pid, '_examtaza_selection_process', true ) );
    $how_to_apply  = examtaza_parse_lines( get_post_meta( $pid, '_examtaza_how_to_apply', true ) );
    $links         = examtaza_parse_rows( get_post_meta( $pid, '_examtaza_important_links', true ), 3 );
    $faqs          = examtaza_parse_faqs( get_post_meta( $pid, '_examtaza_faqs', true ) );
    $terms         = get_the_terms( $pid, 'job_category' );
?>
<section class="section">
    <div class="container">
        <div class="layout">
            <div>
                <article class="article-card">
                    <div class="article-meta">
                        <?php if ( $terms && ! is_wp_error( $terms ) ) {
                            $t = $terms[0];
                            echo '<a class="badge" href="' . esc_url( get_term_link( $t ) ) . '">' . esc_html( $t->name ) . '</a>';
                        } ?>
                        <span>📅 <?php echo esc_html( get_the_date( 'd M Y' ) ); ?></span>
                        <span>👁 <?php echo esc_html( get_post_meta( $pid, '_examtaza_views', true ) ?: '—' ); ?></span>
                    </div>

                    <h1 class="article-title" data-en="<?php echo esc_attr( get_the_title() ); ?>" data-hi="<?php echo esc_attr( $title_hi ); ?>"><?php the_title(); ?></h1>

                    <?php if ( has_excerpt() ) : ?>
                        <p class="article-summary"><?php echo esc_html( get_the_excerpt() ); ?></p>
                    <?php endif; ?>

                    <?php if ( $content_hi ) : ?>
                        <div class="lang-switch" role="tablist" data-lang-switch>
                            <button type="button" class="is-active" data-lang="en">English</button>
                            <button type="button" data-lang="hi">हिंदी</button>
                        </div>
                    <?php endif; ?>

                    <div class="article-content" data-lang-en><?php the_content(); ?></div>
                    <?php if ( $content_hi ) : ?>
                        <div class="article-content" data-lang-hi style="display:none"><?php echo wp_kses_post( $content_hi ); ?></div>
                    <?php endif; ?>

                    <?php if ( $dates ) : ?>
                    <div class="block">
                        <div class="block-head">📅 <?php esc_html_e( 'Important Dates', 'examtaza' ); ?></div>
                        <div class="block-body table-wrap">
                            <table class="table-modern">
                                <thead><tr><th><?php esc_html_e( 'Event', 'examtaza' ); ?></th><th><?php esc_html_e( 'Date', 'examtaza' ); ?></th></tr></thead>
                                <tbody><?php foreach ( $dates as $r ) : ?>
                                    <tr><td><?php echo esc_html( $r[0] ); ?></td><td><?php echo esc_html( $r[1] ); ?></td></tr>
                                <?php endforeach; ?></tbody>
                            </table>
                        </div>
                    </div>
                    <?php endif; ?>

                    <?php if ( $fees ) : ?>
                    <div class="block">
                        <div class="block-head">💰 <?php esc_html_e( 'Application Fee', 'examtaza' ); ?></div>
                        <div class="block-body table-wrap">
                            <table class="table-modern">
                                <thead><tr><th><?php esc_html_e( 'Category', 'examtaza' ); ?></th><th><?php esc_html_e( 'Fee', 'examtaza' ); ?></th></tr></thead>
                                <tbody><?php foreach ( $fees as $r ) : ?>
                                    <tr><td><?php echo esc_html( $r[0] ); ?></td><td><?php echo esc_html( $r[1] ); ?></td></tr>
                                <?php endforeach; ?></tbody>
                            </table>
                        </div>
                    </div>
                    <?php endif; ?>

                    <?php if ( $age_limit ) : ?>
                    <div class="block">
                        <div class="block-head">🎂 <?php esc_html_e( 'Age Limit', 'examtaza' ); ?></div>
                        <div class="block-body" style="padding:14px 16px"><?php echo esc_html( $age_limit ); ?></div>
                    </div>
                    <?php endif; ?>

                    <?php if ( $vacancy ) : ?>
                    <div class="block">
                        <div class="block-head">📋 <?php esc_html_e( 'Vacancy Details', 'examtaza' ); ?></div>
                        <div class="block-body table-wrap">
                            <table class="table-modern">
                                <thead><tr><th><?php esc_html_e( 'Post Name', 'examtaza' ); ?></th><th><?php esc_html_e( 'Vacancy', 'examtaza' ); ?></th><th><?php esc_html_e( 'Qualification', 'examtaza' ); ?></th></tr></thead>
                                <tbody><?php foreach ( $vacancy as $r ) : ?>
                                    <tr><td><?php echo esc_html( $r[0] ); ?></td><td><?php echo esc_html( $r[1] ); ?></td><td><?php echo esc_html( $r[2] ); ?></td></tr>
                                <?php endforeach; ?></tbody>
                            </table>
                        </div>
                    </div>
                    <?php endif; ?>

                    <?php if ( $salary ) : ?>
                    <div class="block">
                        <div class="block-head">💵 <?php esc_html_e( 'Salary', 'examtaza' ); ?></div>
                        <div class="block-body table-wrap">
                            <table class="table-modern">
                                <thead><tr><th><?php esc_html_e( 'Post', 'examtaza' ); ?></th><th><?php esc_html_e( 'Pay Scale', 'examtaza' ); ?></th></tr></thead>
                                <tbody><?php foreach ( $salary as $r ) : ?>
                                    <tr><td><?php echo esc_html( $r[0] ); ?></td><td><?php echo esc_html( $r[1] ); ?></td></tr>
                                <?php endforeach; ?></tbody>
                            </table>
                        </div>
                    </div>
                    <?php endif; ?>

                    <?php if ( $selection ) : ?>
                    <div class="block">
                        <div class="block-head">✅ <?php esc_html_e( 'Selection Process', 'examtaza' ); ?></div>
                        <div class="block-body"><ol class="steps"><?php foreach ( $selection as $s ) : ?><li><?php echo esc_html( $s ); ?></li><?php endforeach; ?></ol></div>
                    </div>
                    <?php endif; ?>

                    <?php if ( $how_to_apply ) : ?>
                    <div class="block">
                        <div class="block-head">📝 <?php esc_html_e( 'How To Apply', 'examtaza' ); ?></div>
                        <div class="block-body"><ol class="steps"><?php foreach ( $how_to_apply as $s ) : ?><li><?php echo esc_html( $s ); ?></li><?php endforeach; ?></ol></div>
                    </div>
                    <?php endif; ?>

                    <?php if ( $links ) : ?>
                    <div class="block">
                        <div class="block-head">🔗 <?php esc_html_e( 'Important Links', 'examtaza' ); ?></div>
                        <div class="block-body">
                            <div class="links-grid">
                                <?php foreach ( $links as $r ) :
                                    $label = $r[0]; $url = $r[1]; $type = $r[2] ?: 'official';
                                    if ( ! $url ) continue; ?>
                                    <a class="link-card" data-type="<?php echo esc_attr( $type ); ?>" href="<?php echo esc_url( $url ); ?>" target="_blank" rel="noopener">
                                        <span class="label"><?php echo esc_html( $label ); ?></span>
                                        <span class="arrow">→</span>
                                    </a>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                    <?php endif; ?>

                    <?php if ( $faqs ) : ?>
                    <div class="block">
                        <div class="block-head">❓ <?php esc_html_e( 'Frequently Asked Questions', 'examtaza' ); ?></div>
                        <div class="block-body">
                            <?php foreach ( $faqs as $f ) : ?>
                                <details class="faq-item">
                                    <summary><?php echo esc_html( $f['q'] ); ?></summary>
                                    <div class="answer"><?php echo esc_html( $f['a'] ); ?></div>
                                </details>
                            <?php endforeach; ?>
                        </div>
                    </div>
                    <?php endif; ?>

                    <?php if ( $conclusion ) : ?>
                    <div class="block">
                        <div class="block-head">📌 <?php esc_html_e( 'Conclusion', 'examtaza' ); ?></div>
                        <div class="block-body" style="padding:14px 16px"><?php echo esc_html( $conclusion ); ?></div>
                    </div>
                    <?php endif; ?>
                </article>

                <div class="disclaimer-box">
                    <span style="font-size:20px">ℹ️</span>
                    <span><?php echo esc_html( examtaza_disclaimer_text() ); ?></span>
                </div>

                <?php if ( comments_open() || get_comments_number() ) : comments_template(); endif; ?>
            </div>
            <?php get_sidebar(); ?>
        </div>
    </div>
</section>
<?php endwhile;
get_footer();
