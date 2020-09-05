$(document).ready(function () {
	$(".current-year").text((new Date()).getFullYear());
	$("#ageInYears").text(getAgeInYears());
});

function getAgeInYears() {
	var dob = new Date(1995, 04, 28);
	var today = new Date();

	var currentYear = today.getFullYear();
	var currentMonth = today.getMonth();
	var currentDate = today.getDate();

	var birthYear = dob.getFullYear();
	var birthMonth = dob.getMonth();
	var birthDate = dob.getDate();

	var yearsInAge;
	yearsInAge = currentYear - birthYear;

	if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate < birthDate)) {
		yearsInAge--;
	}

	return yearsInAge;
}
