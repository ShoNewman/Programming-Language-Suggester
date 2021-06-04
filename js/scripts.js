// Business Logic



// User Interface Logic
$(document).ready(function() {
  // Work Style Questions
  $('form#workStyleForm').submit(function(event) {
    event.preventDefault();
    $('#personality').show();
    $('#workStyle').hide();
  })

  // Personality Questions
  $('form#personalityForm').submit(function(event) {
    event.preventDefault();
    $('#spiritAnimal').show();
    $('#personality').hide();
  })

  // Spirit Animal Questions
  $('form#spiritAnimalForm').submit(function(event) {
    event.preventDefault();
    $('#personalInfo').show();
    $('#spiritAnimal').hide();
  })

  // Personal Info Questions
  $('form#personalInfoForm').submit(function(event) {
    event.preventDefault();
    $('#results').show();
    $('#personalInfo').hide();
  })

  // results


})