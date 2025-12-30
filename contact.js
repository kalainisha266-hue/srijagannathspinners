function sendEmail(){
    Email.send({
    Host : "smtp.gmail.com",
    Username : "kalaiasuran07@gmail.com",
    Password : "KALAIVANANjalli07@&",
    To : 'kalaiasuran07@gmail.com',
    From : document.getElementById('email').value,
    Subject : "New Contact Form Enquiry",
    Body : "And this is the body"
}).then(
  message => alert("will touch back to u")
);
}