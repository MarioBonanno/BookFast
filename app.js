// section 
let section = document.getElementById("section");
const _f = {};
// verifica validita dati 
_f.inputName = false;
_f.inputLastName = false;
_f.inputPhone = false;
_f.person = false;
_f.date = false;
_f.hours = false;


// validation form
function validationForm() {
    _f.form = document.querySelector('form');
    _f.item = Array.from(_f.form.elements);
    _f.firstNotifycation = document.querySelector('.firstname');
    _f.lastNotifycation = document.querySelector('.lastname');
    _f.phoneNotification = document.querySelector('.tell');
    _f.numperson = "";
    checkInput();
}
validationForm();
// pattern caratteri speciali 
function patternCount(pattern, value) {
    return (value.match(pattern) || []).length;
}

// set person numero di persone al tavolo
const person = [];

function numerPerson() {
    person.num = document.querySelector('.piu');
    person.numMeno = document.querySelector('.meno');
    person.personNumInse = document.querySelector(".insert-num");
    let personpiu = person.num;
    let personMeno = person.numMeno;
    let insertNum = person.personNumInse;
    // add 
    personpiu.addEventListener('click', () => {
        let num = Number(insertNum.textContent);
        num += 1;
        if (num <= 15) {
            insertNum.textContent = num;
            _f.numperson = +num;
            if (num > 1) {
                _f.person = true;
                validificationSubmit(_f.person);
            } else {
                _f.person = false;
                validificationSubmit(_f.person);
            }
        } else {
            personpiu.removeEventListener();
        }
    });
    // remove 
    personMeno.addEventListener('click', () => {
        let num = Number(insertNum.textContent);
        num -= 1;
        if (num > 1) {
            insertNum.textContent = num;
            _f.numperson = +num;
        } else {
            personMeno.removeEventListener();
        }
    });
}
numerPerson();
// controllo tile person
function setTime() {
    // data
    _f.month = document.querySelector('.month');
    _f.month.addEventListener('change', (e) => {
        _f.monthSelect = e.target.value;
        if (e.target.value == "") {
            _f.date = false;
            validificationSubmit(_f.date);
        } else {
            _f.date = true;
            validificationSubmit(_f.date);
        }
    });
    // ora 
    _f.time = document.querySelector('.hours');
    _f.time.addEventListener('change', (e) => {
        _f.timeSelect = e.target.value;
        if (e.target.value == "") {
            _f.hours = false;
            validificationSubmit(_f.hours);
        } else {
            _f.hours = true;
            validificationSubmit(_f.hours);
        }
    });
}
setTime();
// controllo dati 
function checkInput() {
    // firstname
    _f.form.firstname.addEventListener('keyup', (e) => {
        let value = e.target.value;
        if (patternCount(/[@#!"£$%&()=?^]/g, value) !== 0) {
            _f.firstNotifycation.textContent = "Questo campo non può contenere caratteri speciali (@#...) ";
            _f.inputName = false;
            validificationSubmit(_f.inputName);
        } else {
            _f.firstNotifycation.style.marginTop = "0px";
            _f.firstNotifycation.textContent = "";
            _f.inputName = true;
            validificationSubmit(_f.inputName);
            _f.form.name = e.target.value;
        }
    });
    // lastname
    _f.form.lastname.addEventListener('keyup', (e) => {
        let value = e.target.value;
        if (patternCount(/[@#!"£$%&()=?^]/g, value) !== 0) {
            _f.lastNotifycation.textContent = "Questo campo non può contenere caratteri speciali (@#...) ";
            _f.inputLastName = false;
            validificationSubmit(_f.inputLastName);
        } else {
            _f.lastNotifycation.style.marginTop = "0px";
            _f.lastNotifycation.textContent = "";
            _f.inputLastName = true;
            validificationSubmit(_f.inputLastName);
            _f.form.lastName = e.target.value;
        }
    });
    // tell 
    _f.form.phone.addEventListener('keyup', (e) => {
        let value = e.target.value;
        if (patternCount(/[abcdefghilmnropqrstuvzwykj@#!"£$%&()=?^]/g, value) !== 0) {
            _f.phoneNotification.textContent = "Questo campo non può contenere caratteri speciali (A @ #...) ";
            _f.inputPhone = false;
            validificationSubmit(_f.inputPhone);
        } else {
            _f.phoneNotification.style.marginTop = "0px";
            _f.phoneNotification.textContent = "";
            _f.inputPhone = true;
            validificationSubmit(_f.inputPhone);
            _f.form.tell = e.target.value;

        }
    });
}
// attivazione input submit
function validificationSubmit() {
    if (_f.inputPhone === true &&
        _f.inputLastName === true &&
        _f.inputName === true &&
        _f.person === true &&
        _f.date == true &&
        _f.hours == true) {

        _f.form.submit.classList.add('active');
    } else {
        _f.form.submit.classList.remove('active');
    }
}
// preventSubmit
function preventSubmit() {
    _f.form.addEventListener('submit', (e) => {
        e.stopPropagation();
        e.preventDefault();
        generatePopup(_f.form.name, _f.form.lastName, _f.form.tell, _f.monthSelect, _f.timeSelect, _f.numperson);
    }, true);
}
preventSubmit();

//  generazione pupup 
function generatePopup(fName, lName, phone, month, hours, person) {
    // pop up 
    let div = document.createElement('div');
    div.className = "popup";
    // title
    let title = document.createElement('h2');
    title.className = "title-popup";
    title.textContent = "Conferma Ordinazione";
    // btn 
    let btnPopup = document.createElement('button');
    btnPopup.setAttribute('type', "submit");
    btnPopup.className = "btn-popup";
    btnPopup.textContent = "Chiudi";
    btnPopup.addEventListener('click', () => {
        div.setAttribute("class", "remove");
    });
    // par 
    let infoUser = document.createElement('p');
    infoUser.className = "par";
    infoUser.textContent = textContent = `Salve ${fName}  ${lName} `;
    // data
    let infoDate = document.createElement('p');
    infoDate.className = "par";
    infoDate.textContent = textContent = ` Data Prenotazione ${month} alle ore  ${hours}`;

    let infoNum = document.createElement('p');
    infoNum.className = "par";
    infoNum.textContent = textContent = ` In caso di cambiamenti la contatteremo al Numero ${phone}`;
    // numero persone
    let infoPerson = document.createElement('p');
    infoPerson.className = "par";
    infoPerson.textContent = textContent = `Numero di persone  ${person}`;
    // append
    div.append(title);
    div.append(infoUser);
    div.append(infoDate);
    div.append(infoPerson);
    div.append(infoNum);
    div.append(btnPopup);
    section.append(div);

}