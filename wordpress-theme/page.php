<?php
/** Default page template @package ExamTaza */
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
