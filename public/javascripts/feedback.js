/****************************************
 * Feedback
 ***************************************/
document.addEventListener("DOMContentLoaded", function(event) {
    Feedback = {};
    progressBar = document.getElementById('progressBar');
    progressBarWidth = 0;

    function addProgressBar(number) {
        progressBarWidth += number;
        updateProgressBar();
    }

    function removeProgressBar(number) {
        progressBarWidth -= number;
        updateProgressBar();
    }

    function updateProgressBar() {
        progressBar.style.width = progressBarWidth + "%";
    }


    Feedback.validate = function(target) {
        target.classList.remove('is-invalid');
        if (!target.classList.contains('is-valid')) {
            target.classList.add('is-valid');
            addProgressBar(12.5);
        }
    };

    Feedback.invalidate = function(target) {
        target.classList.add('is-invalid');
        if (target.classList.contains('is-valid')) {
            target.classList.remove('is-valid');
            removeProgressBar(12.5);
        }
    };

    Feedback.error = function(target) {
        target.classList.remove('is-valid');
        target.classList.add('is-invalid');
    };


});