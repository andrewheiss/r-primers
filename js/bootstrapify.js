document.addEventListener('DOMContentLoaded', function() {
    // Select all forms that don't have a class set
    var formsWithoutClass = document.querySelectorAll('form:not([class])');
    formsWithoutClass.forEach(addBootstrapClasses);

    // Select all forms that use `method="post"`
    // var postForms = document.querySelectorAll('form[method="post"]');
    // postForms.forEach(addBootstrapClasses);
});

function addBootstrapClasses(form) {
    // Add the Bootstrap class 'form-group' to the form
    form.classList.add('form-group');

    // Select the radio inputs within this form and add the Bootstrap class 'form-check-input'
    var radioInputs = form.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(function(input) {
        input.classList.add('form-check-input');
    });

    // Select the labels within this form and add the Bootstrap class 'form-check-label'
    var labels = form.querySelectorAll('label');
    labels.forEach(function(label) {
        label.classList.add('form-check-label');
    });

    // Select the submit button within this form and add the Bootstrap classes 'btn' and 'btn-primary'
    var submitButton = form.querySelector('input[type="submit"]');
    submitButton.classList.add('btn', 'btn-primary', 'btn-sm');
}
