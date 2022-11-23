// template_xih7b42
// service_qb0dndl
// yBtIX7eeMg3G6dYem

function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_qb0dndl',
            'template_xih7b42',
            event.target,
            'yBtIX7eeMg3G6dYem'
        ).then(() => {
            console.log("this worked1")
        })

}


//stopped at 02:01:00