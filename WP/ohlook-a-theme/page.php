<?php get_header(); ?>
    
    <?php while(have_posts()) {
        the_post(); ?>
    <?php }

?>

        <div class="content">
            <div class="subCont2">
                <h2><?php the_title(); ?></h2>
                <p><?php the_content() ?></p>
            </div>
        </div>

<?php get_footer(); ?>