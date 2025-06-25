const loginKnop = document.getElementById('submit');

// clearen van input die er misschien is
window.addEventListener('load', function (e) {
    document.forms['form']['uname'].value = "";
    document.forms['form']['password'].value = "";
    document.forms['form']['email'].value = "";
})


const darkModeKnop = document.getElementById('dark-mode-knop');
darkModeKnop.addEventListener('click', function darkMode() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        darkModeKnop.innerText = "Lichte modus";
    } else if (!document.body.classList.contains('dark')) {
        darkModeKnop.innerText = "Donkere modus";
    }
});

const knop = document.getElementById('submit').addEventListener('click', function validateForm(e) {
    e.preventDefault();
    const geldigP = document.getElementById('geldigP');
    let userName = document.forms['form']['uname'].value;
    let password = document.forms['form']['password'].value;
    let email = document.forms['form']['email'].value;
    if (userName == "") {
        alert('Geen gebruikersnaam ingevuld');
        return false;
    } else if (password == "") {
        alert("Geen wachtwoord ingevuld");
        return false;
    } else if (email == "") {
        alert("Geen email ingevuld.");
        return false;
    } else {
        geldigP.innerHTML = "Succesvol ingelogd";
    }
    wachtwoordSterkte(password);
    emailChecker(email);
});

function wachtwoordSterkte(wachtwoord) {
    const sterkteP = document.getElementById('sterkteWachtwoord');
    let sterkte = 0;
    // duh
    if (wachtwoord.length >= 8) {
        sterkte += 1;
    }
    // minstens 1 kleine letter
    if (wachtwoord.match(/[a-z]/)) {
        sterkte += 1;
    }
    // minstens 1 hoofdletter
    if (wachtwoord.match(/[A-Z]/)) {
        sterkte += 1;
    }
    // minstens 1 cijfer, want /d zoekt van 0-9
    if (wachtwoord.match(/\d/)) {
        sterkte += 1;
    }
    /* 
    speciale tekens
    ^ == !, want het moet niet die dingen zijn
    */
    if (wachtwoord.match(/[^a-zA-Z0-9]/)) {
        sterkte += 1;
    }
    sterkteP.innerHTML = "De sterkte van uw wachtwoord is: " + sterkte;
    return sterkte;
};

function emailChecker(email) {
    const validP = document.getElementById('emailValid');
    // regex om de mail te checken
    let re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // waar of niet laten zien aan gebruiker
    console.log(email);
    if (re.test(email)) {
        validP.innerHTML = 'Email klopt!';
    } else {
        validP.innerHTML = 'Die email klopt niet';
    }
    return re.test(email);
};

document.addEventListener('keydown', function (e) {
    const key = e.key;
    switch (key) {
        case 'enter':
            loginKnop.click();
            break;
    }
})