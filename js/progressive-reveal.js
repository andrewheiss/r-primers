var key = 'currentSection' + window.location.pathname;
var currentSection = localStorage.getItem(key) ? parseInt(localStorage.getItem(key)) : -1;
var sections = Array.from(document.getElementsByClassName('level3'));

// Hide all sections initially
sections.forEach(function (section) {
  section.classList.add('hidden');
});

function revealSection(sectionIndex) {
  sections[sectionIndex].classList.remove('hidden');
}

document.getElementById('continueButton').addEventListener('click', function() {
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
        document.getElementById('continueButton').disabled = true;
        document.getElementById('nextTopicButton').classList.remove('disabled');
    }
});

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
