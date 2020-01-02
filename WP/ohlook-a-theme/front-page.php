<?php get_header(); ?>

<div class="indexGrid playFont">
        <div class="indexPanel indexPanel1">
            <a class="indexLink" target="_blank"
                href="https://buy.ticketstothecity.com/venue.php?org_id=134">Tickets</a>
        </div>
        <div class="indexPanel indexPanel2">
            <a class="indexLink" href="class.html">Classes</a>
        </div>
        <div class="indexNews">
        <?php while(have_posts()) {
            the_post(); ?>
            <h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>
            <?php the_excerpt(); ?>
            <hr>
        <?php }

        ?>
        </div>
        <div class="indexPanel indexPanel3">
            <a class="indexLink" href="./contact-us">Contact</a>
        </div>
        <div class="indexPanel indexPanel4">
            <a class="indexLink" href="./party">Parties</a>
        </div>
        <div class="indexPanel indexSeason">
            <a class='indexLink' href="./productions">Season</a>
        </div>
        <div class="indexPanel indexPanel5">
            <a class="indexLink" href="./about-us">About Us</a>
        </div>
        <div class="indexPanel indexPanel6">
            <a class="indexLink" href="./auditions">Auditions</a>

        </div>
        <div class="indexPanel indexPanel7">

            <a class="indexLink" target="_blank" href="https://app.akadadance.com/customer/login?schoolId=ak603481j">Account
                Login</a>
        </div>
    </div>


<?php get_footer(); ?>