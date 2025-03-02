const colors = ["bg-red-200", "bg-green-200", "bg-blue-200","bg-gray-200"]; 
let index = 0; 

document.getElementById("nav-btn").addEventListener("click", function() {
     const body = document.getElementById("body");

        
            body.classList.remove(colors[index]);

            index = (index + 1) % colors.length;

        
            body.classList.add(colors[index]);
        });