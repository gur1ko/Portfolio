// template_xih7b42
// service_qb0dndl
// yBtIX7eeMg3G6dYem

let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
else { document.body.classList += " dark-theme"
}
}


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')
loading.classList.remove("modal__overlay--visible");
    emailjs
        .sendForm(
            'service_qb0dndl',
            'template_xih7b42',
            event.target,
            'yBtIX7eeMg3G6dYem'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible"
        }).catch(() => {
            
            alert(
                "The email service is temporarily unavialable. Please contact me directly on gurikiknadze@gmail.com"
            )
        })




loading.classList += " modal__overlay--visible" 
setTimeout(() => {
    
    console.log('it worked 1')
}, 1000)
}


function toggleModal() {
    
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
        
    isModalOpen = true;
    document.body.classList += " modal--open"
}