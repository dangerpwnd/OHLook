$(".contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();
 
    $.ajax({
        type: "POST",
        url: "assets/php/send.php",
        data: "name=" + name + "&email=" + email + "&phone=" + phone + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    console.log("Form successful");
    $( "#success" ).removeClass( "hidden" );
}