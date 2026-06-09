<?php
/** Single Job Post — premium design @package ExamTaza */
get_header();
$socials = examtaza_socials();
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
    $term          = ( $terms && ! is_wp_error( $terms ) ) ? $terms[0] : null;
?>
<div class="container page-wrap">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Home', 'examtaza' ); ?></a>
        <?php if ( $term ) : ?>
            <span class="sep">/</span><a href="<?php echo esc_url( get_term_link( $term ) ); ?>"><?php echo esc_html( $term->name ); ?></a>
        <?php endif; ?>
        <span class="sep">/</span><span class="current"><?php the_title(); ?></span>
    </nav>

    <div class="layout">
        <div>
            <article class="article-card">
                <div class="article-banner">
                    <?php if ( $term ) : ?>
                        <span class="crumb"><?php echo examtaza_icon( 'folder', 'icon icon-sm' ); ?> <?php echo esc_html( $term->name ); ?></span>
                    <?php endif; ?>
                    <h1 data-en="<?php echo esc_attr( get_the_title() ); ?>" data-hi="<?php echo esc_attr( $title_hi ); ?>"><?php the_title(); ?></h1>
                    <div class="meta">
                        <span><?php echo examtaza_icon( 'calendar', 'icon icon-sm' ); ?> <?php esc_html_e( 'Published', 'examtaza' ); ?> <?php echo esc_html( get_the_date( 'd M Y' ) ); ?></span>
                        <span><?php echo examtaza_icon( 'megaphone', 'icon icon-sm' ); ?> <?php esc_html_e( 'Official Notification', 'examtaza' ); ?></span>
                    </div>
                </div>

                <div class="article-body">
                    <?php if ( $content_hi ) : ?>
                        <div class="lang-switch-row" data-lang-switch>
                            <span class="label"><?php echo examtaza_icon( 'languages', 'icon icon-sm' ); ?> <?php esc_html_e( 'Read in', 'examtaza' ); ?></span>
                            <div class="lang-switch">
                                <button type="button" class="is-active" data-lang="en">English</button>
                                <button type="button" data-lang="hi">हिंदी</button>
                            </div>
                        </div>
                    <?php endif; ?>

                    <?php if ( has_excerpt() ) : ?>
                        <div class="overview-alert"><p><strong><?php esc_html_e( 'Overview:', 'examtaza' ); ?></strong> <?php echo esc_html( get_the_excerpt() ); ?></p></div>
                    <?php endif; ?>

                    <div class="article-content" data-lang-en><?php the_content(); ?></div>
                    <?php if ( $content_hi ) : ?>
                        <div class="article-content" data-lang-hi style="display:none"><?php echo wp_kses_post( $content_hi ); ?></div>
                    <?php endif; ?>

                    <?php if ( $dates ) : ?>
                    <section>
                        <h2 class="article-h2"><?php echo examtaza_icon( 'calendar' ); ?> <?php esc_html_e( 'Important Dates', 'examtaza' ); ?></h2>
                        <div class="table-wrap"><table class="table-modern">
                            <thead><tr><th><?php esc_html_e( 'Event', 'examtaza' ); ?></th><th><?php esc_html_e( 'Date', 'examtaza' ); ?></th></tr></thead>
                            <tbody><?php foreach ( $dates as $r ) : ?><tr><td><?php echo esc_html( $r[0] ); ?></td><td><?php echo esc_html( $r[1] ); ?></td></tr><?php endforeach; ?></tbody>
                        </table></div>
                    </section>
                    <?php endif; ?>

                    <?php if ( $fees ) : ?>
                    <section>
                        <h2 class="article-h2"><?php esc_html_e( '💰 Application Fee', 'examtaza' ); ?></h2>
                        <div class="table-wrap"><table class="table-modern">
                            <thead><tr><th><?php esc_html_e( 'Category', 'examtaza' ); ?></th><th><?php esc_html_e( 'Fee', 'examtaza' ); ?></th></tr></thead>
                            <tbody><?php foreach ( $fees as $r ) : ?><tr><td><?php echo esc_html( $r[0] ); ?></td><td><?php echo esc_html( $r[1] ); ?></td></tr><?php endforeach; ?></tbody>
                        </table></div>
                    </section>
                    <?php endif; ?>

                    <?php if ( $age_limit ) : ?>
                    <section>
                        <h2 class="article-h2"><?php esc_html_e( 'Age Limit', 'examtaza' ); ?></h2>
                        <p><?php echo esc_html( $age_limit ); ?></p>
                    </section>
                    <?php endif; ?>

                    <?php if ( $vacancy ) : ?>
                    <section>
                        <h2 class="article-h2"><?php esc_html_e( 'Vacancy Details', 'examtaza' ); ?></h2>
                        <div class="table-wrap"><table class="table-modern">
                            <thead><tr><th><?php esc_html_e( 'Post Name', 'examtaza' ); ?></th><th><?php esc_html_e( 'Vacancy', 'examtaza' ); ?></th><th><?php esc_html_e( 'Qualification', 'examtaza' ); ?></th></tr></thead>
                            <tbody><?php foreach ( $vacancy as $r ) : ?><tr><td><?php echo esc_html( $r[0] ); ?></td><td><?php echo esc_html( $r[1] ); ?></td><td><?php echo esc_html( $r[2] ); ?></td></tr><?php endforeach; ?></tbody>
                        </table></div>
                    </section>
                    <?php endif; ?>

                    <?php if ( $salary ) : ?>
                    <section>
                        <h2 class="article-h2"><?php esc_html_e( 'Salary / Pay Scale', 'examtaza' ); ?></h2>
                        <div class="table-wrap"><table class="table-modern">
                            <thead><tr><th><?php esc_html_e( 'Post', 'examtaza' ); ?></th><th><?php esc_html_e( 'Pay Scale', 'examtaza' ); ?></th></tr></thead>
                            <tbody><?php foreach ( $salary as $r ) : ?><tr><td><?php echo esc_html( $r[0] ); ?></td><td><?php echo esc_html( $r[1] ); ?></td></tr><?php endforeach; ?></tbody>
                        </table></div>
                    </section>
                    <?php endif; ?>

                    <?php if ( $selection ) : ?>
                    <section>
                        <h2 class="article-h2"><?php echo examtaza_icon( 'list-checks' ); ?> <?php esc_html_e( 'Selection Process', 'examtaza' ); ?></h2>
                        <ol class="steps"><?php foreach ( $selection as $i => $s ) : ?><li><span class="num"><?php echo esc_html( $i + 1 ); ?></span><span><?php echo esc_html( $s ); ?></span></li><?php endforeach; ?></ol>
                    </section>
                    <?php endif; ?>

                    <?php if ( $how_to_apply ) : ?>
                    <section>
                        <h2 class="article-h2"><?php echo examtaza_icon( 'clipboard' ); ?> <?php esc_html_e( 'How To Apply', 'examtaza' ); ?></h2>
                        <ol class="steps outline"><?php foreach ( $how_to_apply as $i => $s ) : ?><li><span class="num"><?php echo esc_html( $i + 1 ); ?></span><span><?php echo esc_html( $s ); ?></span></li><?php endforeach; ?></ol>
                    </section>
                    <?php endif; ?>

                    <?php if ( $links ) : ?>
                    <section>
                        <h2 class="article-h2"><?php esc_html_e( 'Important Links', 'examtaza' ); ?></h2>
                        <div class="links-grid">
                            <?php foreach ( $links as $r ) :
                                $label = $r[0]; $url = $r[1]; $type = $r[2] ?: 'official';
                                if ( ! $url ) continue;
                                $ico_map = array( 'apply' => 'external', 'download' => 'download', 'notification' => 'file', 'official' => 'external' );
                                $ico = isset( $ico_map[ $type ] ) ? $ico_map[ $type ] : 'external';
                            ?>
                                <a class="link-card" data-type="<?php echo esc_attr( $type ); ?>" href="<?php echo esc_url( $url ); ?>" target="_blank" rel="noopener">
                                    <span class="left">
                                        <span class="ico"><?php echo examtaza_icon( $ico ); ?></span>
                                        <span>
                                            <p class="label"><?php echo esc_html( $label ); ?></p>
                                            <p class="type"><?php echo esc_html( ucfirst( $type ) ); ?></p>
                                        </span>
                                    </span>
                                    <span class="cta"><?php esc_html_e( 'Click Here', 'examtaza' ); ?></span>
                                </a>
                            <?php endforeach; ?>
                        </div>
                    </section>
                    <?php endif; ?>

                    <?php if ( $faqs ) : ?>
                    <section>
                        <h2 class="article-h2"><?php esc_html_e( 'Frequently Asked Questions', 'examtaza' ); ?></h2>
                        <div class="faq-list">
                            <?php foreach ( $faqs as $f ) : ?>
                                <details class="faq-item">
                                    <summary><?php echo esc_html( $f['q'] ); ?></summary>
                                    <div class="answer"><?php echo esc_html( $f['a'] ); ?></div>
                                </details>
                            <?php endforeach; ?>
                        </div>
                    </section>
                    <?php endif; ?>

                    <?php if ( $conclusion ) : ?>
                    <div class="conclusion">
                        <h3><?php esc_html_e( 'Conclusion', 'examtaza' ); ?></h3>
                        <p><?php echo esc_html( $conclusion ); ?></p>
                    </div>
                    <?php endif; ?>

                    <div class="join-grid">
                        <?php if ( $socials['whatsapp'] ) : ?>
                        <a class="wa" href="<?php echo esc_url( $socials['whatsapp'] ); ?>" target="_blank" rel="noopener">
                            <span class="ico"><?php echo examtaza_icon( 'message', 'icon icon-lg' ); ?></span>
                            <span><span class="label"><?php esc_html_e( 'Join WhatsApp Group', 'examtaza' ); ?></span></span>
                        </a>
                        <?php endif; ?>
                        <?php if ( $socials['telegram'] ) : ?>
                        <a class="tg" href="<?php echo esc_url( $socials['telegram'] ); ?>" target="_blank" rel="noopener">
                            <span class="ico"><?php echo examtaza_icon( 'send', 'icon icon-lg' ); ?></span>
                            <span><span class="label"><?php esc_html_e( 'Join Telegram Channel', 'examtaza' ); ?></span></span>
                        </a>
                        <?php endif; ?>
                    </div>
                </div>
            </article>

            <div class="disclaimer-box" style="margin-top:24px">
                <?php echo examtaza_icon( 'info', 'icon icon-lg' ); ?>
                <span><?php echo esc_html( examtaza_disclaimer_text() ); ?></span>
            </div>

            <?php if ( comments_open() || get_comments_number() ) : comments_template(); endif; ?>
        </div>

        <div class="sidebar-col">
            <?php get_sidebar(); ?>
        </div>
    </div>
</div>
<?php endwhile;
get_footer();
