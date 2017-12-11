$(document).ready(function(){
	$(".button-collapse").sideNav();
	$(".current-year").text((new Date()).getFullYear());
	$("#age").text(getAge());
  $(".social").on('mouseenter',function(){
    $(this).addClass('pulse');
  });
  $(".social").on('mouseleave',function(){
    $(this).removeClass('pulse');
  });
  $('.carousel').carousel();
  $('.modal').modal();
  $(window).scroll(function(){
    if($(window).scrollTop()>=$(document).height() - $(window).height()-10){
       // $('.tap-target').tapTarget('open');
    }
  })
  setInterval(function(){
    $('.carousel').carousel('next');
  },3000);
  $('.tooltipped').tooltip({delay: 50});
});

function getAge() {
  var dob = new Date(1995, 04, 28);
  var today = new Date();

  var currentYear = today.getFullYear();
  var currentMonth = today.getMonth();
  var currentDate = today.getDate();
  var daysInLastMonth;
  var lastMonth = currentMonth - 1;
  if(lastMonth<0)
  	lastMonth = 11;
  switch(lastMonth){
	case 0:case 2:case 4:case 6:case 7:case 9:case 11:
		daysInLastMonth = 31;
		break;
	case 3: case 5: case 8: case 10:
		daysInLastMonth = 30;
		break;
	case 1:
		var x = (currentYear % 100 === 0) ? (currentYear % 400 === 0) : (currentYear % 4 === 0);
        daysInLastMonth = x ? 29:28;
        break;
}

  var birthYear = dob.getFullYear();
  var birthMonth = dob.getMonth();
  var birthDate = dob.getDate();
  var age = {};
  var ageString = "";
  var yearString = "";
  var monthString = "";
  var dayString = "";

  var yearsInAge = currentYear - birthYear;
  var monthsInAge;
  var daysInAge;

  if (currentMonth >= birthMonth)
    monthsInAge = currentMonth - birthMonth;
  else {
    yearsInAge--;
    monthsInAge = 12 + currentMonth -birthMonth;
  }

  if (currentDate >= birthDate)
    daysInAge = currentDate - birthDate;
  else {
    monthsInAge--;
    daysInAge = daysInLastMonth - birthDate + currentDate;

    if (monthsInAge < 0) {
      monthsInAge = 11;
      yearsInAge--;
    }
  }

  age = {
      years: yearsInAge,
      months: monthsInAge,
      days: daysInAge
      };

  yearString = " years";
  if ( age.months> 1 ) monthString = " months";
  else monthString = " month";
  if ( age.days > 1 ) dayString = " days";
  else dayString = " day";


  if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
  else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
    ageString = age.years + yearString + " old. Happy Birthday Suraj!!";
  else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.years + yearString + " and " + age.months + monthString + " old.";
  else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
    ageString = age.years + yearString + " and " + age.days + dayString + " old.";
  else ageString = "Oops! Could not calculate age!";

  return ageString;
}
