/****************************************
 * Events
 ***************************************/
document.addEventListener("DOMContentLoaded", function(event) {


    document.querySelectorAll('input, select').forEach(el => {
        el.onchange = function(event) {
            target = event.target;
            if (Checker[target.id]()) {
                Feedback.validate(target);
            } else {
                Feedback.invalidate(target);
            }
        }
    });

    document.querySelector('#sign').onsubmit = function(event) {
        event.preventDefault();
        validate = true;
        document.querySelectorAll('input, select').forEach(el => {
            if (!Checker[el.id]()) {
                console.log(Checker[el.id]());
                validate = false;
            }
        });
        if (validate == true) {
            console.log('Formulaire validé');
        } else {
            console.log('Formulaire invalide');
        }

    };

    inputPass = document.querySelector('#inputPassword');
    passStrengthIndicator = document.querySelector('#progressPassword');
    passStrengthIndicatorLabel = document.querySelector('#progressPasswordLabel');
    inputPass.addEventListener('keyup', function(event) {
        console.log('Salut');
        if (!inputPass.value.length == 0) {
            passStrengthIndicator.style.display = "flex";
            passStrengthIndicatorLabel.style.display = "flex";
            removePassClasses();
            if (passStrength(inputPass.value) == 0) {
                passStrengthIndicator.classList.add('text-danger');
                passStrengthIndicatorLabel.classList.add('text-danger');
                passStrengthIndicatorLabel.innerHTML = "Mot de passe invalide";
            } else
            if (passStrength(inputPass.value) == 1) {
                passStrengthIndicator.classList.add('text-warning');
                passStrengthIndicatorLabel.classList.add('text-warning');
                passStrengthIndicatorLabel.innerHTML = "Force du mot de passe faible";
            } else if (passStrength(inputPass.value) == 2) {
                passStrengthIndicator.classList.add('text-success');
                passStrengthIndicatorLabel.classList.add('text-success');
                passStrengthIndicatorLabel.innerHTML = "Force du mot de passe Excellente";
            }
        } else {
            passStrengthIndicator.style.display = "none";
            passStrengthIndicatorLabel.style.display = "none";
        }
    });

    function removePassClasses() {
        passStrengthIndicator.classList.remove('text-danger');
        passStrengthIndicator.classList.remove('text-success');
        passStrengthIndicator.classList.remove('text-warning');
        passStrengthIndicatorLabel.classList.remove('text-danger');
        passStrengthIndicatorLabel.classList.remove('text-success');
        passStrengthIndicatorLabel.classList.remove('text-warning');
    }

    function passStrength(pass) {
        var regex = '((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])).{6,}';
        if (pass.length < 6) {
            return 0;
        }
        if (pass.match(regex)) {
            return 2;
        } else {
            return 1;
        }
    }


});