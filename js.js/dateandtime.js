const currentDate = new Date().toLocaleDateString("en-us",{
    month : "short",
    day : "numeric",
    year : "numeric",
});


document.getElementById("date-display").innerText = `${currentDate}`;
document.getElementById("date-display").classList.add('font-semibold');