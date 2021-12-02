document.addEventListener("DOMContentLoaded", function(event) {
    yearList = document.getElementById("yearList");
    monthList = document.getElementById("monthList");
    dayList = document.getElementById("dayList");

    function isLeapYear(year) {
        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
            return true;
        } else {
            return false;
        }

    }

    yearList.addEventListener('change', function(event) {
        updateMonth();
    });

    monthList.addEventListener('change', function(event) {
        updateDay();
    });

    monthList.onchange = function(event) {
        console.log('oui');
        updateDay();
    }

    function updateDay() {
        dayList.innerHTML = "<option value=''>Jour</option>";

        var dayMax = 31;
        monthValue = monthList.value;
        yearValue = yearList.value;
        if (monthValue == 4 || monthValue == 6 || monthValue == 9 || monthValue == 11) {
            dayMax = 30;
        } else if (monthValue == 2) {
            if (isLeapYear(yearValue)) {
                dayMax = 28;
            } else {
                dayMax = 29;
            }
        }

        for (i = 1; i <= dayMax; i++) {
            day = "<option value='" + i + "'>" + i + "</option>";
            dayList.innerHTML += day;
        }
    }

    function updateMonth() {
        monthList.innerHTML = "<option value=''>Mois</option>";
        const mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        mois.forEach(function(e, i) {
            monthNumber = i + 1;
            month = "<option value='" + monthNumber + "'>" + e + "</option>";
            monthList.innerHTML += month;
        });
        updateDay();
    }

    function updateYear() {
        yearList.innerHTML = "<option value=''>Année</option>";
        startYear = new Date().getFullYear();
        for (i = startYear; i >= startYear - 31; i--) {
            year = "<option value='" + i + "'>" + i + "</option>";
            yearList.innerHTML += year;
        }
        updateMonth();
    }

    updateYear();
    updateMonth();
    updateDay();
});