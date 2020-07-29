function setDefault(){
  let curTime = Date.now()
  let saturdayDate = new Date('July 29, 2020');
  let sundayDate = new Date('July 30, 2020');
  let dayScheds = $('.day-schedule');
  if (curTime - saturdayDate.getTime() > 0 && curTime - sundayDate.getTime() < 0) {
    $(dayScheds[1]).removeClass('collapse');
    $(dayScheds[1]).addClass('visible');
  }
  else if (curTime - sundayDate.getTime() > 0) {
    $(dayScheds[2]).removeClass('collapse');
    $(dayScheds[2]).addClass('visible');
  }
  else {
    $(dayScheds[0]).removeClass('collapse');
    $(dayScheds[0]).addClass('visible');
  }
}

function changeSchedule(oldSchedule, newSchedule){
  $(oldSchedule).removeClass("visible");
  $(oldSchedule).addClass("collapse");
  $(newSchedule).removeClass("collapse");
  $(newSchedule).addClass("visible");
}

$(document).ready(setDefault());
