function contact() {
    let name = document.getElementById("contact-name").value
    let subject = document.getElementById("contact-subject").value
    let email = document.getElementById("contact-email").value
    let message = document.getElementById("contact-message").value
    if (!name || !subject || !email || !message) {
        Swal.fire({
            title: 'Error!',
            text: 'Fields Are Missing.',
            icon: 'error'
        })
    }
    const data = {
        name: name,
        subject: subject,
        email: email,
        msg: message
    }
    fetch("https://itsHarshit.xyz/contact", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    }).then(res => res.json()).then(body => {
        Swal.fire(body.alert.title, body.alert.message, body.alert.icon)
    })
}

function togglePlay() {
    var pause = document.getElementById("Oks");
    var audio = document.querySelector(".audio");
	if (audio.paused) {
		audio.play();
		pause.innerHTML = `<i class="fas fa-pause"></i>`;
	} else {
		audio.pause();
		pause.innerHTML = `<i class="fas fa-play"></i>`;
	}
}