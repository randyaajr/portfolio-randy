function sendMail(contactForm) {
    emailjs
        .send("gmail", "template_48uc5tl", {
            from_name: contactForm.name.value,
            from_email: contactForm.email.value,
            subject: contactForm.subject.value,
            portfolio_project_request: contactForm.message.value,
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );

    return false;
}