$(".contactForm").submit(function(event){
    // cancels the form submission
    // event.preventDefault();
    submitForm();
});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();

    var url = "https://ohlookmail.azurewebsites.net/api/MailTrigger?code=tIvGY63Giy3OwzJdotXhwJPJnZPAp6WWHERxQGd8c/v2Tk3X3PB9oA==&name=" + name + "&email=" + email + "&phone=" + phone + "&message=" + message
 
    $.ajax({
        type: "POST",
        url: url,
        data: "",
        error: function(){
            console.log("ajax failed");
        },
        success : function(text){
                formSuccess();
            }
        }
    );
}
function formSuccess(){
    console.log("Form successful");
    $( "#success" ).removeClass( "hidden" );
    document.getElementById("contactForm").reset();
}