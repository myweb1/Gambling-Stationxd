currentmoney = Number(localStorage.getItem('money')) || 0;
document.getElementById("moneyDisplay").innerText = currentmoney;
var numgenetatores = 0
var userbet

function autosave() {
    localStorage.setItem('money', currentmoney);
    alert("Progreso guardado! Dinero actual: $" + currentmoney);
}

window.addEventListener("keydown", function entermalo(enter) {
    if ( enter.keyCode == "13" ) {
        enter.preventDefault()
    }
})
setInterval(autosave, 60000);

function numgenetator() {
    if (currentmoney < 100) {
        alert("No tienes suficiente dinero para apostar. Necesitas al menos $500.");
        
    }
   
        
    if (currentmoney >= 100) {
        currentmoney -= 100
        userbet = document.getElementById("userNumber").value
        numgenetatores = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        console.log(numgenetatores);
        document.getElementById("moneyDisplay").innerText = currentmoney;
        
        if (userbet == numgenetatores) {
            currentmoney += 1000
            alert("Felicidades, gvanaste $1,000! Tu numero era " + numgenetatores + " y apostaste al " + userbet + ". Tu dinero actual es: $" + currentmoney);
            console.log("i entered :DD")
            document.getElementById("moneyDisplay").innerText = currentmoney;
        }
        else {
            alert("Lo siento, perdiste $100 xdddddd Tu numero era " + numgenetatores + " y apostaste al " + userbet + ". Tu dinero actual es: $" + currentmoney);
            
            document.getElementById("moneyDisplay").innerText = currentmoney;
        }
    }
}
function save() {
    localStorage.setItem('money', currentmoney);
    alert("Progreso guardado! Dinero actual: $" + currentmoney);
}