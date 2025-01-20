// Function to calculate age

function calculateAge(event) {
	event.preventDefault();

	// Get input values
	var day1 = parseInt(document.getElementById("birthday-day").value);
	var month1 = parseInt(document.getElementById("birthday-month").value);
	var year1 = parseInt(document.getElementById("birthday-year").value);

	// Get current date
	var date = new Date();
	var day2 = date.getDate();
	var month2 = date.getMonth() + 1;
	var year2 = date.getFullYear();

	// Array for days in each month
	var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	//Adjust for leap year
	if ((year2 % 4 === 0 && year2 % 100 !== 0) || year2 % 400 === 0) {
		monthDays[1] = 29;
	}
	// Calculate days, months, and years
	if (day1 > day2) {
		day2 += monthDays[(month2 - 2 + 12) % 12]; // Adjust for previous month
		month2 -= 1;
	}
	if (month1 > month2) {
		month2 += 12;
		year2 -= 1;
	}

	var days = day2 - day1;
	var months = month2 - month1;
	var years = year2 - year1;

	// Display results in the HTML
	document.getElementById("numbers-years").textContent = years;
	document.getElementById("numbers-months").textContent = months;
	document.getElementById("numbers-days").textContent = days;
}
//attach event listener to the form submit event
const form = document.getElementById("birthdate-form");
form.addEventListener("submit", calculateAge);
