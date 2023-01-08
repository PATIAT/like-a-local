/* Sourced from EmailJS and based upon Code Institute lesson */
function sendMail(contactForm) {
    emailjs.send("service_avr8zuo", "template_yjj0h8j", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "london_knowledge": contactForm.londonknowledge.value,
        "tour_date": contactForm.tourdate.value,
        "message": contactForm.textarea.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            let comment = null;
            comment = "Thanks for your message, we will respond as soon as we can!";
            document.querySelector("#email-modal-comments").innerHTML = comment;
        },
        function(error) {
            console.log("FAILED", error);
            let comment = null;
            comment = "Your message was unsuccessful, please try again!";
            document.querySelector("#email-modal-comments").innerHTML = comment;
        }
    );
    return false; // To block from loading a new page
}