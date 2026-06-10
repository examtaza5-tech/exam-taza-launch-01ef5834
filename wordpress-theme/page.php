<?php
/**
 * Default page template — auto-routes well-known slugs to their dedicated
 * ExamTaza templates so the site mirrors the React design out of the box.
 * @package ExamTaza
 */
$slug = is_singular() ? get_post_field( 'post_name', get_queried_object_id() ) : '';
$map  = array(
    'about'           => 'page-templates/about.php',
    'about-us'        => 'page-templates/about.php',
    'contact'         => 'page-templates/contact.php',
    'contact-us'      => 'page-templates/contact.php',
    'disclaimer'      => 'page-templates/disclaimer.php',
    'privacy'         => 'page-templates/privacy.php',
    'privacy-policy'  => 'page-templates/privacy.php',
    'terms'           => 'page-templates/terms.php',
    'terms-and-conditions' => 'page-templates/terms.php',
);
if ( isset( $map[ $slug ] ) && file_exists( get_template_directory() . '/' . $map[ $slug ] ) ) {
    include get_template_directory() . '/' . $map[ $slug ];
    return;
}
get_header(); ?>
<div class="container page-wrap">
    <div class="layout">
        <div>
            <?php while ( have_posts() ) : the_post(); ?>
                <article class="article-card">
                    <div class="article-body">
                        <h1 style="font-size:28px;font-weight:800;letter-spacing:-0.02em;margin:0 0 12px"><?php the_title(); ?></h1>
                        <div class="article-content"><?php the_content(); ?></div>
                    </div>
                </article>
            <?php endwhile; ?>
        </div>
        <div class="sidebar-col"><?php get_sidebar(); ?></div>
    </div>
</div>
<?php get_footer();
