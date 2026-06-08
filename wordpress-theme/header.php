<?php
/**
 * Site header
 * @package ExamTaza
 */
$socials = examtaza_socials();
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="profile" href="https://gmpg.org/xfn/11" />
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="skip-link" href="#main"><?php esc_html_e( 'Skip to content', 'examtaza' ); ?></a>

<header class="site-header" role="banner">
    <div class="top-bar">
        <div class="container">
            <span class="tagline"><?php esc_html_e( "India's trusted source for Sarkari Jobs, Results & Admit Cards", 'examtaza' ); ?></span>
            <div class="socials">
                <?php if ( $socials['instagram'] ) : ?><a href="<?php echo esc_url( $socials['instagram'] ); ?>" target="_blank" rel="noopener" aria-label="Instagram">IG</a><?php endif; ?>
                <?php if ( $socials['youtube'] ) : ?><a href="<?php echo esc_url( $socials['youtube'] ); ?>" target="_blank" rel="noopener" aria-label="YouTube">YT</a><?php endif; ?>
                <?php if ( $socials['telegram'] ) : ?><a href="<?php echo esc_url( $socials['telegram'] ); ?>" target="_blank" rel="noopener" aria-label="Telegram">TG</a><?php endif; ?>
                <?php if ( $socials['whatsapp'] ) : ?><a href="<?php echo esc_url( $socials['whatsapp'] ); ?>" target="_blank" rel="noopener" aria-label="WhatsApp">WA</a><?php endif; ?>
            </div>
        </div>
    </div>

    <div class="container header-main">
        <a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>">
            <?php if ( has_custom_logo() ) {
                the_custom_logo();
            } else { ?>
                <span class="brand-mark">E</span>
                <span class="brand-text">
                    <span class="brand-name"><?php bloginfo( 'name' ); ?><span>.in</span></span>
                    <span class="brand-sub"><?php esc_html_e( 'Jobs · Results · Admit Cards', 'examtaza' ); ?></span>
                </span>
            <?php } ?>
        </a>

        <form role="search" method="get" class="header-search" action="<?php echo esc_url( home_url( '/' ) ); ?>">
            <input type="search" name="s" placeholder="<?php esc_attr_e( 'Search jobs, results, admit cards…', 'examtaza' ); ?>" value="<?php echo get_search_query(); ?>" />
        </form>

        <div class="header-cta">
            <?php if ( $socials['whatsapp'] ) : ?><a class="btn btn-whatsapp" href="<?php echo esc_url( $socials['whatsapp'] ); ?>" target="_blank" rel="noopener">WhatsApp</a><?php endif; ?>
            <?php if ( $socials['telegram'] ) : ?><a class="btn btn-telegram" href="<?php echo esc_url( $socials['telegram'] ); ?>" target="_blank" rel="noopener">Telegram</a><?php endif; ?>
        </div>

        <button class="menu-toggle" aria-label="<?php esc_attr_e( 'Toggle menu', 'examtaza' ); ?>" aria-expanded="false">
            <span></span>
        </button>
    </div>

    <div class="mobile-search">
        <form role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
            <input type="search" name="s" placeholder="<?php esc_attr_e( 'Search…', 'examtaza' ); ?>" value="<?php echo get_search_query(); ?>" />
        </form>
    </div>

    <nav class="main-nav" id="primary-menu" role="navigation" aria-label="<?php esc_attr_e( 'Primary menu', 'examtaza' ); ?>">
        <div class="container">
            <?php
            if ( has_nav_menu( 'primary' ) ) {
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'items_wrap'     => '%3$s',
                    'depth'          => 1,
                ) );
            } else {
                echo '<a href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'Home', 'examtaza' ) . '</a>';
                $terms = get_terms( array( 'taxonomy' => 'job_category', 'hide_empty' => false ) );
                if ( ! is_wp_error( $terms ) ) {
                    foreach ( $terms as $t ) {
                        echo '<a href="' . esc_url( get_term_link( $t ) ) . '">' . esc_html( $t->name ) . '</a>';
                    }
                }
            }
            ?>
        </div>
    </nav>
</header>

<main id="main" class="site-main" role="main">
