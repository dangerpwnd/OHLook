<!DOCTYPE html>
<html <?php language_attributes()?>>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="<?php bloginfo('charset') ?>">
        <?php wp_head();?>
    </head>
    <body <?php body_class(); ?>>
        <nav>
            <div class="navcontainer">
                <div class="navlogo"><a class="newsLink" href="<?php echo site_url() ?>"><img src="<?php echo site_url("/wp-content/themes/ohlook-a-theme/assets/images/logo.png") ?>" alt="Ohlook Logo" /></a></div>
                <div class="navnews"><a class="newsLink" target="_blank" href="<?php echo site_url('/class') ?>"></a></div>
                <div class="navfirst">
                    <div class="toggle-btn">
                        <span class="one"></span>
                        <span class="two"></span>
                    </div>
                    <div class="menu">
                        <div class="data">
                            <ul>
                                <li class="navTop">Navigation</li>
                                <li class="navTop"><a class="navlink" href="<?php echo site_url('/about') ?>">Ohlook</a>
                                    <ul>
                                        <li class="navSub"><a class="navlink" href="<?php echo site_url('/awards') ?>">Awards</a></li>
                                        <li class="navSub"><a class="navlink" href="<?php echo site_url('/grads') ?>">Grads</a></li>
                                        <li class="navSub"><a class="navlink" href="<?php echo site_url('/party') ?>">Parties</a></li>
                                        <li class="navSub"><a class="navlink" href="<?php echo site_url('/contact') ?>">Contact</a></li>
                                    </ul>
                                </li>
                                <li class="navTop"><a class="navlink" href="<?php echo site_url('/productions') ?>">Productions</a>
                                    <ul>
                                        <li class="navSub"><a class="navlink" href="<?php echo site_url('/auditions') ?>">Auditions</a></li>
                                        <li class="navSub"><a class="navlink" href="<?php echo site_url('/productions') ?>">Current</a></li>
                                        <li class="navSub"><a class="navlink" href="<?php echo site_url('/latenight') ?>">Late Night</a></li>
                                    </ul>
                                </li>
                                <li class="navTop"><a class="navlink" href="<?php echo site_url('/class') ?>">Class</a>
                                    <ul>
                                        <li class="navSub"><a class="navlink" href="<?php echo site_url('/dance') ?>">Dance</a></li>
                                        <li class="navSub"><a class="navlink" href="<?php echo site_url('/theater') ?>">Theater</a></li>
                                        <li class="navSub"><a class="navlink" href="<?php echo site_url('/voice') ?>">Voice</a></li>
                                        <li class="navSub"><a class="navlink" href="<?php echo site_url('/materclass') ?>">Masterclass</a></li>
                                    </ul>
                                </li>
                                <li class="navTop"><a class="navlink" href="<?php echo site_url('/donate') ?>">Donate</a>
                                    <ul>
                                        <li class="navSub"><a class="navlink" href="<?php echo site_url('/donate') ?>">How To</a></li>
                                        <li class="navSub"><a class="navlink" href="<?php echo site_url('/sponsor') ?>">Sponsors</a></li>
                                    </ul>
                                </li>
                                <li class="navTop"><a class="navlink" href="p<?php echo site_url('/purchase') ?>">Tickets</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </nav>