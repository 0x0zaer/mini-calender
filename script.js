//Access elements 
let btnLeft = document.querySelector(".btnLeft");
let btnRight = document.querySelector(".btnRight");
let month_year = document.querySelector(".month_year");
let days = document.querySelector(".days");

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentDate = new Date();
let today = new Date();

//Creating a arrow function for my calender prog.
let calfun = () => {
    // finding month and date 
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const lastDay = new Date(year, month + 1, 0).getDay();
    month_year.innerText = `${months[month]} ${year}`;
    days.innerHTML = ""; //clear days container every time it reloads

    //blank boxes before 1st date
    for (let i = 0; i < firstDay; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.innerText = "";
        days.appendChild(dayDiv);
    }
    //creating current dates using 1st day to last day loop
    for (let i = 1; i <= lastDate; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.innerText = i;
        if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayDiv.classList.add("today");
        }
        days.appendChild(dayDiv);
    }
    //Creating last blank boxes
    for (let i = lastDay + 1; i < 7; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.innerText = "";
        days.appendChild(dayDiv);
    }

    return
}

//Now lets work for buttons 
btnLeft.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1)
    calfun()
});
btnRight.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    calfun();
})

calfun() // run the function