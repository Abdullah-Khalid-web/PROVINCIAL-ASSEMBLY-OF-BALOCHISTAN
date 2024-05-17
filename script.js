// this is for the top header serch icon
function toggleSearch() {
    var searchInput = document.getElementById('searchInput');
    searchInput.classList.add('searchshow');
}






// Slider
document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }

    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
    });
});






//section 2 (main Content)

function BalochistanAssemblyvisible(){
    document.querySelector(".newsdetail1").classList.remove("hide");
    document.querySelector(".newsdetail2").classList.add("hide");
    document.querySelector(".newsdetail3").classList.add("hide");
    document.querySelector(".newsdetail4").classList.add("hide");
    
}
function HouseBusinessvisible(){
    document.querySelector(".newsdetail1").classList.add("hide");
    document.querySelector(".newsdetail2").classList.remove("hide");
    document.querySelector(".newsdetail3").classList.add("hide");
    document.querySelector(".newsdetail4").classList.add("hide");
    
}
function Committeevisible(){
    document.querySelector(".newsdetail1").classList.add("hide");
    document.querySelector(".newsdetail2").classList.add("hide");
    document.querySelector(".newsdetail3").classList.remove("hide");
    document.querySelector(".newsdetail4").classList.add("hide");
    
}
function Membersvisible(){
    document.querySelector(".newsdetail1").classList.add("hide");
    document.querySelector(".newsdetail2").classList.add("hide");
    document.querySelector(".newsdetail3").classList.add("hide");
    document.querySelector(".newsdetail4").classList.remove("hide");

}



//section 3

function Assembly(){
    document.querySelector(".newsupdatedetail1").classList.remove("hide");
    document.querySelector(".newsupdatedetail2").classList.add("hide");
    document.querySelector(".newsupdatedetail3").classList.add("hide");
    document.querySelector(".newsupdatedetail4").classList.add("hide");
    
}

function Press(){
    document.querySelector(".newsupdatedetail1").classList.add("hide");
    document.querySelector(".newsupdatedetail2").classList.remove("hide");
    document.querySelector(".newsupdatedetail3").classList.add("hide");
    document.querySelector(".newsupdatedetail4").classList.add("hide");
    
}
function Publications(){
    
    document.querySelector(".newsupdatedetail1").classList.add("hide");
    document.querySelector(".newsupdatedetail2").classList.add("hide");
    document.querySelector(".newsupdatedetail3").classList.remove("hide");
    document.querySelector(".newsupdatedetail4").classList.add("hide");
}
function Jobs(){
    document.querySelector(".newsupdatedetail1").classList.add("hide");
    document.querySelector(".newsupdatedetail2").classList.add("hide");
    document.querySelector(".newsupdatedetail3").classList.add("hide");
    document.querySelector(".newsupdatedetail4").classList.remove("hide");
    
}




// Calculator

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
 
const day = document.querySelector(".calendar-dates");
 
const currdate = document
    .querySelector(".calendar-current-date");
 
const prenexIcons = document
    .querySelectorAll(".calendar-navigation span");
 
// Array of month names
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
 
// Function to generate the calendar
const manipulate = () => {
 
    // Get the first day of the month
    let dayone = new Date(year, month, 1).getDay();
 
    // Get the last date of the month
    let lastdate = new Date(year, month + 1, 0).getDate();
 
    // Get the day of the last date of the month
    let dayend = new Date(year, month, lastdate).getDay();
 
    // Get the last date of the previous month
    let monthlastdate = new Date(year, month, 0).getDate();
 
    // Variable to store the generated calendar HTML
    let lit = "";
 
    // Loop to add the last dates of the previous month
    for (let i = dayone; i > 0; i--) {
        lit +=
            `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }
 
    // Loop to add the dates of the current month
    for (let i = 1; i <= lastdate; i++) {
 
        // Check if the current date is today
        let isToday = i === date.getDate()
            && month === new Date().getMonth()
            && year === new Date().getFullYear()
            ? "active"
            : "";
        lit += `<li class="${isToday}">${i}</li>`;
    }
 
    // Loop to add the first dates of the next month
    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`
    }
 
    // Update the text of the current date element 
    // with the formatted current month and year
    currdate.innerText = `${months[month]} ${year}`;
 
    // update the HTML of the dates element 
    // with the generated calendar
    day.innerHTML = lit;
}
 
manipulate();
 
// Attach a click event listener to each icon
prenexIcons.forEach(icon => {
 
    // When an icon is clicked
    icon.addEventListener("click", () => {
 
        // Check if the icon is "calendar-prev"
        // or "calendar-next"
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;
 
        // Check if the month is out of range
        if (month < 0 || month > 11) {
 
            // Set the date to the first day of the 
            // month with the new year
            date = new Date(year, month, new Date().getDate());
 
            // Set the year to the new year
            year = date.getFullYear();
 
            // Set the month to the new month
            month = date.getMonth();
        }
 
        else {
 
            // Set the date to the current date
            date = new Date();
        }
 
        // Call the manipulate function to 
        // update the calendar display
        manipulate();
    });
});












// Section 4


let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);