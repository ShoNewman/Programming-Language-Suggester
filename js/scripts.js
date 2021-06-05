// Business Logic
let javascript = 0;
let ruby = 0;
let csharp= 0;
let anything=0;

function workStyleSelector(workStyleNum) {
  return parseInt($('input:radio[name=workStyleQuestion'+ workStyleNum + ']:checked').val());
}
function personalitySelector(personalityNum) {
  return parseInt($('input:radio[name=personalityQuestion1'+ personalityNum + ']:checked').val());
}

if (javascript > ruby && javascript > csharp) {
  $('#javascript').show();
} else if (ruby > javascript && ruby > csharp) {
  $('#ruby').show();
} else if (csharp > ruby && csharp > javascript) {
  $('#csharp').show();
} else {
  $('#anything').show();
}

// User Interface Logic
$(document).ready(function() {
  // Work Style Questions
  
  $('#next1').click(function() {
    $('#personality').show();
    $('#workStyle').hide();
  })
  $('#next2').click(function() {
    $('#spiritAnimal').show();
    $('#personality').hide();
  })

  $('form').submit(function(event) {
    event.preventDefault();

    const workStyleInput1 = workStyleSelector(1);
    const workStyleInput2 = workStyleSelector(2);
    const workStyleInput3 = workStyleSelector(3);
    const workStyleInput4 = workStyleSelector(4);
    const workStyleInput5 = workStyleSelector(5);
    const workStyleInput6 = workStyleSelector(6);

    if (workStyleInput1 === 3) {
      ruby++;
    } else if (workStyleInput2 == 3 && workStyleInput4 == 3 || workStyleInput2 + workStyleInput5 >= 4) {
      javascript++;
    } else if (workStyleInput3 && workStyleInput4 && workStyleInput6 === 3 || workStyleInput3 + workStyleInput4 + workStyleInput6 >= 6) {
      csharp++;
    } else {
      anything++;
    }

    const personalityInput1 = personalitySelector(1);
    const personalityInput2 = personalitySelector(2);
    const personalityInput3 = personalitySelector(3);
    const personalityInput4 = personalitySelector(4);
    const personalityInput5 = personalitySelector(5);
    const personalityInput6 = personalitySelector(6);

    if (personalityInput2 === 3) {
      ruby++;
    } else if (personalityInput1 && personalityInput3 && personalityInput5 === 3 || personalityInput1 + personalityInput3 + personalityInput5 >= 6) {
      javascript++;
    } else if (personalityInput4 && personalityInput6 === 3 || personalityInput4 + personalityInput6 >= 4) {
      csharp++;
    } else {
      anything++;
    }

   let spiritAnimalSelector = $('spiritAnimalQuestion').val();

    if (spiritAnimalSelector === 4) {
      ruby++;
    } else if (spiritAnimalSelector === 3) {
      javascript++;
    } else if (spiritAnimalSelector === 2) {
      csharp++;
    } else {
      anything++;
    }
 
    $('#personality').hide();
    $('#workStyle').hide();
    $('#spiritAnimal').hide();
    $('#results').show();

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

