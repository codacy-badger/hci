let regForm = document.getElementById('regform');

regForm.addEventListener('keyup', (event) => {
    if (event.srcElement.id === this.pass.id || event.srcElement.id === this.passrepeat.id) {
        if (this.passrepeat.isValid())
        this.passrepeat.setCustomValidity('');
        this.passmessage.innerHTML = '';
        
        if (this.pass.value !== this.passrepeat.value) {
            this.passrepeat.setCustomValidity('Lozinke se ne poklapaju');
            this.passmessage.innerHTML = 'Lozinke se ne poklapaju!';
        }
    }

    if (event.srcElement.id === this.birthdate.id) {
        this.birthdate.setCustomValidity('');
        let age = getAgeFromBirthDate(this.birthdate);
        if (age < 18) {
            this.birthdate.setCustomValidity('Morate imati vise od 18 godina da bi ste se registrovali...');
            return;
        }
    }
});

regForm.addEventListener('submit', (event) => {
    event.preventDefault();
});

function getAgeFromBirthDate(birthdate) {
    birthdate = new Date(birthdate.value);
    let diff = new Date(Date.now() - birthdate.getTime());

    return Math.abs(diff.getUTCFullYear() - 1970);
}
