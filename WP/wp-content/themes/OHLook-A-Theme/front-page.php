<?php
/*
Template Name: Home
*/
?>
<?php get_header(); ?>
 <!-- <div class="navnews">
        <h1>Fall Auditions</h1>
        <h1>August 7-8, 10-11</h1>
        <p class="infoClick"><a target="_blank"
                    href="https://ohlookauditions.as.me">Schedule An Audition</a></p>
        </div>
    </div> -->
  <!--Hover/Focus animation over each panel expands single panel-->
  <div class="panels">
    <div class="panel panel1">
      <p><a href="about.php">About Us</a></p>
      <p>OHLOOK</p>
      <p><a target="_blank" href="https://buy.ticketstothecity.com/venue.php?org_id=134">Tickets</a></p>
    </div>
    <div class="panel panel2">
      <p><a href="class.php">Classes</a></p>
      <p>Performing</p>
      <p><a href="masterclass.php">Masterclass</a></p>
    </div>
    <div class="panel panel3">
      <p><a href="auditions.php">Auditions</a></p>
      <p>Arts</p>
      <p><a href="productions.php">Productions</a></p>
    </div>
    <div class="panel panel4">
      <p><a href="contact.php">Contact Us</a></p>
      <p>Center</p>
      <p><a href="donate.php">Donate</a></p>
    </div>
  </div>
  
  <?php do_action( 'wp_enqueue_scripts', 'index_wp_script' ); ?>

<?php get_footer(); ?>