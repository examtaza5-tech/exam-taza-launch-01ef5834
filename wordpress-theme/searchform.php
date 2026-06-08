<form role="search" method="get" class="header-search" action="<?php echo esc_url( home_url( '/' ) ); ?>">
    <input type="search" name="s" placeholder="<?php esc_attr_e( 'Search…', 'examtaza' ); ?>" value="<?php echo get_search_query(); ?>" />
</form>
