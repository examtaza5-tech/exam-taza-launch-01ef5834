<?php
/** Default page template @package ExamTaza */
get_header(); ?>
<section class="section">
    <div class="container">
        <div class="layout">
            <div>
                <?php while ( have_posts() ) : the_post(); ?>
                    <article class="article-card">
                        <h1 class="article-title"><?php the_title(); ?></h1>
                        <div class="article-content"><?php the_content(); ?></div>
                    </article>
                <?php endwhile; ?>
            </div>
            <?php get_sidebar(); ?>
        </div>
    </div>
</section>
<?php get_footer();
