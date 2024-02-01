/* About: Show Content*/

let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }

    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

/* Contact: EmailJs Service */

function sendMail() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Verifica se i campi richiesti sono compilati
    if (!name || !email || !message) {
        alert('Please fill in all the required fields');
        return;
    }

    // Verifica se l'indirizzo email è valido
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        alert('Please enter a valid email address');
        return;
    }

    let params = {
        name: name,
        email: email,
        message: message
    };

    const serviceID = "service_6b6cjmb";
    const templateID = "template_iq5so22";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            console.log(res);
            alert('Your message sent successfully');
        })
        .catch(err => {
            console.log(err);
            alert('Error sending message. Please try again.');
        });
}
