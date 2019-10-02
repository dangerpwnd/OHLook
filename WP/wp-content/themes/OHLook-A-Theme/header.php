<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset=<?php bloginfo( 'charset' ); ?>
    <title><?php wp_title(); ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="stylesheet" href="<?php echo get_bloginfo('template_directory'); ?>/style.css">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<nav>
        <div class="navcontainer">
            <div class="navlogo">
                <a class="newsLink" href="index.php"><img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/logo.png" alt="OHLOOK Logo" /></a>
            </div>
            <div class="navnews"><a class="newsLink" target="_blank" href="https://app.akadadance.com/customer/login?schoolId=ak603481j"></a>
            </div>
            <div class="navfirst">
                <div class="toggle-btn">
                    <span class="one"></span>
                    <span class="two"></span>
                </div>
                <div class="menu">
                    <div class="data">
                        <ul>
                            <li class="navTop">Navigation</li>
                            <li class="navTop"><a class="navlink" href="about.php">OHLOOK</a>
                                <ul>
                                    <li class="navSub"><a class="navlink" href="awards.php">Awards</a></li>
                                    <li class="navSub"><a class="navlink" href="grads.php">Grads</a></li>
                                    <li class="navSub"><a class="navlink" href="contact.php">Contact</a></li>
                                </ul>
                            </li>
                            <li class="navTop"><a class="navlink" href="productions.php">Productions</a>
                                <ul>
                                    <li class="navSub"><a class="navlink" href="auditions.php">Auditions</a></li>
                                    <li class="navSub"><a class="navlink" href="productions.php">Current</a></li>
                                    <li class="navSub"><a class="navlink" href="latenight.php">Late Night</a></li>
                                </ul>
                            </li>
                            <li class="navTop"><a class="navlink" href="class.php">Class</a>
                                <ul>
                                    <li class="navSub"><a class="navlink" href="dance.php">Dance</a></li>
                                    <li class="navSub"><a class="navlink" href="theater.php">Theater</a></li>
                                    <li class="navSub"><a class="navlink" href="voice.php">Voice</a></li>
                                    <li class="navSub"><a class="navlink" href="masterclass.php">Masterclass</a></li>
                                </ul>
                            </li>
                            <li class="navTop"><a class="navlink" href="donate.php">Donate</a>
                                <ul>
                                    <li class="navSub"><a class="navlink" href="donate.php">How To</a></li>
                                    <li class="navSub"><a class="navlink" href="sponsors.php">Sponsors</a></li>
                                </ul>
                            </li>
                            <li class="navTop"><a class="navlink" href="purchase.php">Tickets</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </nav>
    <div id="content" class="site-content">