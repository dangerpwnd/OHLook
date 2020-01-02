<?php

get_header('ohlook');

?>

        <div class="content">
            <div class="subCont2">
                <h1>Ohlook Performing Arts Center</h1>
                
            <div class="container conatiner--narrow page--section">
                <?php
                    while (have_posts()) {
                    the_post();              
                ?>
                <div class="post-item">
                <h2 class="headline headline--medium headline--post-title"><a href="<?php the_permalink();?>"><?php the_title();?></a></h2>
                <div class="generic-content">
                    <p><?php the_excerpt(); ?></p>
                    <p><a class btn btn--blue href="<?php the_permalink() ?>">Continue Reading</a></p>
                </div>
                </div>
                <?php } ?>

            </div>
        </div>

<?php get_footer('ohlook');?>