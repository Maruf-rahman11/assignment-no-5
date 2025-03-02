function convertedToNumber (id){
   const num  = document.getElementById(id).innerText;
   const convNum = parseFloat(num);
   return convNum;
}


function transaction (taskname){
    const currentDate = new Date().toLocaleTimeString("en-us",{
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    })
    const result = "You have Completed The "+taskname+" Task at "+ currentDate;
    return result;
}