// Responsive hamburger menu
const hamButton = document.querySelector(".ham");
const mainNav = document.querySelector(".navigation");

hamButton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainNav.classList.remove('responsive')};

//Banner on Fridays
const currentDate = new Date();
const weekday = new Array(7);
weekday[5] = "friday";
const day = weekday[now.getDay()];
if (day == 'friday') {
    document.querySelector(".banner").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. @city park pavilion"
}


// Date in footer
const datefield = document.querySelector("date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full" }).format(now);

datefield.textContent = fulldate;
