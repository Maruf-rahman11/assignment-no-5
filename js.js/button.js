document.querySelectorAll(".complete-btn").forEach(button => {
    button.addEventListener("click", function() { 
        alert('Board Updated Successfully')
        this.disabled = true; 
        this.classList.add("bg-gray-400");
        this.blur();
        

        const remainTask = document.getElementById('remain-task')
        const conRemainTask = convertedToNumber('remain-task')
        const remainNum = conRemainTask - 1 ;
        remainTask.innerText = remainNum;
        if(remainTask.innerText == 0){
            alert("Congrats!!! you have completed all the tasks")
        }
      

        const givenTask = document.getElementById('given-task')
        const conGivenTask = convertedToNumber('given-task')
        const remainGivenTask = conGivenTask + 1;
        givenTask.innerText = remainGivenTask;



        const history = document.getElementById('history-box');
        const currentDate = new Date().toLocaleTimeString("en-us",{
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        })

        const p =document.createElement('p');
        p.innerHTML=`
        You have Complete The Task at ${currentDate}`
        const time = document.getElementById('time')
        history.append(p);
        p.classList.add("mb-2","mt-2","p-2","text-xs","font-semibold","bg-gray-200","rounded-md")


    });
});


document.getElementById('history-btn').addEventListener('click',function(event){
    event.preventDefault();
    const history = document.getElementById('history-box');
    history.innerText = '';

})

document.getElementById('middle-btn').addEventListener('click',function(){
    window.location.href ="./secondpage.html"
})

