<?php 
/* 
Template Name: Contact Template
Template Post Type: page
*/
?>

<?php get_header()?>

<div class="mainContainer">
        <div class="contactInfo contactLeft">
            <h1 class="contactTitle">Our Location</h1>
            <p>1631 W Northwest Hwy, Grapevine, TX 76051</p>
            <p>(817)421-2825</p>
            <div class="mapFlex">
                <iframe width="500" height="500" style="border:0"
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:Ei4xNjMxIFcgTm9ydGh3ZXN0IEh3eSwgR3JhcGV2aW5lLCBUWCA3NjA1MSwgVVNBIjESLwoUChIJ2-eEN8vUTYYRUXgvZVbOXacQ3wwqFAoSCREADWQ0K0yGEY3qXjrCgWbN&key=AIzaSyCfk9ZhUMrGDzRQcN43SD6_KsG70vTiLuY"
                    allowfullscreen></iframe>
            </div>
            <div class="newsLetter">
                <form method="post" action="http://oi.vresp.com?fid=e3b0954334" target="vr_optin_popup"
                    onsubmit="window.open('http://www.verticalresponse.com', 'vr_optin_popup' ); return true;">
                        <p>Sign up for our e-mail list and receive announcments about Ohlook productions, auditions and
                            classes!</p>
                    <label>Email Address:</label>
                    <input name="email_address" />
                    <button type="submit">Join Now</button>
                    <p>Email & Social Media Marketing by <a target="_blank" title="Email & Social Media Marketing by VerticalResponse"
                            href="http://www.verticalresponse.com" rel="nofollow">VerticalResponse</a></p>

                </form>
            </div>
        </div>
        <div class="contactInfo">
            <h1 class="contactTitle">Get In Touch</h1>
            <form class="contactForm" id="contactForm" method="post" action="javascript:void(0);">
                <ul class="formFlex">
                    <li>
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name here" required>
                    </li>
                    <li>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email here" required>
                    </li>
                    <li>
                        <label for="phone">Phone</label>
                        <input type="tel" name="phone" id="phone" placeholder="Enter your phone here" required>
                    </li>
                    <li>
                        <label for="message">Message</label>
                        <textarea rows="6" name="message" id="message" placeholder="Enter your message here" required></textarea>
                    </li>
                    <li>
                        <div class="g-recaptcha" data-sitekey="6LfWCqsUAAAAAGxWeQoekaeHRXOJ-RbH85UzXi_O"></div>
                    </li>
                    <li>
                        <button type="submit" name="submit">Submit</button>
                    </li>
                    <li id="success" class="success hidden">Message Sent!</li>
                </ul>
            </form>
            <h1 class="contactTitle">Email Us</h1>
            <div class="contactFlex">
                <div class="contactClick">
                    <h2 class="contactLink"><a href="mailto:jlord@ohlookcreative.com">Artistic Director</a></h2>
                </div>
                <div class="contactClick">
                    <h2 class="contactLink"><a href="mailto:Devin@ohlookperform.com">Director of Dance</a></h2>
                </div>
                <div class="contactClick">
                    <h2 class="contactLink"><a href="mailto:heather.ganson@ohlookperform.com">Board Director</a></h2>
                </div>
                <div class="contactClick">
                    <h2 class="contactLink"><a href="mailto:taylorwallis@ymail.com">Education Director</a></h2>
                </div>
                <div class="contactClick">
                    <h2 class="contactLink"><a href="mailto:heather.ganson@ohlookperform.com">Marketing Director</a>
                    </h2>
                </div>
            </div>
            <h1 class="contactTitle">Follow Us</h1>
            <div class="bigIcons socialLinks links">
                <a target="_blank" href="https://www.facebook.com/OHLOOKPAC/"><i class="fab fa-facebook"></i></a>
                <a target="_blank" href="https://twitter.com/OHLOOKpac"><i class="fab fa-twitter"></i></a>
                <a target="_blank" href="https://www.instagram.com/OHLOOKpac/"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>

<?php get_footer() ?>