jQuery(document).ready(
    function () {
        jQuery('.card').mouseenter(function () {
            jQuery(this).toggleClass('is-flipped');
        });
        jQuery('.card').mouseleave(function () {
            jQuery(this).toggleClass('is-flipped');
        });
        jQuery('.card').click(function () {
            jQuery(this).toggleClass('is-flipped');
        });
    });
