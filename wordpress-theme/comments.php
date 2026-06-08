<?php
/** @package ExamTaza */
if ( post_password_required() ) return;
?>
<section class="comments-area">
    <?php if ( have_comments() ) : ?>
        <h3 style="margin-bottom:12px"><?php
            printf(
                esc_html( _n( '%s Comment', '%s Comments', get_comments_number(), 'examtaza' ) ),
                number_format_i18n( get_comments_number() )
            );
        ?></h3>
        <ol class="comment-list">
            <?php wp_list_comments( array( 'style' => 'ol', 'short_ping' => true ) ); ?>
        </ol>
        <?php the_comments_pagination(); ?>
    <?php endif; ?>
    <?php comment_form(); ?>
</section>
