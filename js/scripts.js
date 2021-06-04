// Business Logic
let javascript = 0;
let ruby = 0;
let csharp= 0;
let anything=0;

function languageSelector(workStyleNum) {
  return parseInt($('input:radio[name=workStyleQuestion'+ workStyleNum + ']:checked').val());
}


// User Interface Logic
$(document).ready(function() {
  // Work Style Questions
  $('form#workStyleForm').submit(function(event) {
    event.preventDefault();
    $('#results').show();
    $('#workStyle').hide();

    const workStyleInput1 = languageSelector(1);
    const workStyleInput2 = languageSelector(2);
    const workStyleInput3 = languageSelector(3);
    const workStyleInput4 = languageSelector(4);
    const workStyleInput5 = languageSelector(5);
    const workStyleInput6 = languageSelector(6);

    if (workStyleInput1 === 3) {
      ruby++;
    } else if (workStyleInput2 == 3 && workStyleInput4 == 3 || workStyleInput2 + workStyleInput5 >= 4) {
      javascript++;
    } else if (workStyleInput3 && workStyleInput4 && workStyleInput6 === 3 || workStyleInput3 + workStyleInput4 + workStyleInput6 >= 6) {
      csharp++;
    } else {
      anything++;
    }
    console.log('javascript1>' + javascript);
    console.log('ruby1>' + ruby);
    console.log('csharp1>' + csharp);

    if (javascript > ruby && javascript > csharp) {
      $('#javascript').show();
    } else if (ruby > javascript && ruby > csharp) {
      $('#ruby').show();
    } else if (csharp > ruby && csharp > javascript) {
      $('#csharp').show();
    } else {
      $('#anything').show();
    }
    console.log('javascript>' + javascript);
    console.log('ruby>' + ruby);
    console.log('csharp>' + csharp);
  });

  // Personality Questions
  // $('form#personalityForm').submit(function(event) {
  //   event.preventDefault();
  //   $('#spiritAnimal').show();
  //   $('#personality').hide();

  //   const personalityInput1 = parseInt($('input:radio[name=personalityQuestion1]:checked').val());
  //   const personalityInput2 = parseInt($('input:radio[name=personalityQuestion2]:checked').val());
  //   const personalityInput3 = parseInt($('input:radio[name=personalityQuestion3]:checked').val());
  //   const personalityInput4 = parseInt($('input:radio[name=personalityQuestion4]:checked').val());
  //   const personalityInput5 = parseInt($('input:radio[name=personalityQuestion5]:checked').val());
  //   const personalityInput6 = parseInt($('input:radio[name=personalityInput6]:checked').val());

  //   if (personalityInput1 && personalityInput3 && personalityInput5 === 3 || personalityInput1 + personalityInput3 >= 4) {
  //     javascript++;
  //   } else {
  //     javascript--;
  //   }
  //   if (personalityInput2 === 3) {
  //     ruby++;
  //   } else {
  //     ruby--;
  //   }
  //   if (personalityInput4 && personalityInput6 === 3 || personalityInput4 + personalityInput6 >= 6) {
  //     csharp++;
  //   } else {
  //     csharp--;
    // }

  // })

  // // Spirit Animal Questions
  // $('form#spiritAnimalForm').submit(function(event) {
  //   event.preventDefault();
  //   $('#personalInfo').show();
  //   $('#spiritAnimal').hide();
  // })

  // // Personal Info Questions
  // $('form#personalInfoForm').submit(function(event) {
  //   event.preventDefault();
  //   $('#results').show();
  //   $('#personalInfo').hide();
  // })

  // results
})

