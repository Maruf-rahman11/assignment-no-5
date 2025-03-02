const history = document.getElementById('history-box');

document.getElementById("fix-mobile-task").addEventListener('click',function(event){
        event.preventDefault();
        const mobileTask = document.getElementById('box-1').innerText
        const p =document.createElement('p');

        p.innerText= transaction(mobileTask)
        history.append(p);
        p.classList.add("mb-2","mt-2","p-2","text-xs","font-semibold","bg-gray-200","rounded-md")
})
document.getElementById("add-dark-mode").addEventListener('click',function(event){
        event.preventDefault();
        const darkModeTask = document.getElementById('box-2').innerText
        const p =document.createElement('p');

        p.innerText= transaction(darkModeTask)
        history.append(p);
        p.classList.add("mb-2","mt-2","p-2","text-xs","font-semibold","bg-gray-200","rounded-md")
})
document.getElementById("opmtimize-home").addEventListener('click',function(event){
        event.preventDefault();
        const opmtimizeHome = document.getElementById('box-3').innerText
        const p =document.createElement('p');

        p.innerText= transaction(opmtimizeHome);
        history.append(p);
        p.classList.add("mb-2","mt-2","p-2","text-xs","font-semibold","bg-gray-200","rounded-md")
})
document.getElementById("new-emoji").addEventListener('click',function(event){
        event.preventDefault();
        const newEmoji = document.getElementById('box-4').innerText
        const p =document.createElement('p');

        p.innerText= transaction(newEmoji);
        history.append(p);
        p.classList.add("mb-2","mt-2","p-2","text-xs","font-semibold","bg-gray-200","rounded-md")
})
document.getElementById("OpenAI-task").addEventListener('click',function(event){
        event.preventDefault();
        const aiTask = document.getElementById('box-5').innerText
        const p =document.createElement('p');

        p.innerText= transaction(aiTask);
        history.append(p);
        p.classList.add("mb-2","mt-2","p-2","text-xs","font-semibold","bg-gray-200","rounded-md")
})
document.getElementById("Job-task").addEventListener('click',function(event){
        event.preventDefault();
        const jobTask = document.getElementById('box-6').innerText
        const p =document.createElement('p');

        p.innerText= transaction(jobTask);
        history.append(p);
        p.classList.add("mb-2","mt-2","p-2","text-xs","font-semibold","bg-gray-200","rounded-md")
})

