document.addEventListener("DOMContentLoaded", function(event) {
    Checker = {};

    Checker.inputName = function() {
        const lastname = document.querySelector('#inputName');
        return lastname.value.length >= 2;
    };

    Checker.inputForename = function() {
        const firstname = document.querySelector('#inputForename');
        return firstname.value.length >= 2;
    };

    Checker.inputMail = function() {
        const mail = document.querySelector('#inputMail');
        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mail.value.length >= 2) {
            if (mail.value.match(mailFormat)) {
                return true;
            }
            return false;
        }
        return false;
    };

    Checker.yearList = function() {
        const year = document.querySelector('#yearList');
        if (year.value != "") {
            return true;
        }
        return false;
    };

    Checker.monthList = function() {
        const month = document.querySelector('#monthList');
        if (month.value != "") {
            return true;
        }
        return false;
    };

    Checker.dayList = function() {
        const day = document.querySelector('#dayList');
        if (day.value != "") {
            return true;
        }
        return false;
    };

    Checker.inputPassword = function() {
        const password = document.querySelector('#inputPassword');
        return password.value.length >= 6;

    };

    Checker.inputPassword2 = function() {
        const password = document.querySelector('#inputPassword');
        const password2 = document.querySelector('#inputPassword2');
        if (password.value == password2.value) {
            if (password.value.length >= 6) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
        return password.value == password2.value;

    };

    Checker.inputPassword2 = function() {
        const password = document.querySelector('#inputPassword');
        const password2 = document.querySelector('#inputPassword2');
        return password.value == password2.value;

    };

    Checker.gridCheck = function() {
        const check = document.querySelector('#gridCheck');
        return check.checked;

    };







});