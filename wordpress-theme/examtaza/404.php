<?php get_header(); ?>
<section class="section">
    <div class="container">
        <div class="notice">
            <h1>404</h1>
            <h2><?php esc_html_e( 'Page Not Found', 'examtaza' ); ?></h2>
            <p style="color:var(--muted-foreground)"><?php esc_html_e( 'The page you are looking for does not exist or has been moved.', 'examtaza' ); ?></p>
            <a class="btn btn-primary" href="<?php echo esc_url( home_url( '/' ) ); ?>" style="margin-top:14px"><?php esc_html_e( 'Back to Home', 'examtaza' ); ?></a>
        </div>
    </div>
</section>
<?php get_footer();
