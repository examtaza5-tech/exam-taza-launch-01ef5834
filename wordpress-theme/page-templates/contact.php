<?php
/**
 * Template Name: ExamTaza — Contact
 * @package ExamTaza
 */
get_header();
$socials = examtaza_socials();
$email   = get_theme_mod( 'examtaza_contact_email', 'contact@examtaza.in' );
?>
<div class="container page-wrap">
    <div class="static-page">
        <header class="static-head">
            <h1><?php esc_html_e( 'Contact Us', 'examtaza' ); ?></h1>
            <p><?php esc_html_e( "We'd love to hear from you. For corrections, suggestions or business queries, reach out below.", 'examtaza' ); ?></p>
        </header>

        <div class="contact-grid">
            <a class="contact-card" href="mailto:<?php echo esc_attr( $email ); ?>">
                <span class="ico primary"><?php echo examtaza_icon( 'file' ); ?></span>
                <div>
                    <p class="label"><?php esc_html_e( 'Email Us', 'examtaza' ); ?></p>
                    <p class="sub"><?php echo esc_html( $email ); ?></p>
                </div>
            </a>
            <?php if ( $socials['whatsapp'] ) : ?>
            <a class="contact-card" href="<?php echo esc_url( $socials['whatsapp'] ); ?>" target="_blank" rel="noopener">
                <span class="ico whatsapp"><?php echo examtaza_icon( 'message' ); ?></span>
                <div>
                    <p class="label"><?php esc_html_e( 'WhatsApp', 'examtaza' ); ?></p>
                    <p class="sub"><?php esc_html_e( 'Join our group for instant updates', 'examtaza' ); ?></p>
                </div>
            </a>
            <?php endif; ?>
        </div>

        <form class="contact-form" method="post" action="mailto:<?php echo esc_attr( $email ); ?>" enctype="text/plain">
            <h2><?php esc_html_e( 'Send us a message', 'examtaza' ); ?></h2>
            <div class="row">
                <label><span><?php esc_html_e( 'Your Name', 'examtaza' ); ?></span><input type="text" name="name" required /></label>
                <label><span><?php esc_html_e( 'Email', 'examtaza' ); ?></span><input type="email" name="email" required /></label>
            </div>
            <label class="block"><span><?php esc_html_e( 'Message', 'examtaza' ); ?></span><textarea name="message" rows="5" required></textarea></label>
            <button type="submit" class="btn btn-primary"><?php echo examtaza_icon( 'send', 'icon icon-sm' ); ?> <?php esc_html_e( 'Send Message', 'examtaza' ); ?></button>
        </form>

        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); if ( trim( get_the_content() ) ) : ?>
            <div class="prose-article"><?php the_content(); ?></div>
        <?php endif; endwhile; endif; ?>
    </div>
</div>
<?php get_footer();
