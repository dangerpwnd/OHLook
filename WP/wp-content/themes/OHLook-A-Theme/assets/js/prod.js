$(document).ready(
    function () {
        $('.card').mouseenter(function () {
            $(this).toggleClass('is-flipped');
        });
        $('.card').mouseleave(function () {
            $(this).toggleClass('is-flipped');
        });
        $('.card').click(function () {
            $(this).toggleClass('is-flipped');
        });
    });
