// $(function () {

//     $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
//         preventSubmit: true,
//         submitError: function ($form, event, errors) {
//         },
//         submitSuccess: function ($form, event) {
//             event.preventDefault();
//             var name = $("input#name").val();
//             var email = $("input#email").val();
//             var subject = $("input#subject").val();
//             var message = $("textarea#message").val();

//             $this = $("#sendMessageButton");
//             $this.prop("disabled", true);

//             $.ajax({
//                 url: "contact.php",
//                 type: "POST",
//                 data: {
//                     name: name,
//                     email: email,
//                     subject: subject,
//                     message: message
//                 },
//                 cache: false,
//                 success: function () {
//                     $('#success').html("<div class='alert alert-success'>");
//                     $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                             .append("</button>");
//                     $('#success > .alert-success')
//                             .append("<strong>Your message has been sent. </strong>");
//                     $('#success > .alert-success')
//                             .append('</div>');
//                     $('#contactForm').trigger("reset");
//                 },
//                 error: function () {
//                     $('#success').html("<div class='alert alert-danger'>");
//                     $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                             .append("</button>");
//                     $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
//                     $('#success > .alert-danger').append('</div>');
//                     $('#contactForm').trigger("reset");
//                 },
//                 complete: function () {
//                     setTimeout(function () {
//                         $this.prop("disabled", false);
//                     }, 1000);
//                 }
//             });
//         },
//         filter: function () {
//             return $(this).is(":visible");
//         },
//     });

//     $("a[data-toggle=\"tab\"]").click(function (e) {
//         e.preventDefault();
//         $(this).tab("show");
//     });
// });

// $('#name').focus(function () {
//     $('#success').html('');
// });


// $(document).ready(function () {
//     $("#contactForm").validate({
//         rules: {
//             name: {
//                 required: true
//             },
//             email: {
//                 required: true,
//                 email: true
//             },
//             subject: {
//                 required: true
//             },
//             message: {
//                 required: true
//             }
//         },
//         messages: {
//             name: {
//                 required: "Please enter your name"
//             },
//             email: {
//                 required: 'Please Enter Email id',
//                 email: 'Enter Valid Email id'
//             },
//             subject: {
//                 required: "Please mention subject"
//             },
//             message: {
//                 required: "Please enter your message"
//             }
//         }
//     }),
//         $("#contactForm").submit((e) => {
//             e.preventDefault()
//             $.ajax({
//                 url: "https://script.google.com/macros/s/AKfycby11XxWFYdT2A-r-uZhqofFcex8o__RIiHBv12l5g/exec",
//                 data: $("#contactForm").serialize(),
//                 method: "post",
//                 success: function (response) {
//                     alert("Form submitted successfully")
//                     window.location.reload()
//                     //window.location.href="https://google.com"
//                 },
//                 error: function (err) {
//                     alert("Something Error")

//                 }
//             })
//         }),

//         $("#id buuton").on
// })

$(document).ready(function () {
    $("#contactForm").validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Enter a valid name",
            },
            email: {
                required: 'Please Enter Email id',
                email: 'Enter Valid Email id'
            },
            subject: {
                required: 'Please mention Subject'
            },
            message: {
                required: 'Please leave some message'
            }
        }

    });

})

function validateForm() {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let subject = document.forms["contactForm"]["subject"].value;
    let message = document.forms["contactForm"]["message"].value;
    if (name == "" || email == "" || subject == "" || message == "") {
        alert("All feilds must be filled out");
        return false;
    }
    else if(!regName.test(name)){
        alert("Enter valid Name");
        return false;
    }

    else {
        $("#contactForm").submit((e) => {
            e.preventDefault()
            $.ajax(
                {
                    url: "https://script.google.com/macros/s/AKfycby11XxWFYdT2A-r-uZhqofFcex8o__RIiHBv12l5g/exec",
                    data: $("#contactForm").serialize(),
                    method: "post",
                    success: function (response) {
                        alert("Form submitted successfully")
                        window.location.reload()
                        //window.location.href="https://google.com"
                    },
                    error: function (err) {
                        alert("Something Error")
                    }
                })

        })
    }
}






