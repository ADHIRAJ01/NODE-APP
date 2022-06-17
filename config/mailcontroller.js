//sending mails , adding controller , configuring port and all other in env file

function sendMail(){
    const detail = [
        'title'= 'sending mails',
        'body'= 'Welcome to our mail server '
    ];

    Mail:to("adhiraj@gmail.com")=send(new Mail(detail));
    return "message sent successfully.";
}








