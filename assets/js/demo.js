document.getElementById('submitsuccess').style.display = "none"
var url_string = window.location.href
var url = new URL(url_string);
var form = url.searchParams.get("form");
console.log(form)
if (form == "sent"){
  document.getElementById('demoform').style.display = "none"
  document.getElementById('submitsuccess').style.display = "block"

}


function submitToAPI(e) {
       e.preventDefault();
       // var URL = "https://bne5cd6xe4.execute-api.us-east-1.amazonaws.com/default";

            // var Namere = /[A-Za-z]{1}[A-Za-z]/;
            // if (!Namere.test($("#name-input").val())) {
            //              alert ("Name can not less than 2 char");
            //     return;
            // }
            // var mobilere = /[0-9]{10}/;
            // if (!mobilere.test($("#phone-input").val())) {
            //     alert ("Please enter valid mobile number");
            //     return;
            // }
            // if ($("#email-input").val()=="") {
            //     alert ("Please enter your email id");
            //     return;
            // }
            //
            // var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
            // if (!reeamil.test($("#email-input").val())) {
            //     alert ("Please enter valid email address");
            //     return;
            // }

       var name = $("#name-input").val();
       var firm = $("#firm-input").val();
       var email = $("#email-input").val();
       var title = $("#title-input").val();
       var data = {
          name : name,
          firm : firm,
          email : email,
          title : title
        };

       $.ajax({
         type: "POST",
         url : "https://bne5cd6xe4.execute-api.us-east-1.amazonaws.com/default",
         dataType: "json",
         crossDomain: "true",
         contentType: "application/json; charset=utf-8",
         data: JSON.stringify(data),


         success: function () {
           // clear form and show a success message
           alert("Successfull");
           // document.getElementById("contact-form").reset();
       // location.reload();
         },
         error: function () {
           // show an error message
           alert("UnSuccessfull");
         }});
     }
