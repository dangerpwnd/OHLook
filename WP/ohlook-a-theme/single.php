<?php get_header();

    while(have_posts()) {
        the_post(); ?>
    <?php }

?>

<div class="content">
            <div class="subCont2">
            <div class="post-item">
                <h2 class="headline headline--medium headline--post-title"><a href="<?php the_permalink();?>"><?php the_title();?></a></h2>
                <div class="generic-content">
                    <p><?php the_content(); ?></p>
                    <!-- <a><a class btn btn--blue href="<?php the_permalink() ?>">Continue Reading</a></p> -->
                </div>
                </div>
            </div>
        </div>

<?php get_footer(); ?>