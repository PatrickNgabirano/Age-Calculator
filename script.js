const output_day = document.querySelector(".output-day");
const output_month = document.querySelector(".output-month");
const output_year = document.querySelector(".output-year");
const submit_btn = document.querySelector(".submit-btn");
let isalid =false;
const input_day = document.querySelector("#day");
const input_month = document.querySelector("#month");
const input_year = document.querySelector("#year");
//const submit_btn = document.querySelector(".submit-btn");

const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");

let isValid = false; 

submit_btn.addEventListener('click', CalculateDate);

input_day.addEventListener("input", () => {
const inputValue = +input_day.value; 

if (inputValue >= 1 && inputValue <= 31) {
    isValid = true; 
    error_day.textContent = "Must be a valid date"; 
} else {
    isValid = false; 
    error_day.textContent = " "; 
}
});

input_month.addEventListener("input", () => {
const inputValue = +input_month.value; 

if (inputValue >= 1 && inputValue <= 12) {
    isValid = true; 
    error_month.textContent = ""; 
} else {
    isValid = false; 
    error_month.textContent = ""; 
}
});

input_year.addEventListener("input", () => {
const inputValue = +input_year.value; 
const currentYear = new Date().getFullYear(); 

if (inputValue >= 1900&& inputValue <= currentYear) {
    isValid = true; 
    error_year.textContent = "";
} else {
    isValid = false; 
    error_year.textContent = `Must be a valid date  ${currentYear}`; 
}
});

function CalculateDate() {
if (isValid) {
    const birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
    const birthdayObj = new Date(birthday);
    const ageDiffMillis = Date.now() - birthdayObj;
    const ageDate = new Date(ageDiffMillis);
    const ageYears = ageDate.getUTCFullYear() -1970;
    const ageMonths = ageDate.getUTCMonth();-1
    const ageDays = ageDate.getUTCDate() ;

    output_day.textContent = ageDays;
    output_month.textContent = ageMonths;
    output_year.textContent = ageYears;
} else {
    alert("Please fix the input errors before calculating.");
}
}
