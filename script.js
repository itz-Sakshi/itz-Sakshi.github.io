document.addEventListener("DOMContentLoaded", function () {
    const hiringRadio = document.querySelector('input[value="Hiring"]');
    const hourlyRateField = document.getElementById("hourlyRateField");

    hiringRadio.addEventListener("change", function () {
        hourlyRateField.style.display = this.checked ? "block" : "none";
    });

    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (event) {
        const postalCodeInput = document.getElementById("postalCode");
        const postalCodePattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

        if (!postalCodePattern.test(postalCodeInput.value)) {
            event.preventDefault();
            alert("Please enter a valid Canadian Postal Code.");
            postalCodeInput.focus();
            return false;
        }
    });
});
