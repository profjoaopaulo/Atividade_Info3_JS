let data = new Date();
//let h1 = document.getElementById("tagh1");
let hora = data.getHours();
let msg = '';

if (hora < 12) {
    msg = "Bom Dia!";
}
else if (hora < 18) {
    msg = "Boa Tarde!";
}
else {
    msg = "Boa Noite!";
}

let x = "";

for (let i = 0; i < hora; i++) {
    x += msg + "<br/>"; //x = x + msg
}

//h1.innerText = x;
document.body.innerHTML = "<h1 style = 'color: red; background-color: black'>" + x + "</h1>";
