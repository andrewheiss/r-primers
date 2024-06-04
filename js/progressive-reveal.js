var key = 'currentSection' + window.location.pathname;
var currentSection = localStorage.getItem(key) ? parseInt(localStorage.getItem(key)) : -1;
var sections = Array.from(document.getElementsByClassName('level3'))
    .filter(section => !section.classList.contains('no-hide'));

// Hide all sections initially
sections.forEach(function (section) {
  section.classList.add('hidden');
});

function revealSection(sectionIndex) {
  sections[sectionIndex].classList.remove('hidden');
}

var continueButton = document.getElementById('continueButton');
var nextTopicButton = document.getElementById('nextTopicButton');

// Disable continue button if there are no sections
if (sections.length === 0) {
    continueButton.disabled = true;
    nextTopicButton.classList.remove('disabled');
// Otherwise progressively reveal sections
} else {
    continueButton.addEventListener('click', function () {
        currentSection++;
        if (currentSection < sections.length) {
            revealSection(currentSection);
            localStorage.setItem(key, currentSection);
            // Jump to the id anchor for the current section
            window.location.hash = sections[currentSection].id;
            // Adjust scroll position to account for the height of the navbar
            window.scrollBy(0, 70);
        }

        if (currentSection >= sections.length - 1) {
            continueButton.disabled = true;
            nextTopicButton.classList.remove('disabled');
        }
    });
}

// On page load, reveal up to the current section
window.onload = function () {
  for (var i = 0; i <= currentSection; i++) {
    revealSection(i);
  }
};

function clearProgress() {
  localStorage.removeItem(key);
  window.location.hash = '#';  // Remove the anchor from the URL
}

document.getElementById('resetButton').addEventListener('click', function () {
  clearProgress();
  // Reload the page to reflect the reset progress
  location.reload();
});
