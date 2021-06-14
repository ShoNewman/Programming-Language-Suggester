// Business Logic
let javascript = 0;
let ruby = 0;
let csharp= 0;
let anything=0;

function workStyleSelector(workStyleNum) {
  return parseInt($('input:radio[name=workStyleQuestion'+ workStyleNum + ']:checked').val());
}
function personalitySelector(personalityNum) {
  return parseInt($('input:radio[name=personalityQuestion'+ personalityNum + ']:checked').val());
}


// User Interface Logic
$(document).ready(function() {

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

    let workStyleInput1 = workStyleSelector(1);
    let workStyleInput2 = workStyleSelector(2);
    let workStyleInput3 = workStyleSelector(3);
    let workStyleInput4 = workStyleSelector(4);
    let workStyleInput5 = workStyleSelector(5);
    let workStyleInput6 = workStyleSelector(6);

    if (workStyleInput1 == 3) {
      ruby++;
    } else if (workStyleInput2 == 3 && workStyleInput4 == 3 || workStyleInput2 + workStyleInput5 >= 4) {
      javascript++;
    } else if (workStyleInput3 && workStyleInput4 && workStyleInput6 === 3 || workStyleInput3 + workStyleInput4 + workStyleInput6 >= 6) {
      csharp++;
    } else {
      anything++;
    }
    console.log('work' + workStyleInput2 + workStyleInput4)

    let personalityInput1 = personalitySelector(1);
    let personalityInput2 = personalitySelector(2);
    let personalityInput3 = personalitySelector(3);
    let personalityInput4 = personalitySelector(4);
    let personalityInput5 = personalitySelector(5);
    let personalityInput6 = personalitySelector(6);

    if (personalityInput2 == 3) {
      ruby++;
    } else if (personalityInput1 && personalityInput3 && personalityInput5 === 3 || personalityInput1 + personalityInput3 + personalityInput5 >= 6) {
      javascript++;
    } else if (personalityInput4 && personalityInput6 === 3 || personalityInput4 + personalityInput6 >= 4) {
      csharp++;
    } else {
      anything++;
    }
  console.log('person' + personalityInput1 + personalityInput3 + personalityInput5)

   let spiritAnimalSelector = parseInt($('#spiritAnimalQuestion').val());

    if (spiritAnimalSelector === 4) {
      ruby++;
    } else if (spiritAnimalSelector === 3) {
      javascript++;
    } else if (spiritAnimalSelector === 2) {
      csharp++;
    } else {
      anything++;
    }
    console.log(spiritAnimalSelector)

    if (javascript >= ruby && javascript >= csharp) {
      $('#javascript').show();
      $('#ruby').hide();
      $('#csharp').hide();
      $('#anything').hide();
    } else if (ruby >= javascript && ruby >= csharp) {
      $('#javascript').hide();
      $('#ruby').show();
      $('#csharp').hide();
      $('#anything').hide();
    } else if (csharp >= ruby && csharp >= javascript) {
      $('#javascript').hide();
      $('#ruby').hide();
      $('#csharp').show();
      $('#anything').hide();
    } else {
      $('#javascript').show();
      $('#ruby').hide();
      $('#csharp').hide();
      $('#anything').hide();
    }
 
    $('#personality').hide();
    $('#workStyle').hide();
    $('#spiritAnimal').hide();
    $('#results').show();   
  
  });

  $('#return').click(function() {
    ruby = 0;
    javascript = 0;
    csharp = 0;
    anything = 0;

    $('#personality').hide();
    $('#workStyle').show();
    $('#spiritAnimal').hide();
    $('#results').hide();   
  })

})

