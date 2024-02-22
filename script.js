/* Desktop Nav */

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height ) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}

// function to close the mobile navigation when the user clicks on navigation links

document.querySelectorAll('.navbar a, .logo').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('check').checked = false; 
    });
});


/*

document.querySelectorAll('header nav a, .logo').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            setTimeout(() => {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }, 150);
        }
    });
});


*/









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

    setTimeout(function() {
    document.getElementById(tabname).classList.add("active-tab")
    }, 300)
}

/* Contact: EmailJs Service */

const contactForm = document.querySelector('form')
const fullName = document.getElementById('name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${message.value}`
Email.send({
    SecureToken :"58a205ba-36d8-4699-9bd8-e207ccdff5a9",
    
    To : 'brandjsen@gmail.com',
    From : "brandjsen@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if (message == 'OK') {
        Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
            background: "linear-gradient(to right, rgb(0, 0, 0), rgb(150, 150, 150))",
            color: "gold",
           
            
});
    }
  }
);
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () =>{
            checkEmail();
        })

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}


function checkEmail () {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector('.error-txt.email')

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else {
            errorTxtEmail.innerText = "Email Address can't be blank"
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    checkInputs()

if(!fullName.classList.contains("error") && !email.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
sendEmail()
console.log('ok')
contactForm.reset()
return false

}

    
})


