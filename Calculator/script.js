// let string = "";
// let buttons = document.querySelectorAll(".button");
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             document.querySelector('input').value = string;
//         }
//         else if(e.target.innerHTML == "AC"){
//             string = "";
//             document.querySelector('input').value = string;
//         }
//         else if(e.target.innerHTML == "M-"){
//             string = string.slice(0,-1);
//             document.querySelector('input').value = string;
//         }
//         else{
//             console.log(e.target)
//             string = string + e.target.innerHTML;
//             console.log(string);
//             document.querySelector('input').value = string;
//         }
//     })
// })

let string = "";
let buttons = document.querySelectorAll(".button");
let exstring = "";
let evstring = "";

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            string = string.toString();
            evstring = string;
            evstring = evstring.toString();
            document.querySelector(".input").value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            document.querySelector(".input").value = string;
        }
        else if (e.target.innerText == "."){
            if(evstring == true){
                evstring == "";
                document.querySelector(".input").value = evstring;
            }
            else{
                exstring = exstring.slice(0,-1);
                string = string.slice(0,-1); 
                document.querySelector(".input").value = exstring;
            }
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            console.log(string);
            exstring = string;
            console.log(exstring);
            document.querySelector(".input").value = string;
        }
    })
})
